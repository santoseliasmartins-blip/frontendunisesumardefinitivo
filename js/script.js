// ===============================
// BOTÃO VOLTAR AO TOPO
// ===============================

$(window).scroll(function () {

    if ($(this).scrollTop() > 300) {
        $("#topo").fadeIn();
    } else {
        $("#topo").fadeOut();
    }

});

$("#topo").click(function () {

    $("html, body").animate({
        scrollTop: 0
    }, 700);

});

// ===============================
// MENU MUDA DE COR AO ROLAR
// ===============================

$(window).scroll(function () {

    if ($(this).scrollTop() > 80) {
        $("header").css("background", "#8B0000");
    } else {
        $("header").css("background", "#B22222");
    }

});

// ===============================
// ANIMAÇÃO DAS PIZZAS
// ===============================

$(".pizza").hide().each(function (i) {

    $(this).delay(i * 200).fadeIn(800);

});

// ===============================
// VALIDAÇÃO DO FORMULÁRIO
// ===============================

$("#formContato").submit(function (e) {

    e.preventDefault();

    let nome = $("#nome").val().trim();
    let email = $("#email").val().trim();
    let telefone = $("#telefone").val().trim();
    let assunto = $("#assunto").val().trim();
    let mensagem = $("#mensagem").val().trim();

    if (
        nome === "" ||
        email === "" ||
        telefone === "" ||
        assunto === "" ||
        mensagem === ""
    ) {
        alert("Preencha todos os campos.");
        return;
    }

    let regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!regexEmail.test(email)) {
        alert("Digite um e-mail válido.");
        return;
    }

    alert("Mensagem enviada com sucesso!");

    this.reset();