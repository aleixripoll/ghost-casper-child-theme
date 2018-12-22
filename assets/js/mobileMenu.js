function toggleMobileMenu() {
  var menu = document.getElementById("nav-menu-top");
  if (menu.className === "nav") {
    menu.className += " nav-mobile";
  } else {
    menu.className = "nav";
  }
}
