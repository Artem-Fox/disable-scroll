// * Удаление атрибута "class" *
export function clearClasses(element) {
  if (element.classList.length === 0) {
    element.removeAttribute("class");
  }
}

// * Удаление атрибута "style" *
export function clearStyles(element) {
  if (element.style.length === 0) {
    element.removeAttribute("style");
  }
}
