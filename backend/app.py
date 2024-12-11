import json

from flask import Flask


app = Flask(__name__)

data = []
with open("mds-list.json", "r") as file:
    data = json.load(file)


@app.route("/mds/<id>", methods=["GET"])
def get_by_id(id):
    items = [item for item in data["data"]["stations"] if item["station_id"] == id]
    if len(items) == 0:
        return "Any data was found"

    return items[0]


@app.route("/mds", methods=["GET"])
def get_all():
    return data["data"]["stations"]


if __name__ == '__main__':
    app.run(debug=True, host='0.0.0.0', port=5005)
