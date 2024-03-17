(function($){
  $(function(){

    $('.sidenav').sidenav();
    $(".dropdown-trigger").dropdown();


});
  // Or with jQuery

   $('input[id$=tbDate]').datepicker({
    dateFormat: 'mm/dd/yy'
});

 $(document).ready(function() {
    $('input#input_text, textarea#textarea2').characterCounter();
  });
 
// end of document ready
})(jQuery); // end of jQuery name space
 
