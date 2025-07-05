from flask import Flask
app = Flask(__name__)

@app.route('/')
def home():
    return "Welcome to StackSmash Backend (Python Flask)!"

if __name__ == '__main__':
    app.run(debug=True) 