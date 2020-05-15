from flask import Flask,render_template,request,redirect
import os
from werkzeug.utils import secure_filename

app = Flask(__name__)

@app.route('/')
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
                image.save(os.path.join(app.config['IMAGE_UPLOADS'], filename))
            
            print("File saved")

            return redirect(request.url)



    return render_template('img-upload.html')   


if __name__ == "__main__":
    app.run(debug = True)
