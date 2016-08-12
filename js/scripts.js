//back end
var result = function(music, vacation, beer, weapon, taco) {
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
    var phpTrack = "should pursue the PHP/Drupal track!";
    var cssTrack = "should pursue the CSS/Design track!";
    var javaTrack = "should pursue the Java/Android track!";
    var tieTrack = "can't decide between the PHP/Drupal or the Java/Android tracks. Try this question to break the tie!"

    $('#my-form input').on('change', function() {
      alert($('input[name=music]:checked', '#my-form').val());
    });


    console.log(track);
    if (track >= 13) {
      $("#track").empty().append(phpTrack);
    // } else if (track === ) {
    //   $("#track").empty().append(tieTrack);
    } else if (track >= 8) {
        $("#track").empty().append(cssTrack);
    } else {
      $("#track").empty().append(javaTrack);
    }

    $(".name").empty().append(name);
    $("#output").slideDown();
    event.preventDefault();
  });
});
