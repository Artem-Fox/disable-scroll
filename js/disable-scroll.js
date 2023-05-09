import { clearClasses, clearStyles } from "./clear-attributes";

export function disableScroll() {
  let scrollPosition = window.scrollY;
  let scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;

  document.documentElement.style.setProperty("scroll-behavior", "auto");

  document.body.classList.add("disable-scroll");
  document.body.style.setProperty("top", `-${scrollPosition}px`);
  document.body.style.setProperty("padding-right", `${scrollbarWidth}px`);
  document.body.setAttribute("data-scroll-position", scrollPosition);

  let fixBlocks = document.querySelectorAll(".fix-block");

  if (fixBlocks) {
    fixBlocks.forEach((fixBlock) => {
      fixBlock.style.setProperty("padding-right", `${scrollbarWidth}px`);
    });
  }
}

export function enableScroll() {
  let scrollPosition = parseInt(document.body.dataset.scrollPosition);

  document.body.classList.remove("disable-scroll");
  clearClasses(document.body);

  document.body.style.removeProperty("top");
  document.body.style.removeProperty("padding-right");
  clearStyles(document.body);

  document.body.removeAttribute("data-scroll-position");

  window.scrollTo(0, scrollPosition);

  document.documentElement.style.removeProperty("scroll-behavior");
  clearStyles(document.documentElement);

  let fixBlocks = document.querySelectorAll(".fix-block");

  if (fixBlocks) {
    fixBlocks.forEach((fixBlock) => {
      fixBlock.style.removeProperty("padding-right");
      clearStyles(fixBlock);
    });
  }
}
