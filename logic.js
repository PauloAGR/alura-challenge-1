function checkInput() {
  const change_text = document.querySelector(".text_encrypt_warning");
  var textToEncrypt = document.getElementById("txtEncrypt").value;
  if (!isCharacterALetter(textToEncrypt.charAt(textToEncrypt.length - 1))) {
    change_text.textContent = "Ingrese solo letras";
    change_text.style.color = "red";
  } else {
    change_text.textContent = "(!) Solo letras minúsculas y sin acentos";
    change_text.style.color = "#0A3871";
  }
}

function isCharacterALetter(char) {
  return char.toLowerCase() != char.toUpperCase();
}

function encryptText() {
  let result = document
    .getElementById("txtEncrypt")
    .value.toLowerCase()
    .replace(/e/gi, "enter")
    .replace(/i/gi, "imes")
    .replace(/a/gi, "ai")
    .replace(/o/gi, "ober")
    .replace(/u/gi, "ufat");
  console.log(result);
  document.getElementById("txtDecrypt").value = result;
  document.getElementById("txtEncrypt").value = "";
  document.getElementById("btnCopy").style.display = "block";
  document.getElementById("text_msg_no_found").style.display = "none";
  document.getElementById("show_or_hide").style.display = "none";
}

function decryptText() {
  let result = document
    .getElementById("txtEncrypt")
    .value.toLowerCase()
    .replace(/enter/gi, "e")
    .replace(/imes/gi, "i")
    .replace(/ai/gi, "a")
    .replace(/ober/gi, "o")
    .replace(/ufat/gi, "u");
  console.log(result);
  document.getElementById("txtDecrypt").value = result;
  document.getElementById("txtEncrypt").value = "";
  document.getElementById("btnCopy").style.display = "block";
  document.getElementById("text_msg_no_found").style.display = "none";
  document.getElementById("show_or_hide").style.display = "none";
}

function copyToClipboard() {
  // Get the text field
  var copyText = document.getElementById("txtDecrypt");

  // Select the text field
  copyText.select();
  copyText.setSelectionRange(0, 99999); // For mobile devices

  // Copy the text inside the text field
  navigator.clipboard.writeText(copyText.value);
  document.getElementById("txtDecrypt").value = "";
  document.getElementById("show_or_hide").style.display = "block";

}
