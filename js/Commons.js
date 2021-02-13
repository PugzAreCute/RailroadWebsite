//INIT Pref For Cookies
const pref = getCookie("pref");

let Cookie_Bool;

//Execute function doStartupJS() which runs js on startup
window.onload = doStartupJS();

//Function Cookie

function Cookie(){
  //Cookie policy
  let cookie = confirm("Do you agree to us using cookies to personalize user content. You can find the Cookie policy at https://putopug.github.io/RailroadWebsite/privacy/cookies.txt");
  Cookie_Bool = cookie;
  return cookie;
}

//Declare function doStartupJS()
function doStartupJS(){
  Cookie();
  switchVisible();
  if(Cookie_Bool){
    checkCookieTheme();
  }else {
    document.cookie = "pref=;expires=Thu, 01 Jan 1970 00:00:00 UTC;path=/RailroadWebsite;";
  }
}

// COOKIE STUFF

//Function to set cookies
function setCookie(cname, cvalue, exdays) {
  var d = new Date();
  d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
  var expires = "expires="+d.toUTCString();
  document.cookie = `${cname}=${cvalue};${expires};path=/RailroadWebsite`;
}

function unsetCookie(cname, cvalue){
  document.cookie = `${cname}=${cvalue};expires=Thu, 01 Jan 1970 00:00:00 UTC;path=/RailroadWebsite`;
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
  if (pref != "") {
    return pref;
  } else {
    setCookie("pref", "dark", 365);
  }
}
// END COOKIE STUFF

//Check the cookie which says the last used theme
function checkCookieTheme() {
  if (checkCookie("pref") === "light") {
    switchVisible();
    document.getElementById("switch").checked = true;
  }
}

//Toggle theme
function switchVisible() {
  if (document.getElementById('light_mode')) {

    if (document.getElementById('light_mode').style.display == 'none') {
      document.getElementById('light_mode').style.display = 'block';
      document.getElementById('dark_mode').style.display = 'none';
      if (Cookie_Bool) {
        //unsetCookie("pref", )
        setCookie("pref", "light", 365);
        
        //unset dark cookie
      } else {
      }
    }else if (document.getElementById('dark_mode').style.display == 'none') {
      document.getElementById('dark_mode').style.display = 'block';
      document.getElementById('light_mode').style.display = 'none';
      if (Cookie_Bool) {
        setCookie("pref", "dark", 365);
        //unset light cookie
      } else {
      }
    }
    const element = document.body;
    element.classList.toggle("dark_mode");

  }
}
