(function () {
  "use strict";

  var WHATSAPP_NUMBER = "5512988406870";

  // Build wa.me links from data-wa-msg so the number lives in one place.
  document.querySelectorAll("[data-wa]").forEach(function (el) {
    var msg = el.getAttribute("data-wa-msg") || "";
    el.setAttribute(
      "href",
      "https://wa.me/" + WHATSAPP_NUMBER + "?text=" + encodeURIComponent(msg)
    );
    el.setAttribute("target", "_blank");
    el.setAttribute("rel", "noopener");
  });

  // Mobile nav toggle
  var navToggle = document.getElementById("navToggle");
  var mobileNav = document.getElementById("mobileNav");
  if (navToggle && mobileNav) {
    navToggle.addEventListener("click", function () {
      var isOpen = mobileNav.classList.toggle("is-open");
      navToggle.setAttribute("aria-expanded", String(isOpen));
    });
    mobileNav.querySelectorAll("a").forEach(function (a) {
      a.addEventListener("click", function () {
        mobileNav.classList.remove("is-open");
        navToggle.setAttribute("aria-expanded", "false");
      });
    });
  }

  // Scroll reveal
  var revealEls = document.querySelectorAll(".reveal");
  if ("IntersectionObserver" in window && revealEls.length) {
    var io = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    );
    revealEls.forEach(function (el) { io.observe(el); });
  } else {
    revealEls.forEach(function (el) { el.classList.add("is-visible"); });
  }

  // FAQ accordion
  document.querySelectorAll(".faq-item").forEach(function (item) {
    var q = item.querySelector(".faq-q");
    var a = item.querySelector(".faq-a");
    q.addEventListener("click", function () {
      var isOpen = item.classList.contains("is-open");
      document.querySelectorAll(".faq-item.is-open").forEach(function (open) {
        if (open !== item) {
          open.classList.remove("is-open");
          open.querySelector(".faq-q").setAttribute("aria-expanded", "false");
          open.querySelector(".faq-a").style.maxHeight = null;
        }
      });
      item.classList.toggle("is-open", !isOpen);
      q.setAttribute("aria-expanded", String(!isOpen));
      a.style.maxHeight = !isOpen ? a.scrollHeight + "px" : null;
    });
  });

  // Mark loaded photo slots so the placeholder hides cleanly
  document.querySelectorAll(".ph-image img").forEach(function (img) {
    if (img.complete && img.naturalWidth > 0) {
      img.closest(".ph-image").classList.add("has-img");
    }
    img.addEventListener("load", function () {
      img.closest(".ph-image").classList.add("has-img");
    });
  });

  // Footer year
  var yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();
})();
