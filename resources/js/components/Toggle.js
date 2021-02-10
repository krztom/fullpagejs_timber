import $ from "jquery";

export function Toggle(selector = ".js-toggle") {
  let isOpen = false;
  //let openElement = null;
  const OPEN_CLASS = "is-open";
  const elements = document.querySelectorAll(selector);
  const navItem = $("#main-menu .nav__item");
  const menu = $("#main-menu");

  function stopPropagation(event) {
    event.stopPropagation();
  }

  function handleClick(event) {
    event.preventDefault();
    event.stopPropagation();

    const element = event.currentTarget;
    const target = element.dataset.target;

    if (target) {
      const targetElement = document.querySelector(target);
      if (menu.hasClass("is-open")) {
        targetElement.classList.remove(OPEN_CLASS);
        //openElement = null;
      } else {
        targetElement.classList.add(OPEN_CLASS);
        //openElement = targetElement;
      }
      isOpen = !isOpen;
    }
  }

  $(navItem).click(function() {
    if (menu.hasClass("is-open")) {
      menu.removeClass("is-open");
      //openElement = null;
    }
  });

  function init(element) {
    // console.log(element);
    element.addEventListener("click", handleClick);
  }
  elements.forEach(el => {
    init(el);
  });
}
