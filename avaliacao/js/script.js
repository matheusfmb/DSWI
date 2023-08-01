document.addEventListener("DOMContentLoaded", function() {
    // home - conteudo
    if (window.innerWidth > 1000) {
    gsap.to(".img-home", {duration: 2, x: 180});
    }

    gsap.to(".text-content-home", {duration: 2, x: -130});
    gsap.to(".form-group", { opacity: 1, duration: 1.5 });

    

    document.getElementById('btn-contato').addEventListener('click', function(event) {
        event.preventDefault();
        const name = document.getElementById("name").value;
        const phone = document.getElementById("phone").value;
        const email = document.getElementById("email").value;
        const notes = document.getElementById("notes").value;
        if (name == "" && phone == "" && email == "" && notes == "") {
            alert("Preencha todos os Campos");
        }else{
            alert("Contato enviado!");
            document.getElementById("name").value = "";
            document.getElementById("phone").value = "";
            document.getElementById("email").value = "";
            document.getElementById("notes").value = "";
        }
    });
})


document.addEventListener("DOMContentLoaded", function() {
    document.getElementById('btn-agendamento').addEventListener('click', function(event) {
        event.preventDefault();
        const name = document.getElementById("name").value;
        const phone = document.getElementById("phone").value;
        const email = document.getElementById("email").value;
        const date = document.getElementById("date").value;
        const time = document.getElementById("time").value;
        const notes = document.getElementById("notes").value;
        if (name == "" || phone == "" || email == "" || date == "" || time == "" || notes == "") {
            alert("Preencha todos os Campos");
        }else{
            alert("Agendamento Realizado");
            document.getElementById("name").value = "";
            document.getElementById("phone").value = "";
            document.getElementById("email").value = "";
            document.getElementById("date").value = "";
            document.getElementById("time").value = "";
            document.getElementById("notes").value = "";
        }
    });

})