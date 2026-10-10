/* Makes "Desktop site" mode on phones/tablets render at a readable size.
   In that mode the browser fakes a ~980px+ wide viewport, so the page shrinks to
   tiny text. We zoom the page so its layout width equals the real screen width,
   and style.css (container queries) then picks the right phone/tablet layout. */
(function () {
  var root = document.documentElement;
  function fit() {
    var iw = window.innerWidth || root.clientWidth;
    var a = Math.min(screen.width, screen.height);
    var b = Math.max(screen.width, screen.height);
    var landscape = window.matchMedia("(orientation: landscape)").matches;
    var dw = landscape ? b : a; // real screen width in CSS px
    var touch = window.matchMedia("(pointer: coarse)").matches;
    var z = iw / dw;
    if (touch && dw <= 1100 && z > 1.2) root.style.zoom = z.toFixed(3);
    else root.style.removeProperty("zoom");
  }
  fit();
  window.addEventListener("resize", fit);
  window.addEventListener("orientationchange", function () {
    setTimeout(fit, 250);
  });
})();
