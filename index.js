// Get ahold of the element with the ID "today-date"
const dateElement = document.getElementByID("today-date");

// Set that element's HTML (inner HTML) to be a string representation of today's date
// https://developer.mozilla.org/es/docs/Web/API/Element/innerHTML
dateElement.innerHTML = new Date();
