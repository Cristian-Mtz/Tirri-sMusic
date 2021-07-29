document.addEventListener('DOMContentloaded',() => {

  var elems = document.querySelectorAll('.sidenav');
    var instances = M.Sidenav.init(elems);

    var elems = document.querySelectorAll('.sidenav');
    var instances = M.Sidenav.init(elems, {
      indicators: false,
      height:500,
      duration:500,
      interval:50

    });
});

$(document).ready(function(){
  $('.slider').slider();
  
});