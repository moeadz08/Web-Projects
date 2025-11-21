const Registrasi = document.querySelector("#registrasi");
const statusMessage = document.querySelector("#form-status");

Registrasi.addEventListener("submit", function(e) {
    e.preventDefault();

    const flaskAlert = document.querySelector(".alert");

    // 1. RESET STATUS SEBELUM VALIDASI BARU
    statusMessage.textContent = "";
    statusMessage.style.color = "";

    const email = document.querySelector("#email-user").value.trim();
    const pass = document.querySelector("#pass-user").value.trim();
    const pesan = document.querySelector("#pesan-user").value.trim();

    if (email === "" || pass === "" || pesan === "") { // Validasi GAGAL

        // **LANGKAH KRITIS:** Hapus pesan Flash Flask jika ada!
        if (flaskAlert) {
            flaskAlert.remove();
        }

        statusMessage.textContent = "Error: Semua field wajib diisi!";
        statusMessage.style.color = "red";
        statusMessage.style.backgroundColor = "#f4f4f4";
        statusMessage.style.fontWeight = "700";
        statusMessage.style.borderRadius = "8px";
        statusMessage.style.padding = "15px";
        statusMessage.style.fontSize = "16px";
        statusMessage.style.margin = "1.5rem 0 0 0";
        statusMessage.style.border = "1px solid #c3e6cb";
    } else {

        // Opsional: Hapus alert sebelum submit jika Anda ingin bersih total
        if (flaskAlert) {
            flaskAlert.remove();
        }

        Registrasi.submit();
    }
});