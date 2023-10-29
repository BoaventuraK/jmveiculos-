from app import db

class Funcionario(db.Model):
    __tablename__ = "funcionarios"

    id = db.Column(db.Integer, primary_key=True, autoincrement=True)
    name = db.Column(db.String(30), unique=True)
    senha = db.Column(db.String(12))

    def __init__(self, name, senha):
        self.name = name
        self.senha = senha
    
    def __repr__(self):
        return "<User %r>" % self.name
    
class Veiculo(db.Model):
    __tablename__ = "veiculos"

    id = db.Column(db.Integer, primary_key=True)
    tipo = db.Column(db.String(10))
    cor = db.Column(db.String(10))
    marca = db.Column(db.String(20))
    modelo = db.Column(db.String(20))
    ano = db.Column(db.Integer)
    estado = db.Column(db.String(10))
    km = db.Column(db.Integer)
    pag = db.Column(db.String(10))
    leilao = db.Column(db.String(20))
    # preco = db.Column(db.Float)

    def __init__(self, tipo, cor, marca, modelo, ano, estado, km, pag, leilao):
        self.tipo = tipo
        self.cor = cor
        self.marca = marca 
        self.modelo = modelo 
        self.ano = ano 
        self.estado = estado
        self.km = km 
        self.pag = pag
        self.leilao = leilao

    def __repr__(self):
        return "<Modelo %r>" % self.modelo
    
# from app import app
# from models.tables import Veiculo
# from flask import Flask, render_template

# @app.route("/")
# def index():
#     veiculos = Veiculo.query.all()
#     return render_template('index.html', veiculos=veiculos)

    
