# app.py

from flask import Flask, jsonify, make_response

app = Flask(__name__)


@app.route('/api/greeting')
def greeting():
    response = make_response('Hello from the Python backend!')
    response.headers['Access-Control-Allow-Origin'] = '*'
    import Main
    Main.main()
    return response


if __name__ == '__main__':
    app.run()
