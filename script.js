//Selectores
const input = document.querySelector("#input-texto");
const btnEncriptador = document.querySelector("#encriptar");
const btnDesencriptar = document.querySelector("#desencriptar");
const mensaje = document.querySelector("#mensaje");
const btnCopiar = document.querySelector("#copiar");


document.getElementById("aparece").style.display = 'none';
inputverificar();


document.getElementById("desaparece").style.display = 'block';
inputverificar();


document.getElementById('btnEncriptar').onclick = (e) => {
  e.preventDefault();
  const textoEncriptado = encriptar(input.value.toLowerCase());
  mensaje.value = textoEncriptado;
  input.value = "";
  aparece()
}

document.getElementById('btnDesencriptar').onclick = (e) => {
  e.preventDefault();
  const textoDesencriptado = desencriptar(input.value);
  mensaje.value = textoDesencriptado;
  input.value = "";
  aparece()
}

document.getElementById('btnCopiar').onclick = (e) => {
  e.preventDefault();
  const mensaje = document.querySelector("#mensaje");
  mensaje.select();
  navigator.clipboard.writeText(mensaje.value)
  mensaje.value = "";
}

function encriptar(stringEncriptada) {
  let matrixCode = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]]
  stringEncriptada = stringEncriptada.toLowerCase()
  for (let i = 0; i < matrixCode.length; i++) {
    if (stringEncriptada.includes(matrixCode[i][0])) {
      stringEncriptada = stringEncriptada.replaceAll(matrixCode[i][0], matrixCode[i][1])
    }
  }
  return stringEncriptada
}

function desencriptar(stringDesencriptada) {
  let matrixCode = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]]
  stringDesencriptada = stringDesencriptada.toLowerCase()
  for (let i = 0; i < matrixCode.length; i++) {
    if (stringDesencriptada.includes(matrixCode[i][1])) {
      stringDesencriptada = stringDesencriptada.replaceAll(matrixCode[i][1], matrixCode[i][0])
    }
  }
  return stringDesencriptada
}

function aparece() {
  document.getElementById("desaparece").style.display = 'none';
  document.getElementById("aparece").style.display = 'block';
}

function texto() {
  document.getElementById("aparece").style.display = 'none';
  document.getElementById("desaparece").style.display = 'block';
}

function inputverificar() {
  var inputPalabra = document.querySelector("#input-texto");
  inputPalabra.addEventListener("keypress", function (e) {
    var keyCode = (e.keyCode ? e.keyCode : e.which);

    if (keyCode > 47 && keyCode < 65) {
      e.preventDefault();
    }
  });
}
