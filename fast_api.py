#
# from fastapi import FastAPI
# import uvicorn
# app = FastAPI()
#
# @app.get("/items/{item_id}")
# async def read_item(item_id):
#     return {"item_id": item_id}
#
# from fastapi import FastAPI
#
# app = FastAPI()
#
# @app.get("/items/{item_id}")
# def read_item(item_id: int):
#     return {"item_id": item_id}
#
# if __name__ == "__main__":
#     app.run(host="0.0.0.0", port=8000)
# app.py
# app.py
import Main
from flask import Flask, jsonify, make_response

app = Flask(__name__)


@app.route('/api/greeting')
def greeting():
    response = make_response('Hello from the Python backend!')
    response.headers['Access-Control-Allow-Origin'] = '*'
    return response
    #Main.main()


if __name__ == '__main__':
    app.run()
