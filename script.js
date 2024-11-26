// Manipular o envio do formulário de contato
document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault();
  
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;
  
    if (name && email && message) {
      document.getElementById("status").textContent = "Mensagem enviada com sucesso!";
      document.getElementById("status").style.color = "green";
      this.reset();
    } else {
      document.getElementById("status").textContent = "Por favor, preencha todos os campos.";
      document.getElementById("status").style.color = "red";
    }
  });
  