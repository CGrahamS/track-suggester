//back end
var result = function(music, vacation, beer, weapon, taco) {
  return music + vacation + beer + weapon + taco;
};




//front end
$(function() {
  $("#blanks form").submit(function(event) {
    var name = $("input#name").val();
    var music = $("input:radio[name=music]:checked").val();
    var vacation = $("input:radio[name=vacation]:checked").val();
    var beer = $("input:radio[name=beer]:checked").val();
    var weapon = ("input:radio[name=weapon]:checked").val();
    var taco = $("input:radio[name=taco]:checked").val();
    var track = result(music, vacation, beer, weapon, taco);
    var phpTrack = "should pursue the PHP/Drupal track!";
    var cssTrack = "should pursue the CSS/Design track!";
    var javaTrack = "should pursue the Java/Android track!";
    var tieTrack = "can't decide between the PHP/Drupal or the Java/Android tracks. Try this question to break the tie!"

    console.log(track);
    if (track === "aaaaa" || "aaaab" || "aaabb" || "baaab" || "baaba" || "babaa" || "aabaa") {
      $("#track").empty().append(javaTrack);
    } else if (track === 11) {
      $("#track").empty().append(tieTrack);
    } else if (track >= 8) {
        $("#track").empty().append(cssTrack);
    } else {
      $("#track").empty().append(phpTrack);
    }

    $(".name").empty().append(name);
    $("#output").slideDown();
    event.preventDefault();
  });
});
