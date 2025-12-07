from flask import Flask, render_template, request, redirect, url_for, flash

app = Flask(__name__)
app.secret_key = 'rahasia'

semua_pesan = []

@app.route("/", methods=["GET","POST"])
def home():
    if request.method == 'POST':
        email = request.form.get('email_post')
        pesan = request.form.get('pesan_post')
        
        semua_pesan.append({'Email': email,'Pesan': pesan})
        
        flash('Data Anda telah berhasil dikirim!', 'success')
        return redirect(url_for('home'))
    
    return render_template('index.html', daftar_pesan=semua_pesan)

if __name__ == "__main__":
    app.run(debug=True) 