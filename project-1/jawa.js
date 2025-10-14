const derak = document.querySelector("#tombol-mode");

derak.addEventListener("click", function() {
    console.log("Tema gelap");
    document.body.classList.toggle("dark-mode");
});