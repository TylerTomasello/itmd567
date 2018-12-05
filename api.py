import random
#used nosql database via pymongo
import pymongo

from time import sleep
from util import db

from flask import (jsonify,
                   make_response)

#Function to get the api's to run on applocation deployment
def register_apis(app, db):
    #route to create a user when signup information is submitted
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

    #route to get the user information via email when trying to login
    @app.route("/api/users/<email>")
    def get_user_by_email():
        email_post = posts.find_one({'email': email})

        return jsonify(email_post)

    #route to insert into the database of the users pickup information that they
    # inputted
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

    #route to get the pickup information based on the inputted and stored address
    @app.route("/api/pickup/<address>")
    def get_pickup_by_address():
        address_post = posts.find_one({'address': address})

        return jsonify(address_post)

    #route to get the pickup information based on the inputted and stored city
    @app.route("/api/pickup/<city>")
    def get_pickup_by_city():
        city_post = posts.find_one({'city': city})

        return jsonify(city_post)

    #route to get the pickup information based on the inputted and stored state
    @app.route("/api/pickup/<state>")
    def get_pickup_by_state():
        state_post = posts.find_one({'state': state})

        return jsonify(state_post)

    #route to insert into the database the users payment information that was inputted
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

    #route to get the payment information of the user based on the credit card number
    # if the user chose to save the information.
    @app.route("/api/checkout/<cardNum>")
    def get_checkout_by_cardnum():
        cardNum_post = posts.find_one({'cardNum': card})

        return jsonify(cardNum_post)
