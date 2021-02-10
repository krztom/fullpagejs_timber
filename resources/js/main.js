import $ from "jquery";
import "aos/dist/aos.js";
import "fullpage.js/vendors/easings.min.js";
import "fullpage.js/vendors/scrolloverflow.min.js";
import "fullpage.js/dist/fullpage.js";
import { Toggle } from "./components/Toggle";
import "./components/Nav";
$(".menu-item-has-children").hover(function() {
  console.log("hover");
  var isHovered = $(this).is(":hover");
  if (isHovered) {
    $(this)
      .children("ul")
      .stop()
      .slideDown(300);
  } else {
    $(this)
      .children("ul")
      .stop()
      .slideUp(300);
  }
});
Toggle();

/* const menu = $("#main-menu");
const navItem = $("#main-menu .nav__item");

$(navItem).click(function() {
  console.log("menu");
  if (menu.hasClass("is-open")) {
    menu.removeClass("is-open");
  }
});

if (menu.hasClass("is-open")) {
  console.log("menu");
} */

AOS.init();

$(window).on("load scroll resize orientationchange", function() {
  if ($(window).scrollTop() < 67) {
    $(".header").removeClass("sticky");
  } else {
    $(".header").addClass("sticky");
  }
});

$(document).ready(function() {
  const navAnchors = $("#navigation .nav__drop .nav__drop-item .nav__link").map(
    function() {
      return $(this).attr("anchor");
    }
  );
  const AnchorList = Array.from(navAnchors);
  const homeAbout = ["home", "about"];
  const newContact = ["aktualnosci", "kontakt"];
  const fullAnchorList = homeAbout.concat(AnchorList, newContact);

  new fullpage("#pagecontent", {
    menu: "#navigation",
    anchors: fullAnchorList,
    fixedElements: "#SlideDownArrow",
    responsiveWidth: "900px",
    responsiveHeight: "900px",

    onLeave: function(index, next, direction) {
      var vid = document.getElementById("backgroundVideo");
      jQuery(".section [data-aos]").removeClass("aos-animate");
      vid.play();
      if (next.index != 0) {
        $(".header").addClass("sticky");
        $("#pagecontent").addClass("sticky");
        $("#SlideDownArrow").addClass("sticky");
      } else {
        $(".header").removeClass("sticky");
        $("#pagecontent").removeClass("sticky");
        $("#SlideDownArrow").removeClass("sticky");
      }
      if (next.index == 11) {
        $("#SlideDownArrow").addClass("hidden");
        $(".header").addClass("footer");
        $(".header").removeClass("sticky");
      } else {
        $("#SlideDownArrow").removeClass("hidden");
        $(".header").removeClass("footer");
      }
    },
    onSlideLeave: function() {
      jQuery(".slide [data-aos]").removeClass("aos-animate");
    },
    afterSlideLoad: function() {
      jQuery(".slide.active [data-aos]").addClass("aos-animate");
    },
    afterLoad: function() {
      jQuery(".section.active [data-aos]").addClass("aos-animate");
      //jQuery('.fp-table.active .aos-init').addClass('aos-animate');
    }
  });

  // //methods
  // $.fn.fullpage.setAllowScrolling(false);
});

$(document).on("click", "#SlideDownArrow", function() {
  fullpage_api.moveSectionDown();
});
$(document).on("click", "#SlideUpArrow", function() {
  fullpage_api.moveTo("home", 1);
});
