document.addEventListener("DOMContentLoaded", function() {
   var newButton = document.querySelector('#new button');
   var newCard   = document.querySelector('.new-card');
   var newName   = document.querySelector('#name');
   var cardName  = document.querySelector('#card-name');
   var objs      = {};

   for(var i=0, tags = document.querySelectorAll('.tag'); i < tags.length; i++){
      tags[i].onclick = function(){
         this.firstElementChild.checked = !this.firstElementChild.checked;
         if(this.classList.contains('tagged')){
            this.classList.remove('tagged');
            this.firstElementChild.checked = false;
         }
         else{
            this.classList.add('tagged');
            this.firstElementChild.checked = true;
         }
      }
   }

   newButton.onclick = function(){
      newCard.classList.toggle('new-shown');
      newName.focus();
      newName.onkeyup = function(){
         cardName.innerHTML = this.value || '&nbsp;';
      }
   }

   document.querySelector('form button').onclick = function (ev){
      ev.preventDefault();
      var obj = {
         'Name': cardName.innerHTML,
         'TotalMonthlySales': 0
      }
      newCard.insertAdjacentHTML('afterend', HTMLprog(obj) + '</table></div><a>&nbsp;</a></section>');
      cardName.innerHTML = '&nbsp;'
      newName.value = '';
      newCard.classList.remove('new-shown');
      for(var i=0, tagged = document.querySelectorAll('.tagged'); i<tagged.length; i++){
         tagged[i].classList.remove('tagged');
         tagged[i].firstElementChild.checked = false;
      }
   }

   function HTMLprog(obj){
      return('\
      <section class="card">\
         <button class="edit"></button> \
         <h2>'+obj['Name']+'</h2> \
         <h4>Sales by month</h4> \
         <img src="assets/graph.png" alt="sales by month bar graph" width="204" height="92"> \
         <table> <tbody>\
            <tr> \
               <td>Total Monthly <br>Sales</td> \
               <td>Current<br><em>$'+obj['TotalMonthlySales']+'</em></td> \
               <td> 1- Year <img src="assets/spark_line.png" alt="sales line graph" width="63" height="22"> </td> \
            </tr> \
         </tbody></table> \
         <div class="pricing-wrapper"><img src="assets/spark_lines.png" alt="pricing option sales line graph" class="line-graphs" width="65" height="130"><table class="reveal"> <tbody>\
            <tr> \
               <td>Price Name</td> \
               <td>Current</td> \
               <td> 1- Year </td> \
            </tr>');
   }

   function revealTable(obj){
      return('<tr> <td><em>'+obj['Name']+'</em></td> <td>$'+obj['Sales']+'</td> <td></td> </tr>');
   }

   function loadXMLDoc(url) {
      var xmlhttp;

      if (window.XMLHttpRequest) {
         // code for IE7+, Firefox, Chrome, Opera, Safari
         xmlhttp = new XMLHttpRequest();
      } else {
         // code for IE6, IE5
         xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
      }

      xmlhttp.onreadystatechange = function() {
         if (xmlhttp.readyState == XMLHttpRequest.DONE ) {
            if(xmlhttp.status == 200){
               if(url === "https://api.myjson.com/bins/5bdb3"){
                  for(var i=0, temp= JSON.parse(xmlhttp.responseText); i < temp.length; i++){
                     temp[i].pricing = [];
                     temp[i].HTMLcard = HTMLprog(temp[i]);
                     objs[temp[i].ProgramID] = temp[i];
                  }
                  loadXMLDoc('https://api.myjson.com/bins/17oy7');
               }
               else{
                  for(var i=0, temp = JSON.parse(xmlhttp.responseText); i<temp.length; i++){
                     objs[temp[i].ProgramID].pricing.push(temp[i]);
                     objs[temp[i].ProgramID].HTMLcard += revealTable(temp[i]);
                  }
                  var str = '';
                  var lowerTable = '';
                  for(var temp in objs){
                     if(objs[temp].pricing.length){
                        str += objs[temp].HTMLcard + '</tbody></table></div> <a>more</a> </section>';
                     }
                     else{
                        lowerTable += '<tr><td>'+objs[temp].Name+'<a>more</a></td><td>$'+objs[temp].TotalMonthlySales.toFixed(2)+'</td><td>'+objs[temp].MonthlyAttendance+' <i>'+(objs[temp].Name === 'Yoga Videos' ? 'views' : 'visits')+'</i></td></tr>';
                     }
                  }
                  str += '<table id="results"> <tr> <th>All Programs</th> <th><i>Monthly Sales</i></th> <th><i>Monthly Attendance</i></th> </tr>' + lowerTable + '</table>';
                  newCard.insertAdjacentHTML('afterend', str);

                  for(var i=0, mores = document.querySelectorAll('.card a'); i < mores.length; i++){
                     mores[i].onclick = function(){
                        this.previousElementSibling.lastElementChild.classList.toggle('shown');
                        this.innerHTML = this.innerHTML === 'more' ? 'less' : 'more';
                     }
                  }
               }
            }
            else if(xmlhttp.status == 400) {
               console.log('There was an error 400');
            }
            else {
               console.log('something else other than 200 was returned');
            }
         }
      }

      xmlhttp.open("GET", url, true);
      xmlhttp.send();
   }

   loadXMLDoc("https://api.myjson.com/bins/5bdb3");
});
