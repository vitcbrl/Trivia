let counter = 0;
function submit() {
  var answer = document.getElementsByClassName('quiz');
  for (var i = 0; i < answer.length; i++) {
    if (answer[i].checked) {
      counter += parseInt(answer[i].dataset.points); //quando vc quer colocar valores a mais numa tag htlm pra depois manipular os valores no js se usa o datas atributos(mdn)
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

function click() {
  window.location.href = 'tela1.html';
}

/*function submitt() {
  var answer = document.getElementsByClassName('quiz2');
  for (var i = 0; i < answer.length; i++) {
    if (answer[i].checked) {
      alert('Você acertou isso é Legen wait for it dary');
      return false;
    } else {
      alert('Você errou, coloque um terno e tente novamente');
      return false;
    }
  }
}*/
