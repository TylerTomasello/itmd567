import random

from time import sleep
from util import db

from flask import (jsonify,
                   make_response)


def register_apis(app, db_connection):
    @app.route("/api/user/")

    @app.route("/api/get_product_by_id/<int:id_>")
