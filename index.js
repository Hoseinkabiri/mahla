//darktheme

$(document).ready(function () {
  $("#darkthemeeditor").on("click", function () {
    $("html").toggleClass("dark");
  });
  $("#tr").hover(
    function () {
      $(this).css("background", "#F00");
    },
    function () {
      $(this).css("background", "#000");
    }
  );

  if (
    localStorage.getItem("theme") === "dark" ||
    (!("theme" in localStorage) &&
      window.matchMedia("(prefers-color-scheme: dark)").matches)
  ) {
    $("html").addClass("dark");
  } else {
    $("html").removeClass("dark");
  }
  $("#menubutton").on("click", function () {
    $("#navmobile").toggleClass("hidden");
  });
  $("#close").on("click", function () {
    $("#navmobile").toggleClass("hidden");
  });
});
