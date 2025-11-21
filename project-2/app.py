from flask import Flask, render_template, request, redirect, url_for, flash

app = Flask(__name__)
app.secret_key = 'rahasia'

semua_pesan = []

@app.route("/", methods=["GET","POST"])
def home():
    if request.method == 'POST':
        #make sure field form nya keisi dgn bener pake get()
        email = request.form.get('email_post')
        password = request.form.get('pass_post')
        pesan = request.form.get('pesan_post')
        
        # if not email or not password or not pesan:
        #     flash("Isi yang bener!", "error")
        #     # return redirect(url_for('home'))
        #     return redirect(url_for('home'))
        
        semua_pesan.append({'Email': email, 'Password': password,'Pesan': pesan})# nympen semua data
        
        flash('Data Anda telah berhasil dicuri!', 'success')
        return redirect(url_for('home'))
    
    return render_template('index.html', daftar_pesan=semua_pesan)




if __name__ == "__main__":
    app.run(debug=True) 