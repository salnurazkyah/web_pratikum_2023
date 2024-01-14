function authenticate() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
  
    // Username dan Password yang telah ditentukan
    var validUsername = "ahmad2017";
    var validPassword = "integrity";
  
    if (username === validUsername && password === validPassword) {
      alert("Login berhasil");
      window.location.href = "sukses.html";
    } else {
      alert("Login gagal. Silakan coba lagi.");
    }
  }
  