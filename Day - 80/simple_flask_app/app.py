from flask import Flask,render_template,request,redirect
from flask_sqlalchemy import SQLAlchemy

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///studentdb.db'
db = SQLAlchemy(app)

class Student(db.Model):
    id = db.Column(db.Integer, primary_key = True)
    name = db.Column(db.String(100), nullable = False)
    dept = db.Column(db.String(100), nullable = False)

    def __repr__(self):
        return "Block Post" +str(self.id) +"His name is "+ self.name

@app.route('/')
def index():
      return render_template('index.html')


@app.route('/posts', methods = ["GET", "POST"])
def posts():
    if request.method == "POST":
        stu_name = request.form['name']
        stu_dept = request.form['class']
        new_stu = Student(name = stu_name, dept = stu_dept)
        db.session.add(new_stu)
        db.session.commit()
        return redirect('/posts')
    else:  
        details = Student.query.all()
        return render_template('posts.html', students = details)



@app.route('/posts/delete/<int:id>')
def delete(id):
    post = Student.query.get_or_404(id)
    db.session.delete(post)
    db.session.commit()
    return redirect('/posts')

@app.route('/hello/<string:name>')
def hello(name):
    return "Hello," + name

@app.route('/getMethod', methods = ['GET'])
def get_req():
    return "Hello Get Method"    

if __name__ == "__main__":
    app.run(debug=True);    