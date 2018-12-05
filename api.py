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

    @app.route("/api/pickup/")
    def post_pickup():
        posts = db.pickup_collection
        post_data = {
            'address': address,
            'city': city,
            'state': state,
            'zip': zip,
            'date': date,
            'time': time
            }

        result = posts.insert_one(post_data)
        return

    @app.route("/api/pickup/<address>")
    def get_pickup_by_address():
        address_post = posts.find_one({'address': address})

        return jsonify(address_post)

    @app.route("/api/checkout/")
    def post_checkout():
        posts = db.checkout_collection
        post_data = {
            'cardNum': card,
            'csc': csc,
            'exp': exp,
            'name': name
            }

        result = posts.insert_one(post_data)
        return

    @app.route("/api/checkout/<cardNum>")
    def get_checkout_by_cardnum():
        cardNum_post = posts.find_one({'cardNum': card})

        return jsonify(cardNum_post)
