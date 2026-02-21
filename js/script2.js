const video = document.getElementById('video');
const imagem = document.getElementById('imagem');
const botoes = document.querySelector('.botoes');

function ajustarTamanho() {
    const larguraTela = window.innerWidth;
    if (larguraTela <= 768) {
        botoes.style.width = '280px';
        botoes.style.gap = '25px';
    } else {
        botoes.style.width = '205px';
        botoes.style.gap = '20px';
    }
}
ajustarTamanho();
window.addEventListener('resize', ajustarTamanho);
setTimeout(() => {
    video.style.display = 'none';
    imagem.style.display = 'block';
}, 5000);