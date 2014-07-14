var workSize;
var workShown;

function dynamicDynamics(){
   if((workSize > window.innerWidth) && (workShown !==false)){
      document.getElementById("date").style.display = "none";
      workShown = false;
   }
   else if((workSize <= window.innerWidth) && (workShown !== true)){
      document.getElementById("date").style.display = "table-cell";
      workShown = true;
   }
}

document.addEventListener("DOMContentLoaded", function(event) {
   workSize = document.getElementById("work").offsetWidth;
   dynamicDynamics();
});

window.onresize = function(){
   dynamicDynamics();
};
