import pymongo

class DBConnectionManager(object):
    def __init__(self, app):
        self.app = app
        self.db()

    @property
    def db(self):
        mongo_client = pymongo.MongoClient(host="10.129.111.21:27017")

        db = mongo_client.users

        # Get collection
        user_collection = db.user_collection

        test_collection.insert_one({"firstName": "Tyler", "lastName": "Tomasello", "email": "ttomasel@hawk.iit.edu"})
