from flask import Flask, render_template

app = Flask(__name__, template_folder='templates') 

@app.route('/')
def index():
    return render_template('/login.html')

@app.route('/dashboard', methods=['GET', 'POST'])
def dashboard():
    return render_template('dashboard.html')

@app.route('/index')
def login():
    return render_template('index.html')

if __name__ == '__main__':
    app.run(debug=True)
