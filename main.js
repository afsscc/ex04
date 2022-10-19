/*
  Web Design II
  Ex. 04
  JavaScript
  António Castro, nº201206754
*/

// "Ready" function allow for the scripts to iniatialize only when the document has fully loaded up

$(document).ready(function () {
  // For each H2 value inside the movies DIV, add the same amount of buttons to the second column DIV, with the same innerText has the H2

  $(".movies h2").each(function (index) {
    $("<button/>")
      .text($(".movies h2")[index].innerText)
      .appendTo($(".columns2"));
    $(".columns2 button").addClass("btns");
  });

  // For each BUTTON that is clicked, find the corresponding INDEX on the movies DIV, toggling its appearance, and scrolling into that exact DIV

  $(".btns").each(function (index) {
    $(this).on("click", function () {
      $(".movies").eq(index).toggleClass("flex");
      $(".movies").get(index).scrollIntoView();
    });
  });

  // When the hamburger menu is clicked, slide the movie list COLUMN, while hiding the images from the director that sit on top of the list (CSS)

  $(".burger").click(function (index) {
    $(".burger").css("cursor", "crosshair");
    $(".columns2 button").slideToggle("slow");
    $(".fincher").slideToggle("slow");
  });

  // If the user has watched the movie, hence pressing the BUTTON YES, hide the parapragh asking if the movie has been watched and corresponding buttons, as well as turning the specific movie list BUTTON green and showing the movie POSTER on the header of the page; the interaction hides the DIV

  $(".btnyes").each(function (index) {
    $(this).on("click", function () {
      $(".movies").eq(index).toggleClass("flex");
      $(".movieposters").eq(index).toggle();
      $(".btnyes").eq(index).toggle();
      $(".btnno").eq(index).toggle();
      $(".watch").eq(index).toggle();
      $(".btns").eq(index).css("background-color", "#00b346");
    });
  });

  // If the user hasn't watched the movie, a propmpt to watch the trailer is shown, using the INDEX from the movies DIV to fetch the exact href of the list; the interaction hides the DIV

  $(".btnno").each(function (index) {
    $(this).on("click", function () {
      $(".btns").eq(index).css("background-color", "#fa3043");
      let prompt = confirm("You want to watch the trailer?");
      if (prompt == true) {
        window.open($(".movies")[index].children.item(0).href);
      } else {
        alert("You should.");
      }
      $(".movies").eq(index).toggleClass("flex");
    });
  });
});
