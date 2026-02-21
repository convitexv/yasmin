function abrirVideo(){
  const convite = document.getElementById("convite");
  const video = document.getElementById("video");
  convite.style.display = "none";
  video.style.display = "block";
  video.currentTime = 0;
  video.play();
   video.ontimeupdate = function(){
    const tempoAtual = video.currentTime;
    const duracao = video.duration;
    if (duracao - tempoAtual <= 2){
    fade.style.opacity = "1";
    /*pagina2*/
    setTimeout(() => {
      window.location.href = "pag2.html";
    }, 600);
  };
}
}