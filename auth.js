function register(){
  let u = document.getElementById("newUser").value;
  let p = document.getElementById("newPass").value;

  localStorage.setItem("user", u);
  localStorage.setItem("pass", p);

  alert("Registered successfully!");
  window.location.href = "login.html";
}

function login(){
  let u = document.getElementById("user").value;
  let p = document.getElementById("pass").value;

  if(u === localStorage.getItem("user") && p === localStorage.getItem("pass")){
    window.location.href = "index.html";
  } else {
    alert("Invalid login!");
  }
}