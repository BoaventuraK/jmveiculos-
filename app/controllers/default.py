from app import app, db
from app.models.tables import Veiculo
from flask import redirect, render_template, request, url_for

@app.route("/",  methods = ['GET', 'POST'])
def index():
    veiculos = Veiculo.query.all()
    return render_template('principal.html',veiculos=veiculos)


@app.route("/login/")
def login():
    return render_template('login.html')

@app.route("/add/",methods=["GET", "POST"])
def add():
    if request.method == "POST":
        veiculo = Veiculo(request.form['tipo'], request.form['cor'], request.form['marca'], request.form['modelo'], request.form['ano'], request.form['estado'], request.form['km'], request.form['pag'], request.form['leilao'])
        db.session.add(veiculo)
        db.session.commit()
        return redirect(url_for('index')) 
    return render_template("add.html")

# @app.route("/", methods=['POST'])
# def test():
#     usuario = usuario
#     password = password
#     if usuario == "admin" and password == "1234":
#        return render_template("")
#     else:

@app.route("/suporte/")
def suporte():
    return render_template('suporte.html')

@app.route("/edit/<int:id>", methods=['GET', 'POST'])
def edit(id):
    veiculo = Veiculo.query.get(id)
    if request.method == 'POST': 
        veiculo.tipo = request.form['tipo']
        veiculo.cor = request.form['cor']
        veiculo.marca = request.form['marca']
        veiculo.modelo = request.form['modelo']
        veiculo.ano = request.form['ano']
        veiculo.estado = request.form['estado']
        veiculo.km = request.form['km']
        veiculo.pag = request.form['pag']
        veiculo.leilao = request.form['leilao']
        db.session.commit()
        return redirect(url_for('index'))   
    return render_template("edit.html", veiculo=veiculo)


@app.route("/delete/<int:id>")
def delete(id):
    veiculo = Veiculo.query.get(id)
    db.session.delete(veiculo)
    db.session.commit()
    return redirect(url_for("index"))
