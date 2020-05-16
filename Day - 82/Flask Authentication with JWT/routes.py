from flask import Flask, jsonify, make_response, request
import jwt
import datetime
from functools import wraps
app = Flask(__name__)

app.config['SECRET_KEY'] = "secretkey"

def token_required(f):
    @wraps(f)
    def decorated(*args, **kwargs):
        token = request.args.get('token')

        if not token:
            return jsonify({'message': "Invalid token"}), 403

        try:
            data = jwt.decode(token, app.config['SECRET_KEY'])    
        except:
            return jsonify({'message': "Token is invalid"}), 403    
    
        return f(*args, **kwargs)

    return decorated    

@app.route('/unprotected')
def unprotected():
    return "Anyone can view this page"

@app.route('/protected')
@token_required
def protected():
    return jsonify({'message': "page only available for valid tokens"})    


@app.route('/login')
def login():
    auth = request.authorization

    if auth and auth.password == "password":
        token = jwt.encode({'user': auth.username, 'exp': datetime.datetime.utcnow() + datetime.timedelta(minutes = 30)}, app.config['SECRET_KEY'])
        
        return jsonify({'token': token.decode('UTF-8')})

    return make_response("Could not get!", 401,{"WWW-Authenticate": 'Basic realm = "Login Required"'})    



if __name__ == "__main__":
    app.run(debug=True)