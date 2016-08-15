var javaTrack = 0;
var cssTrack = 0;
var phpTrack = 0;
var whichTrack = function(answer) {
  if (answer === "java") {
    javaTrack += +1;
  } else if (answer === "css") {
    cssTrack += +1;
  } else if (answer === "php") {
    phpTrack += +1;
  }
}


$(function() {
  $("#blanks form").submit(function(event) {
    var name = $("input#name").val();
    var music = $("input:radio[name=music]:checked").val();
    var vacation = $("input:radio[name=vacation]:checked").val();
    var beer = $("input:radio[name=beer]:checked").val();
    var weapon = $("input:radio[name=weapon]:checked").val();
    var taco = $("input:radio[name=taco]:checked").val();

    whichTrack(music);
    whichTrack(vacation);
    whichTrack(beer);
    whichTrack(weapon);
    whichTrack(taco);
    if (name) {
      if (track) {
        if (javaTrack > cssTrack && javaTrack > phpTrack) {
          $("#track").empty().append("java");
        } else if (javaTrack === cssTrack || javaTrack === phpTrack || cssTrack === phpTrack) {
          $("#track").empty().append("tie");
        } else if (cssTrack > javaTrack && cssTrack > phpTrack) {
            $("#track").empty().append("css");
        } else if (phpTrack > javaTrack && phpTrack > cssTrack) {
          $("#track").empty().append("php");
        }

        $(".name").empty().append(name);
        $("#output").fadeIn();
        javaTrack = 0;
        cssTrack = 0;
        phpTrack = 0;
      } else {
        alert("Please pick some options!");
      }
    } else {
      alert("You forgot to enter your name!");
    }
    event.preventDefault();
  });
});
