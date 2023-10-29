from flask import Flask
from flask_sqlalchemy import SQLAlchemy


app = Flask(__name__, instance_relative_config=True, template_folder='templates')
app.config["SQLALCHEMY_DATABASE_URI"] = "sqlite:///storage.sqlite3"
db = SQLAlchemy(app)

from app.controllers import default
