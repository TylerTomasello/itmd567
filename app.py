import flask
import logging
import pymongo

#use of flask because found it to work well with VUE js and Python
from flask import (Flask,
                   render_template,
                   request,
                   session)


#defalut when using flask
app = Flask(__name__)

#route to main index page
@app.route("/")

#call the html page that will be used with the templates
def home():
    return render_template("index.html")

#declare a main to run the app and where at
def main():
    #running the app on localhost whcih is port 5000 by default
    app.run(host="0.0.0.0",
            use_reloader=True,
            debug=True
            )

#call the main from the VUE js to deploy and manipulate the DOM
if __name__ == "__main__":
    main()
