//back end
var result = function(music, vaction, beer, weapon, taco) {
  return music + vacation + beer + weapon + taco;
};

//front end
$(function() {
  $("#blanks form").submit(function(event) {
    var name = $("input#name").val();
    var music = parseInt($("input:radio[name=music]:checked").val());
    var vacation = parseInt($("input:radio[name=vacation]:checked").val());
    var beer = parseInt($("input:radio[name=beer]:checked").val());
    var weapon = parseInt($("input:radio[name=weapon]:checked").val());
    var taco = parseInt($("input:radio[name=taco]:checked").val());
    var track = result(music, vacation, beer, weapon, taco);

    if (track >= 40) {
      $("#track").empty().append("PHP/Drupal track!")
    } else if (track >= 25) {
      $("#track").empty().append("CSS/Design track!")
    } else {
      $("#track").empty().append("Java/Android track!")
    }

    event.preventDefault();
  });
});
