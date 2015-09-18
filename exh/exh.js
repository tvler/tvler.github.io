var desc, slide, slidePhotos, hidden = false, hasStarted = false, fc1, fc2, fc1Style, fc2Style, descStyle, slideStyle, loaded = false, hasFinishedGlowing = false;
var trans = ('transition' in document.documentElement.style) ? 'transitionend' : 'webkitTransitionEnd';
var anim = ('animation' in document.documentElement.style) ? 'animationend' : 'webkitAnimationEnd';

function removePics(ev){
   ev.target.classList.remove('photo-slide-hide');
   ev.target.removeEventListener(anim, removePics);
}

function toggle(){
   desc.addEventListener(trans, removeChange);
   if (!hidden) {
      hidden = true;
      desc.classList.add('spot-desc-hidden');
      slide.classList.add('spot-photo-slide');
      for(var i = 1; i<slidePhotos.length; i++){
         slidePhotos[i].classList.add('photo-slide-shown');
      }
   }
   else {
      for(var i = 1, temp, length = slidePhotos.length; i<length; i++){
         (temp = slidePhotos[i]).classList.remove('photo-slide-shown');
         temp.classList.add('photo-slide-hide');
         temp.addEventListener(anim, removePics);
      }
      hidden = false;
      slide.classList.remove('spot-photo-slide');
      desc.classList.remove('spot-desc-hidden');
   }
}

function hasOpened(ev){
   if(ev.propertyName === 'opacity'){
      // console.log('hasopened');
      // console.log(ev);
      fc1Style.cssText = '';
      fc1.classList.remove('clicked');
      fc1.removeEventListener(trans, hasOpened);
      fc2Style.display = 'initial';
   }
}

function hasClosed(ev){
   if(ev.propertyName === 'opacity'){
      // console.log('hasclosed');
      // console.log(ev);
      fc2Style.cssText = '';
      fc2.classList.remove('clicked');
      fc2.removeEventListener(trans, hasClosed);
      fc1Style.display = 'initial';
      // fc1.addEventListener(trans, hasOpened);
   }
}

function changing(){
   // console.log('changed');
   // console.log(this);
   this.style.willChange = 'transform, opacity';
   descStyle.willChange = 'transform';
   slideStyle.willChange = 'transform';
   this.setAttribute('data-flipped', hidden);
}

function unchange(){
   if(this.getAttribute('data-flipped') === hidden.toString()){
      // console.log('unchanging');   
      this.style.willChange = '';
      descStyle.willChange = '';
      slideStyle.willChange = '';
   }
   else{
      // console.log('NOT UNCHANGING!!!');
   }
}

function removeChange(ev){
   if(ev.target === desc){
      // console.log(ev);
      // console.log('removing change');
      desc.removeEventListener(trans, removeChange);
      descStyle.willChange = '';
      slideStyle.willChange = '';
   }
}

document.addEventListener("DOMContentLoaded", function() {
   desc = document.querySelector('.spot-desc-wrapper');
   descStyle = desc.style;
   fc1 = document.querySelector('#fc1');
   fc1Style = fc1.style;
   fc1.onmouseenter = changing;
   fc1.onmouseleave = unchange;
   fc2 = document.querySelector('#fc2');
   fc2Style = fc2.style;
   fc2.onmouseenter = changing;
   fc2.onmouseleave = unchange;
   slide = document.querySelector('.spot-photo');
   slideStyle = slide.style;
   slidePhotos = slide.children;




   fc1.onclick = setFC1;
   fc2.onclick = function(event){
      hasStarted = true;
      fc2.addEventListener(trans, hasClosed);
      fc2.classList.add('clicked');
      toggle();
   }  
});

function setFC1(){
   hasStarted = true;
   fc1.addEventListener(trans, hasOpened);
   fc1.classList.add('clicked');
   toggle();
}

window.onload = (function(){



   loaded = true;
   prep();
   // window.setTimeout(function(){
      // loaded = true;
      // console.log('ok');
      // prep();
   // }, 500);
});

window.onhashchange = (function(){
   // console.log(window.location.hash);
   prep();
});

function prep(){
   // console.log('prep');
   // console.log('prep    f '+window.location.hash);
   if(window.location.hash && loaded) start();
}