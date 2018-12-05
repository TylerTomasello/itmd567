import random

from time import sleep
from util import db

from flask import (jsonify,
                   make_response)


def register_apis(app, db):
    @app.route("/api/users/")
    def post_user():
        posts = db.user_collection
        post_data = {
            'firstName': fname,
            'lastName': lname,
            'email': email
            }

        result = posts.insert_one(post_data)
        return

    @app.route("/api/users/<email>")
    def get_user_by_email():
        email_post = posts.find_one({'email': email})

        return jsonify(email_post)
