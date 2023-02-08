let counter = 0;
function submit() {
  var answer = document.getElementsByClassName('quiz');
  for (var i = 0; i < answer.length; i++) {
    if (answer[i].checked) {
      counter += parseInt(answer[i].dataset.points);
      if (answer[i].value == 'true') {
        alert(
          `Você acertou isso é Legen wait for it dary: Sua pontuação é ${counter}`,
        );
        break;
      } else {
        alert(
          `Você errou, coloque um terno e tente novamente: Sua pontuação é ${counter}`,
        );
        break;
      }
    }
  }
}

function onsubmit() {
  window.location.href = 'tela.html';
}
