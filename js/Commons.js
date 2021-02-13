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
  if (Cookie_Bool == undefined)
    Cookie();
  switchVisible();
  if(Cookie_Bool){
    checkCookieTheme();
  }else {
    document.cookie = "pref=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/; SameSite=lax";
  }
}

// COOKIE STUFF

//Function to set cookies
function setCookie(cname, cvalue, exdays) {
  var d = new Date();
  d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
  var expires = "expires="+d.toUTCString();
  document.cookie = `${cname}=${cvalue}; ${expires}; path=/; SameSite=lax`;
}

function unsetCookie(cname, cvalue){
  document.cookie = `${cname}=${cvalue}; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/; SameSite=lax`;
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
  if (getCookie("pref") != "") {
    console.log("Found cookie");
    return getCookie("pref");
  } else {
    setCookie("pref", "dark", 365);
  }
}
// END COOKIE STUFF

//Check the cookie which says the last used theme
function checkCookieTheme() {
  setMode();
}

//Toggle theme
function switchVisible() {
  console.log("Switched");
  if (document.body.classList.contains('dark_mode')) {
    if (Cookie_Bool) {
      console.log("set to light");
      setCookie("pref", "light", 365);
    } else {
    }
  }else{
    if (Cookie_Bool) {
      console.log('set to dark');
      setCookie("pref", "dark", 365);
      //unset light cookie
    } else {
    }
  }
  setMode();
}

function setMode(){
  if (!Cookie_Bool || getCookie("pref") == "dark" != document.body.classList.contains('dark_mode'))
    document.body.classList.toggle("dark_mode");
}
