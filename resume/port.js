var i;

window.onload = function(){
   i = document.getElementById('next-proj');
   i.addEventListener("mouseenter", showName);
   i.addEventListener("mouseleave", hideName);
}

function showName(e) {
   (e.srcElement || e.target).nextElementSibling.classList.add('show-name');
}
function hideName(e) {
   (e.srcElement || e.target).nextElementSibling.classList.remove('show-name');
}

