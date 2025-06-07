document.getElementById("yesBtn").addEventListener("click", function() {
    document.getElementById("responseMessage").innerHTML = "🥳 Agora posso oficialmente te chamar de MINHA princesa! 💖";
});

// Ajuste para celular: o botão "Não sei..." se move quando tocado
document.getElementById("noBtn").addEventListener("touchstart", function() {
    let maxX = window.innerWidth - this.clientWidth;
    let maxY = window.innerHeight - this.clientHeight;
    
    let newX = Math.floor(Math.random() * maxX);
    let newY = Math.floor(Math.random() * maxY);
    
    this.style.left = newX + "px";
    this.style.top = newY + "px";
});
