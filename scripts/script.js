$(function () {
  console.log("bring the wow");

  var $drag_counter = $("#event-drag"),
    counts = 0;

  $("#resetGame").click(function () {
    console.log("clicked button");
    counts = 0;
    $("span.count").text(counts);
    $("#gameOutput").text("");
  });

  $("#draggable").draggable({
    drag: function () {
      counts++;
      updateCounterStatus($drag_counter, counts);
    },
  });

  function updateCounterStatus($event_counter, new_count) {
    //todo: if more than 174, then wow. if not, no wow.

    var game_msg = "";
    
    if (new_count < 174) {
      game_msg = "I belieb in you";

    } else if (new_count == 174) {
      game_msg = "secret super gamer winner";
    } else {
      game_msg = "much wow has been achieved";
      $("img").attr(
        "src",
        "https://www.exodus.com/img/news/content/2022/11/flat-550x550-075-f.u1.jpg"
      );
    }

    $("#gameOutput").text(game_msg);
    $("span.count", $event_counter).text(new_count);
  }
});
