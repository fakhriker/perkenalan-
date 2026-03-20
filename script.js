const codeText = `function introduce() {
  const name = "Fakhri";
  const skill = ["HTML", "Arduino", "ESP32"];

  console.log("Hello, I'm " + name);
}`;

const codeElement = document.getElementById("code");

let index = 0;
let isDeleting = false;

function typeLoop() {
  if (!isDeleting) {
    codeElement.textContent = codeText.substring(0, index++);
    
    if (index > codeText.length) {
      isDeleting = true;
      setTimeout(typeLoop, 4000);
      return;
    }
  } else {
    codeElement.textContent = codeText.substring(0, index--);
    
    if (index < 0) {
      isDeleting = false;
    }
  }

  setTimeout(typeLoop, isDeleting ? 20 : 30);
}

typeLoop();
