window.onload = switchVisible();
function switchVisible() {
  if (document.getElementById('light_mode')) {

    if (document.getElementById('light_mode').style.display == 'none') {
      document.getElementById('light_mode').style.display = 'block';
      document.getElementById('dark_mode').style.display = 'none';
    }
    else {
      document.getElementById('light_mode').style.display = 'none';
      document.getElementById('dark_mode').style.display = 'block';
    }

  }
  const element = document.body;
  element.classList.toggle("dark_mode");
}
