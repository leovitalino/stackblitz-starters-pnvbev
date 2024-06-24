const botaoCalcula = document.querySelector('button');
const resposta = document.querySelector('.resultado-imc');
const mascara = document.querySelector('.mascara-resultado');

function calcularImc() {
  const resulShow = document.querySelector('.resultado');
  const texto = document.querySelector('.texto');
  const inputPeso = document.querySelector('.peso').value;
  const inputAltura = document.querySelector('.altura').value;
  const resultadoImc = (inputPeso / (Math.pow(inputAltura, 2))).toFixed(2);

  console.log(resultadoImc);

  resulShow.innerHTML = resultadoImc

  if(resultadoImc < 16.9)
    texto.innerHTML = 'Significa que você está muito abaixo do peso';

  if(resultadoImc > 17.0 && resultadoImc < 18.4)
    texto.innerHTML = 'Significa que você está abaixo do peso';

  if(resultadoImc > 18.5 && resultadoImc < 24.9)
    texto.innerHTML = 'Significa que você está no peso ideal';

  if(resultadoImc > 25.0 && resultadoImc < 29.9)
    texto.innerHTML = 'Significa que você está com sobre-peso';

  if(resultadoImc > 30.0 && resultadoImc < 34.9)
    texto.innerHTML = 'Significa que você está com Obesidade - Grau I';
  
  if(resultadoImc > 35.0 && resultadoImc < 39.9)
    texto.innerHTML = 'Significa que você está com Obesidade - Grau II';

  if(resultadoImc > 40.0)
    texto.innerHTML = 'Significa que você está com Obesidade - Grau III';
}

function mostrarResposta() {
  resposta.style.left = '50%';
  resposta.style.transform = 'translateX(-50%)';
  mascara.style.visibility = 'visible';
}

function esconder(){
  resposta.style.left = '-100%';
  resposta.style.transform = 'translateX(0)';
  mascara.style.visibility = 'hidden';
}

botaoCalcula.addEventListener('click', calcularImc);
botaoCalcula.addEventListener('click', mostrarResposta);