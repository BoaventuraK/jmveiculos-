from app import app, db

if __name__ == "__main__":
    # db.create_all()
    with app.app_context():
     db.create_all()

    app.run()

