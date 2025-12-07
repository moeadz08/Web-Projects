const guestbook = document.querySelector("#guestbook");
const statusMessage = document.querySelector("#form-status");

guestbook.addEventListener("submit", function(e) {
    e.preventDefault();

    const flaskAlert = document.querySelector(".alert");

    statusMessage.textContent = "";
    statusMessage.style.color = "";

    const email = document.querySelector("#email-user").value.trim();
    const pesan = document.querySelector("#pesan-user").value.trim();

    if (email === "" || pesan === "") {

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

        if (flaskAlert) {
            flaskAlert.remove();
        }

        guestbook.submit();
    }
});