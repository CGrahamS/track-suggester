
var toJava = function(track) {
   return track + 0;
 };
var toCss = function(track) {
  return track + 1;
};
var toPhp = function(track) {
  return track + 10;
};

$(function() {
  $("#blanks form").submit(function(event) {
    var name = $("input#name").val();
    var music = $("input:radio[name=music]:checked").val();
    var vacation = $("input:radio[name=vacation]:checked").val();
    var beer = $("input:radio[name=beer]:checked").val();
    var weapon = $("input:radio[name=weapon]:checked").val();
    var taco = $("input:radio[name=taco]:checked").val();
    var phpTrack = "should pursue the PHP/Drupal track!";
    var cssTrack = "should pursue the CSS/Design track!";
    var javaTrack = "should pursue the Java/Android track!";
    var result = 

    if (music === "a") {
      result = toJava(result);
    } else if (music === "b") {
      result = toCss(result);
    } else if (music === "c"){
      result = toPhp(result);
    }

    if (vacation === "a") {
      result = toJava(result);
    } else if (vacation === "b") {
      result = toCss(result);
    } else if (vacation === "c"){
      result = toPhp(result);
    }

    if (beer === "a") {
      result = toJava(result);
    } else if (beer === "b") {
      result = toCss(result);
    } else if (beer === "c"){
      result = toPhp(result);
    }

    if (weapon === "a") {
      result = toJava(result);
    } else if (weapon === "b") {
      result = toCss(result);
    } else if (weapon === "c"){
      result = toPhp(result);
    }

    if (taco === "a") {
      result = toJava(result);
    } else if (taco === "b") {
      result = toCss(result);
    } else if (taco === "c") {
      result = toPhp(result);
    }

    console.log(result);

    if (name) {
      if (result) {
        if (result >= 30) {
          $("#track").empty().append(phpTrack);
        } else if (result > 0 && result <= 29) {
            $("#track").empty().append(cssTrack);
        } else {
          $("#track").empty().append(javaTrack);
        }

        $(".name").empty().append(name);
        $("#output").fadeIn();
      } else {
        alert("Please pick some options!")
      }
    } else {
      alert("You forgot to enter your name!")
    }
    event.preventDefault();
  });
});
