var header = document.getElementById('header');
var menuBar = document.getElementById('bar');
var logo = document.getElementById('logo');
var heightMenu = header.clientHeight;

bar.onclick = function() {
    var isClosed = header.clientHeight == heightMenu;
    if(isClosed) {
        // console.log(header);
        header.style.height = "auto";
        logo.style.borderBottom = "1px solid #fff";
    } 
    else {
        header.style.height = null;
        logo.style.borderBottom = null;
    }
}
// Ẩn menu 
var navItems = header.querySelectorAll('#navbar li a');

for(let i = navItems.length - 1 ; i >= 0; i--) {
    navItems[i].onclick = function(event) {
        var isParent = this.nextElementSibling && this.nextElementSibling.classList.contains("subnav");
        if(isParent) {
            event.preventDefault();
        }
        else header.style.height = null; 
    }
}