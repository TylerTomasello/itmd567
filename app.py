import flask
import logging
#import pymysql.cursors

from flask import (Flask,
                   render_template,
                   request,
                   session)


app = Flask(__name__)

@app.route("/")

def home():
    return render_template("index.html")


def main():
    #logger.info("Loading app with Flask version {}".format(flask.__version__))

    #register_apis(app, db_connection_manager.db)

    #app.logger.handlers = logger.handlers
    #app.logger.setLevel(logging.DEBUG)

    app.run(host="0.0.0.0",
            port=9000,
            use_reloader=True,
            debug=True
            )

if __name__ == "__main__":
    main()

#use pymongod install
