var i = 0;
var txt = 'Hi. I\'m Bela.';
var speed = 60;

function typeWriter() {
  if (i < txt.length) {
    document.getElementById("typedintro").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}

document.addEventListener("DOMContentLoaded", typeWriter);
