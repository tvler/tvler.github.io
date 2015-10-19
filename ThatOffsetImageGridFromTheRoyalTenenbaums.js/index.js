var _offsetImg = {};

// variables
//
_offsetImg.defaultSettings = {
   // "public"
   src         : '',
   snap        : false,
   maxWidth    : '',
   minWidth    : '',
   width       : '',
   maxHeight   : '',
   minHeight   : '',
   height      : '',

   //"private" (don't enter these parameters into ur settings or else)
   keepRatio   : true,   // if the image aspect ratio won't be messed with
   ratio       : 0,
}
_offsetImg.offs     = document.querySelectorAll('[data-offset]');
_offsetImg.imgs     = [];
_offsetImg.settings = [];

// initializing and first update
//
_offsetImg.init = function(){
   for(var j=0; j<this.offs.length; j++){

      // local vars
      //
      var off      = this.offs[j],
          settings = off.getAttribute('data-offset'),
          img      = new Image();

      // reading an element's settings
      //
      // ** if an attribute is a JSON object
      // **
         if(settings[0] === '{'){
            this.settings[j] = this.extend( this.defaultSettings, JSON.parse(settings) || {} );
         }
      // ** else, the attribute data is only the image file
      // **
         else{
            this.settings[j]     = this.defaultSettings;
            this.settings[j].src = settings;
         }
      //
      // end of reading the settings

      // checking if natural image ratio will be kept
      //
      if(this.settings[j].width && this.settings[j].height){
         this.settings[j].keepRatio = false;
      }

      // creating each element's associated image object
      //
      img.setAttribute('data-index', j);
      img.onload = _offsetImg.paintBack;
      img.src = this.settings[j].src;
      this.imgs.push(img);
   }
}

// updating image positions
//
_offsetImg.update = function(){
   for(var j=0, off, img; j<_offsetImg.offs.length; j++){
      _offsetImg.imgs[j].onload();
   }
}

