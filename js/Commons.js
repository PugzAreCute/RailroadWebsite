//INIT Pref For Cookies
const pref = getCookie("pref");

//Define global variables
let Cookie_Bool;
let cookie;
let current_theme = "dark";

//Execute function doStartupJS() which runs js on startup
window.onload = doStartupJS();

//Do the popup for cookies
function popup() {
  cookie = confirm("Do you agree to us using cookies to personalize user content. You can find the Cookie policy at https://putopug.github.io/RailroadWebsite/privacy/cookies.txt");
}
//Function Cookie
function Cookie(){
  //Cookie policy
  if(checkCookie() != "TRUE"){popup(); if(cookie == false){setCookie("COOKIE_CONSENT","",365)}}
  Cookie_Bool = cookie;
  if (Cookie_Bool){setCookie("COOKIE_CONSENT","TRUE",365)}
  return cookie;
}

//Declare function doStartupJS()
function doStartupJS(){
  includeHTML();
  cookieTheme();
  Cookie();
  if (checkCookie() === "TRUE"){
    Cookie_Bool = true;
  }
  switchVisible();
  if(Cookie_Bool){

  }else {
    document.cookie = "pref=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
  }
}

// COOKIE STUFF

//Function to set cookies
function setCookie(cname, cvalue, exdays) {
  var d = new Date();
  d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
  var expires = "expires="+d.toUTCString();
  document.cookie = `${cname}=${cvalue}; ${expires}; path=/;`;
}

//Function to get cookies
function getCookie(cname) {
  var name = cname + "=";
  var ca = document.cookie.split(';');
  for(var i = 0; i < ca.length; i++) {
    var c = ca[i].trim();
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}
//Function to check cookies
function checkCookie() {
  if (getCookie("COOKIE_CONSENT") != "") {
    return getCookie("COOKIE_CONSENT");
  }
}
// END COOKIE STUFF

//Toggle theme
function switchVisible() {
  if (document.getElementById('light_mode')) {

    if (document.getElementById('light_mode').style.display == 'none') {
      document.getElementById('light_mode').style.display = 'block';
      document.getElementById('dark_mode').style.display = 'none';}
      else {
        document.getElementById('light_mode').style.display = 'none';
        document.getElementById('dark_mode').style.display = 'block';
      }

    }
    const element = document.body;
    element.classList.toggle("dark_mode");
}

//Function to set/read themes from cookies
function cookieTheme() {
  function scanCookie() {
    if (getCookie("pref") != "") {
      return getCookie("pref");
    }
  }
  if (scanCookie() === "light"){
    switchVisible();
    setCookie("pref","light",365);
    current_theme = "light";
  }
  else {
    setCookie("pref","dark",365);
    current_theme = "dark";
  }
}

//Include HTML
function includeHTML() {
  var z, i, elmnt, file, xhttp;
  /*loop through a collection of all HTML elements:*/
  z = document.getElementsByTagName("*");
  for (i = 0; i < z.length; i++) {
    elmnt = z[i];
    /*search for elements with a certain atrribute:*/
    file = elmnt.getAttribute("w3-include-html");
    if (file) {
      /*make an HTTP request using the attribute value as the file name:*/
      xhttp = new XMLHttpRequest();
      xhttp.onreadystatechange = function() {
        if (this.readyState == 4) {
          if (this.status == 200) {elmnt.innerHTML = this.responseText;}
          if (this.status == 404) {elmnt.innerHTML = "Page not found.";}
          /*remove the attribute, and call this function once more:*/
          elmnt.removeAttribute("w3-include-html");
          includeHTML();
        }
      }
      xhttp.open("GET", file, true);
      xhttp.send();
      /*exit the function:*/
      return;
    }
  }
}

//Theme changing slider code
function check() {
  switchVisible();
  if(current_theme == "dark"){if(Cookie_Bool){setCookie("pref","light",365);}} else{setCookie("pref","dark",365)}
}

if (current_theme == "light"){
  document.getElementById('switch').checked = true;
}
