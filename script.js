function perdonar() {
  document.getElementById('titulo').innerText = 'Te amodoro mucho mi isleña';
  document.getElementById('si').disabled = true;
  document.getElementById('no').disabled = true;
}

function moverNo() {
  if (!document.getElementById('si').disabled) {
    let nob = document.getElementById("no");
    let alto = random(1, 90);
    let ancho = random(1, 90);

    nob.style.top = alto + '%';
    nob.style.left = ancho + '%';
  }
}

function random(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

  