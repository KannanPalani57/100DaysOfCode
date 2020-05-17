from flask import Flask,jsonify, make_response,session, render_template,request
import jwt
from functools import wraps
import datetime
from flask_limiter import Limiter
from flask_limiter.util import get_remote_address

app = Flask(__name__)
app.config['SECRET_KEY'] = 'secretkey'


limiter = Limiter(app,key_func = get_remote_address)

@app.route('/api')
@limiter.limit('5 per minute')
def api():
    return "only triggered 5 times per minute"



def check_for_token(func):
    @wraps(func)
    def wrapped(*args, **kwargs):
        token = request.args.get('token')
        if not token:
            return jsonify({'message': "missing token"})
        try:
            data = jwt.decode(token, app.config['SECRET_KEY'])
        except:
            return jsonify({'message': "invalid token"})
        return func(*args, **kwargs) 
    return wrapped


@app.route('/')
def hello():
    if not session.get('logged_in'):
        return render_template('login.html')
    else:
        return "Currently logged in"

@app.route('/auth')
@check_for_token
def authorize():
    return 'only viewable with tokenable person'

@app.route('/login', methods = ['GET','POST'])
def login():
    if request.form['username'] and request.form['password'] == 'password':
        session['logged_in'] = True
        token = jwt.encode({
            'user': request.form['username'],
            'exp': datetime.datetime.utcnow() + datetime.timedelta(seconds = 60)
        },
        app.config['SECRET_KEY'])
        return jsonify({'message': token.decode('UTF-8')})
    


if __name__ == "__main__":
    app.run(debug=True)
