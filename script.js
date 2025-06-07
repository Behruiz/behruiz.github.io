document.getElementById("acceptBtn").addEventListener("click", function() {
    document.getElementById("startScreen").style.display = "none";
    document.getElementById("questionScreen").style.display = "block";
});

document.getElementById("yesBtn").addEventListener("click", function() {
    document.getElementById("responseMessage").innerHTML = "🥳 Que alegria! Mal posso esperar por essa jornada juntos! 💖";
});

// Para celular, faz o botão "Não sei..." se mover quando tocado
document.getElementById("noBtn").addEventListener("touchstart", function() {
    let maxX = window.innerWidth - this.clientWidth;
    let maxY = window.innerHeight - this.clientHeight;

    let newX = Math.floor(Math.random() * maxX);
    let newY = Math.floor(Math.random() * maxY);

    this.style.left = newX + "px";
    this.style.top = newY + "px";
});
