from flask import Flask, render_template, request

app = Flask(__name__)

semua_pesan = [] #database

@app.route("/", methods=["GET","POST"])
def home():
    if request.method == 'POST':
        email = request.form['email_post']
        password = request.form['pass_post']
        pesan = request.form['pesan_post']
        semua_pesan.append({'Email': email, 'Password': password,'Pesan': pesan})
        return render_template('index.html', email_get=email, pass_get=password, pesan_get=pesan)
    else:
        return render_template('index.html')
    
if __name__ == "__main__":
    app.run(debug=True) 