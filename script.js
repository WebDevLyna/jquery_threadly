var main = function() {
// Select all the form element on the page.
  $('form').submit(function(event) {
    var $input = $(event.target).find('input');
    var comment = $input.val();

    if (comment != "") {
      var html = $('<li>').text(comment);
      html.prependTo('#comments')
      $input.val("");
    }

    return false;

  });

}
// jQuery, listen to document to be ready, when ready, call 'main' function
$(document).ready(main);
