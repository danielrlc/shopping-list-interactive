$(document).ready(function () {
  $("input").keypress(function(e) {
    if (e.which == 13){
      var addItem = $("input").val();
      if ( $("input").val().trim().length != 0) {
        $(".list").prepend("<li>"+addItem+"</li>");
        $("input").val("");
      }
      else {
        alert("Add item first!");
        $("input").val("");
      }
    }
  })
  $(document).on("click", "li", function() {
    $(this).toggleClass("crossed-out");
  })
  $(document).on("dblclick", "li", function() {
    $(this).remove();
  })
  $(".list").sortable();
  $(document).on("click", ".show-hide", function() {
    $(this).closest(".instructions").find(".instructions-hide").toggleClass("instructions-show");
  })
});