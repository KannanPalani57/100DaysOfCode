from flask import Flask,jsonify, make_response,session, render_template,request,redirect
import jwt
from flask_sqlalchemy import SQLAlchemy
from functools import wraps
import datetime
from flask_limiter import Limiter
import os
from werkzeug.utils import secure_filename  
from flask_limiter.util import get_remote_address

app = Flask(__name__)
app.config['SECRET_KEY'] = 'secretkey'
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///user.db '

limiter = Limiter(app,key_func = get_remote_address)

db = SQLAlchemy(app)



@app.route('/api')
@limiter.limit('5 per minute')
def api():
    return "5 requests can only made within a minute"



def check_for_token(func):
    @wraps(func)
    def wrapped(*args, **kwargs):
        token = request.args.get('token')
        public_key = open('jwt-key.pub').read()
        if not token:
            return jsonify({'message': "missing token"})
        try:
            data = jwt.decode(token, public_key, algorithms = ['RS256'])
        except:
            return jsonify({'message': "invalid token"})
        return func(*args, **kwargs) 
    return wrapped


@app.route('/')
@limiter.limit('5 per minute')
def hello():
    if not session.get('logged_in'):
        return render_template('auth.html')
    else:
        return "Currently logged in"

@app.route('/auth')
@check_for_token
def authorize():
    return render_template('authPerson.html')

@app.route('/login', methods = ['GET','POST'])
@limiter.limit('5 per minute')
def login():
     username = request.form['username']

     password = request.form['password']

     registered_user = User.query.filter_by(name=username,password=password).first()

     if registered_user:
         private_key = open('jwt-key').read()
         token = jwt.encode({
             'user': username,
             'exp': datetime.datetime.utcnow() + datetime.timedelta(seconds = 50)
         }, private_key, algorithm = 'RS256'
         )
         get_token = token.decode('UTF-8')
         return render_template('img-upload.html', message = get_token)
     if not registered_user:
         return "There is a problem with your Username & Password"    
    
    #  if request.form['username'] and request.form['password'] == 'password1':    
    #     session['logged_in'] = True
        


class User(db.Model):
   id = db.Column('id', db.Integer, primary_key = True)
   name = db.Column(db.String(100))
   email = db.Column(db.String(60))
   password = db.Column(db.String(60)) 
       

@app.route('/new')
def newone():
    return "hello"


@app.route('/signup', methods = ['GET', 'POST'])
def signup():
     if request.method == "POST":
         user_name = request.form['username']
         user_email = request.form['email']
         user_password = request.form['password']
         new_user = User(name = user_name, email= user_email, password = user_password)
         db.session.add(new_user)
         db.session.commit()
         return render_template('auth.html', id = id)

     return render_template('signup.html')


@app.route('/img')
def mainRoute():
    return render_template('base.html', name = "Your Name")

#note: give your path here, so that it save that file on your disk..(imp)
app.config['IMAGE_UPLOADS'] = "D:/Flask_Python/Simple_File_Upload/uploads/    images"
app.config['ALLOWED_IMAGE_EXTENSIONS'] = ['PNG','JPEG','JPG','GIF']

def allowed_image(filename):
    if not "." in filename:
        return False
    ext = filename.rsplit(".",1)[1]

    if ext.upper() in app.config['ALLOWED_IMAGE_EXTENSIONS']:
        return True
    else:
        return False 

@app.route('/img-upload', methods = ["GET", "POST"])

def img_upload():
    if request.method == "POST":
        if request.files:
            image = request.files['file']
            
            if image.filename == "":
                print("Image must Have a File name")
                return redirect(request.url)

            if not allowed_image(image.filename):
                print("The file extension not allowed")
                return redirect(request.url)    

            else:
                filename = secure_filename(image.filename)
                image.save(filename)
            
            print("File saved")

            

            return render_template('success.html', name = image.filename)



    return render_template('img-upload.html')   



if __name__ == "__main__":
    app.run(debug=True)
