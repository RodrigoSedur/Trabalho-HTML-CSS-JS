document.getElementById('verNovidadesBtn').addEventListener('click', function() {
    document.getElementById('novidadesSection').scrollIntoView({ behavior: 'smooth' });
});

function sair() {
    // Redireciona para a página de login (ou outra página apropriada)
    location.href = "SRC/loginPage.html";
}