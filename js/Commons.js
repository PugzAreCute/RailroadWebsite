window.onload = dark();
function dark() {
  var x = document.getElementById("light_mode");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
  var element = document.body;
  element.classList.toggle("dark_mode");
}
