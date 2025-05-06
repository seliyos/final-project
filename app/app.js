import { model } from "./model.js";

function loadPage(pageName) {
  model.getPageContent(pageName)
    .then((data) => {
      $("#app").html(data);
    })
    .catch(() => {
      $("#app").html("<h2>Page not found.</h2>");
    });
}

function initListeners() {
  // Handle all in-page hash link clicks
  $("body").on("click", "a[href^='#']", function (e) {
    e.preventDefault();
    const page = $(this).attr("href").slice(1); // remove '#'
    window.location.hash = page;
    loadPage(page);
  });

  // Handle browser navigation (back/forward)
  $(window).on("hashchange", function () {
    const page = window.location.hash.slice(1);
    loadPage(page);
  });
}

$(document).ready(function () {
  const initialPage = window.location.hash.slice(1) || "home";
  loadPage(initialPage);
  initListeners();
});
