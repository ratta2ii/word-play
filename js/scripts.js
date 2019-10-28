$(document).ready(function() {

  $("#form1").submit(function(event) {
    event.preventDefault();

    var formInput = $("#input-field").val();
    var words = formInput.split(" ");

    let finalArray = words.filter(function(word) {
      return word.length >= 3;
    });

    var finalSentence = finalArray.reverse().join(" ");

    $("#results-para").text(finalSentence);
    $(".results").show();
 });
});
