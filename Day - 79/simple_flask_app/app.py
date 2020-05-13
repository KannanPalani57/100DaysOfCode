from flask import Flask,render_template

app = Flask(__name__)

@app.route('/')
def index():
      return render_template('index.html')


details = [
    {
        "name": "Kannan",
        "class": "BCA",
    },
    {
        "name": "Dinesh",
        "class": "BCA",
    }
]

@app.route('/posts')
def posts():
    return render_template('posts.html', students = details)

@app.route('/hello/<string:name>')
def hello(name):
    return "Hello," + name

@app.route('/getMethod', methods = ['GET'])
def get_req():
    return "Hello Get Method"    

if __name__ == "__main__":
    app.run(debug=True);    