function updateTime() {
    const now = new Date();

    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();

    // Adiciona um zero à esquerda se for menor que 10
    hours = hours < 10 ? '0' + hours : hours;
    minutes = minutes < 10 ? '0' + minutes : minutes;
    seconds = seconds < 10 ? '0' + seconds : seconds;

    // Atualiza os elementos no HTML com as novas horas, minutos e segundos
    document.getElementById('horas').textContent = hours;
    document.getElementById('minutos').textContent = minutes;
    document.getElementById('segundos').textContent = seconds;
}

// Chama a função updateTime a cada segundo
setInterval(updateTime, 1000);

// Chama a função updateTime quando a página é carregada
window.onload = updateTime;
