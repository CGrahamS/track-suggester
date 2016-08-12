//back end
var result = function(music, vaction, beer, weapon, taco) {
  return music + vacation + beer + weapon + taco;
}

//front end
$(function() {
  $("#blanks form").submit(function(event) {
    var name = $("input#name").val();
    var music = parseInt($("input:radio[name=music]:checked").val());

    event.preventDefault();
  });
});
