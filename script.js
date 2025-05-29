function atualizarContador() {
    const dataLancamento = new Date("2025-07-01T00:00:00");
    const agora = new Date();
    const diferenca = dataLancamento - agora;

    if (diferenca <= 0) {
        document.getElementById("contador").innerText = "LANÇADO!";
        return;
    }

    const dias = Math.floor(diferenca / (1000 * 60 * 60 * 24));
    const horas = Math.floor((diferenca / (1000 * 60 * 60)) % 24);
    const minutos = Math.floor((diferenca / (1000 * 60)) % 60);
    const segundos = Math.floor((diferenca / 1000) % 60);

    document.getElementById("contador").innerText = `${dias}d ${horas}h ${minutos}m ${segundos}s`;
}

setInterval(atualizarContador, 1000);
atualizarContador();