// painting an element's background
//
_offsetImg.paintBack = function(){

   // locar vars
   //
   var index    = parseInt(this.getAttribute('data-index')),
       elem     = _offsetImg.offs[index],
       settings = _offsetImg.settings[index],
       elemW    = elem.offsetWidth,
       elemH    = elem.offsetHeight,
       url      = 'url("'+this.src+'") repeat-y ',
       style    = '',
       imgW     = this.naturalWidth,
       imgH     = this.naturalHeight,
       size;

   // setting ratio for the first time
   //
   if(!settings.ratio){
      // console.log('setting ratio');
      settings.ratio = this.width / this.height;
   }

   // conditional formating based on settings
   //
      if(settings.keepRatio){
         console.log('keeping ratio');
         if(settings.width){
            imgW = _offsetImg.parseInput(settings.width, elemW);
            imgH = imgW / settings.ratio;
            // console.log(this);
         }
         else if(settings.height){
            console.log('heighting');
            imgH = _offsetImg.parseInput(settings.height, elemH);
            imgW = imgH * settings.ratio;
         }
         if(settings.minWidth && imgW < (size = _offsetImg.parseInput(settings.minWidth, elemW))){
            imgW = size;
            imgH = imgW / settings.ratio;
         }
         if(settings.minHeight && imgH < (size = _offsetImg.parseInput(settings.minHeight, elemH))){
            imgH = size;
            imgW = imgH * settings.ratio;
         }
         if(settings.maxWidth && imgW > (size = _offsetImg.parseInput(settings.maxWidth, elemW))){
            imgW = size;
            imgH = imgW / settings.ratio;
         }
         if(settings.maxHeight && imgH > (size = _offsetImg.parseInput(settings.maxHeight, elemH))){
            console.log('here');
            imgH = size;
            imgW = imgH * settings.ratio;
         }
      }
      else{
         imgW = _offsetImg.parseInput(settings.width, elemW);
         imgH = _offsetImg.parseInput(settings.height, elemH);
         if(settings.minWidth && imgW < (size = _offsetImg.parseInput(settings.minWidth, elemW))){
            imgW = size;
         }
         if(settings.minHeight && imgH < (size = _offsetImg.parseInput(settings.minHeight, elemH))){
            imgH = size;
         }
         if(settings.maxWidth && imgW > (size = _offsetImg.parseInput(settings.maxWidth, elemW))){
            imgW = size;
         }
         if(settings.maxHeight && imgH > (size = _offsetImg.parseInput(settings.maxHeight, elemH))){
            imgH = size;
         }
      }

   // ** snapping to column width
   // **
      if(settings.snap){

         // if both max width/height are set, choose the smallest constraint
         //
         if(settings.maxWidth && settings.maxHeight){
            var snapWidth = Math.min(_offsetImg.parseInput(settings.maxWidth, elemW), _offsetImg.parseInput(settings.maxHeight, elemH) * settings.ratio);
            var floorOrCeil = Math.ceil;
         }

         // if max width is set
         //
         else if(settings.maxWidth){
            var snapWidth = _offsetImg.parseInput(settings.maxWidth, elemW);
            var floorOrCeil = Math.ceil;
         }

         //if max height is set
         //
         else if(settings.maxHeight){
            var snapWidth   = _offsetImg.parseInput(settings.maxHeight, elemH) * settings.ratio;
            var floorOrCeil = Math.ceil;
         }

         // if both min width/height are set, choose the smallest constraint
         //
         else if(settings.minWidth && settings.minHeight){
            var snapWidth   = Math.max(_offsetImg.parseInput(settings.minWidth, elemW), _offsetImg.parseInput(settings.minHeight, elemH) * settings.ratio);
            var floorOrCeil = Math.floor;
         }

         // if min width is set
         //
         else if(settings.minWidth){
            var snapWidth   = _offsetImg.parseInput(settings.minWidth, elemW);
            var floorOrCeil = Math.floor;
         }

         // if min height is set
         //
         else if(settings.minHeight){
            var snapWidth   = _offsetImg.parseInput(settings.minHeight, elemH) * settings.ratio;
            var floorOrCeil = Math.floor;
         }

         // if nothing's set, just create a 3 column grid :(
         //
         else{
            var snapWidth   = elemW / 3;
            var floorOrCeil = Math.ceil;
         }
         var snapRows = floorOrCeil((elemW / snapWidth - 1) / 2) * 2 + 1;
         if(snapRows < 3) snapRows = 3;
         imgW = elemW / snapRows;
         imgH = imgW / settings.ratio;
         console.log(this);
      }
   //
   // end of conditional settings

   // creating local vars that depend on the conditional settings
   //
   imgW = Math.ceil(imgW);
   imgH = Math.ceil(imgH);

   var vert   = ' / '+imgW+'px '+imgH+'px, ',
       center = (elemW - imgW) / 2,
       amount = Math.floor(Math.ceil(elemW / imgW) / 2),
       i      = -1,
       rows   = 2*amount + 1,
       place;

   // the painting!!!!!!!!!!!!
   //
   while(++i <= amount){
      place = 'px ' + (i % 2 ? (elemH/2)+'px' : '50%') + vert;
      style += url+(center + i * imgW)+place + url+(center - i * imgW)+place;
   }
   style = style.slice(0,-2);
   console.log(style);
   elem.style.background = style;
}

// extend settings object (via github.com/cferdinandi/smooth-scroll/blob/master/src/js/smooth-scroll.js)
//
_offsetImg.extend = function () {

   // local vars
   //
   var extended = {};
   var deep     = false;
   var i        = 0;
   var length   = arguments.length;

   // Check if a deep merge
   //
   if ( Object.prototype.toString.call( arguments[0] ) === '[object Boolean]' ) {
      deep = arguments[0];
      i++;
   }

   // Merge the object into the extended object
   //
   var merge = function (obj) {
      for ( var prop in obj ) {
         if ( Object.prototype.hasOwnProperty.call( obj, prop ) ) {
            // If deep merge and property is an object, merge properties
            if ( deep && Object.prototype.toString.call(obj[prop]) === '[object Object]' ) {
               extended[prop] = extend( true, extended[prop], obj[prop] );
            } else {
               extended[prop] = obj[prop];
            }
         }
      }
   };

   // Loop through each object and conduct a merge
   //
   for ( ; i < length; i++ ) {
      var obj = arguments[i];
      merge(obj);
   }

   return extended;
}

_offsetImg.parseInput = function(inp, elemW){
   var unit = 'px';
   var num  = parseFloat(inp);

   // if there is a unit at the end of the in string
   //
   if(isNaN(inp)){
      var unit = (inp.match(/(%|px)$/)||["px"])[0];
   }
   // console.log(unit);

   // if unit is a percentage
   //
   if(unit === '%'){
      // console.log('percentage');
      num *= elemW / 100;
   }

   return num;
}
