// MODO ESCURO

const tema = document.getElementById("tema");

tema.addEventListener("click", function () {

    document.body.classList.toggle("escuro");

    if (document.body.classList.contains("escuro")) {

        tema.textContent = "☀️";

    } else {

        tema.textContent = "🌙";

    }

});


// NOTÍCIA PRINCIPAL

function abrirNoticia() {

    alert(
        "⚽ FUTEBOL NEWS\n\n" +
        "O mercado do futebol ganhou novas " +
        "movimentações nesta temporada.\n\n" +
        "Esta é uma notícia de demonstração."
    );

}


// PESQUISA

const pesquisa =
    document.getElementById("pesquisa");

pesquisa.addEventListener("input", function () {

    const texto =
        pesquisa.value.toLowerCase();

    const cards =
        document.querySelectorAll(".card");

    cards.forEach(function (card) {

        const conteudo =
            card.textContent.toLowerCase();

        if (conteudo.includes(texto)) {

            card.style.display = "block";

        } else {

            card.style.display = "none";

        }

    });

});


// CADASTRO

function cadastrar() {

    const email =
        document.getElementById("email").value;

    const mensagem =
        document.getElementById("mensagem");

    if (email === "") {

        mensagem.textContent =
            "Digite seu e-mail.";

        mensagem.style.color =
            "#fecaca";

        return;
    }

    mensagem.textContent =
        "✅ Cadastro realizado com sucesso!";

    mensagem.style.color =
        "#bbf7d0";

    document.getElementById("email").value = "";

}
