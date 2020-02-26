from flask import Flask, render_template, request

app = Flask(__name__)

@app.route('/')
def show() -> 'html':
    return render_template('./index.html')

@app.route('/p2.html')
def show2() -> 'html':
    return render_template('./p2.html')
@app.route('/p3.html')
def show3() -> 'html':
    return render_template('./p3.html')
@app.route('/p4.html')
def show4() -> 'html':
    return render_template('./p4.html')
@app.route('/p5.html')
def show5() -> 'html':
    return render_template('./p5.html')
@app.route('/p6.html')
def show6() -> 'html':
    return render_template('./p6.html')
# @app

# @app.route('/')
# def show() -> 'html':
#     return render_template('./index.html')

app.run()
