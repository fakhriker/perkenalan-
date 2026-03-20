const codeText = `function introduce() {
  const name = "Fakhri";
  const skill = ["HTML", "Arduino", "ESP32"];

  console.log("Hello, I'm " + name);
}`;

let i = 0;
function typing() {
  if (i < codeText.length) {
    document.getElementById("code").textContent += codeText.charAt(i);
    i++;
    setTimeout(typing, 30);
  }
}

typing();
