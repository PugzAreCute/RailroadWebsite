function secureServer(id) {
  var element = document.getElementById(id);
  if (element.getAttribute("class") === "secureServer") {
    element.setAttribute("class", "")
    return;
  }
  element.setAttribute("class", "secureServer")
  return;
}
