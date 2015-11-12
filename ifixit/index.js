/*
This is a way set up a DOMContentLoaded event with an asynchronously loaded js file,
where the file could have possible been loaded __AFTER__ DOMContentLoaded has been fired.
*/
if(document.readyState !== 'loading'){
   start()
}
else{
   document.addEventListener("DOMContentLoaded", function() {
      start()
   })
}

/*
The main function
*/
function start(){
   var repTitles = document.querySelectorAll('#activity-graph h2 a'),
       repViews = document.querySelectorAll('#activity-graph-view-wrapper > *'),
       breakTable = document.querySelector('#activity-graph-view-wrapper table'),
       breakTableStyle = breakTable.style,
       scrollTop = 0,
       badgeBanner = document.querySelector('#badge-desc'),
       badgeBannerStyle = badgeBanner.style,                                        // cached style node for faster scroll event
       ticking = false,
       scrollBan = 147,
       bannerOn = false,
       tableWrapperStyle = document.querySelector('#table-wrapper').style,          // cached style node for faster scroll event
       hoverTableLift = 95,
       hoverLifted = false,
       hoverLiftUpOn = 0,
       hoveroutTimeout;

   /*
   Setting a mouseover and mouseout listener for each badge
   */
   for(var i=0, badges = document.querySelectorAll('#scroller img'); i < badges.length; i++){
      badges[i].onmouseover = function(){
         window.clearTimeout(hoveroutTimeout);
         if(!hoverLifted) {
            hoverLiftUpOn = scrollTop;
            tableWrapperStyle.transform = "translateY(-"+hoverTableLift+"px)";
            hoverLifted = true;
         }
         badgeBanner.classList.add('badge-text-shown');
         badgeBanner.innerHTML = "<div style='display:table;height:100%;width:100%;'><div style='margin: 0 auto;display: table-cell;vertical-align:middle;'><h3>"+this.getAttribute('data-title')+"</h3><p>"+this.getAttribute('data-desc')+"</p></div></div>";
      }
      badges[i].onmouseout = function(){
         hoveroutTimeout = window.setTimeout(function(){
            if(!bannerOn){
               tableWrapperStyle.transform = "";
               hoverLifted = false;
               badgeBanner.classList.remove('badge-text-shown');
            }
         }, 200);
      }
   }

   /*
   logic to toggle the reputation "growth" and "breakdown" views
   */
   repTitles[0].onclick = showGraph;
   repTitles[1].onclick = showBreakdown;
   function showGraph(){toggleView(1, 0);}
   function showBreakdown(){toggleView(0, 1);}
   function toggleView(a, b){
      repTitles[a].classList.remove('active-title');
      repTitles[b].classList.add('active-title');
      repViews[a].classList.remove('active-view');
      repViews[b].classList.add('active-view');
   }

   /*
   Scroll event for the reputation breakdown widget
   */
   repViews[1].lastElementChild.onscroll = scrollAnim;
   function scrollAnim(){
      scrollTop = this.scrollTop;
      pushTable();
   }

   /*
   Parallax and badge banner logic
   */
   function pushTable(){
      if( (ban = scrollBan - scrollTop) <= 0){                          // if the badge banner is at the top
         ban = 0;                                                       // of the widget, stick it to the top
         if(!bannerOn){
            badgeBanner.classList.add('banner-topped');
            bannerOn = true;
            badgeBannerStyle.zIndex = 1;
         }
      }
      else if(bannerOn){                                                // when the user **starts** scrolling back up,
         badgeBanner.classList.remove('banner-topped');                 // unstick the badge banner from the top
         bannerOn = false;
         badgeBannerStyle.zIndex = 0;
      }
      else{
         breakTableStyle.transform = 'translateY(-'+scrollTop+'px)';    // when the user is scrolling and the badge
      }                                                                 // banner isn't sticky, parallax the breakdown table

      badgeBannerStyle.transform = 'translateY('+ban+'px)';             // apply the badge banner position generated
   }                                                                    // from the first conditional
}
