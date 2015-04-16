var arrow, men, text;

window.onload = function() {
   arrow = document.getElementById('arrow-down');
   men = document.getElementById('header-menu');
   head = document.querySelector('#pizzaIcon');
   text = document.querySelector('#deetz');
};


var menuOn = false;

function menu(){
   if(menuOn){
      men.style.transform="rotateX(90deg)";
      men.style.webkitTransform="rotateX(90deg)";
      menuOn = false;
   }
   else {
      men.style.transform="none";
      men.style.webkitTransform="none";
      menuOn = true;
   }
}

function lessZa(){
   head.style.backgroundImage="url('4slices.png')";
   text.innerHTML="BD 20, RM 104"
}
