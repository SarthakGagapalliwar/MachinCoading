const form = document.getElementById("loginForm");
    const message = document.getElementById("message");

    form.addEventListener("submit", function(event) {
      event.preventDefault();

      const username = document.getElementById("username").value;
      const password = document.getElementById("passwor").value;

      // Dummy validation
      if (username === "admin" && password === "1234") {
        message.textContent = "Login Successful!";
        message.className = "success";
      } else 
        message.textContent = "Invalid username or password";
        message.className = "error";
      }
    });