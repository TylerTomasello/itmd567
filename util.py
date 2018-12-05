#used nosql database via pymongo
import pymongo

#This creates the database so it can be called from other files.
class DBConnectionManager(object):
    #this makes the database runnable when the app is started
    def __init__(self, app):
        self.app = app
        self.db()

    # creation of the mongo database with all of the set hosts and collection
    # creations
    @property
    def db(self):
        mongo_client = pymongo.MongoClient(host="mongodb://localhost:27017/")

        db = mongo_client.users

        # Get collection
        user_collection = db.user_collection

        user_collection.insert_one({"firstName": "Tyler", "lastName": "Tomasello", "email": "ttomasel@hawk.iit.edu"})
