// Get ahold of the element with the ID "today-date"
// https://developer.mozilla.org/es/docs/Web/API/Document/getElementById
const dateElement = document.getElementById("today-date");

// Set that element's HTML (inner HTML) to be a string representation of today's date
// https://developer.mozilla.org/es/docs/Web/API/Element/innerHTML
dateElement.innerHTML = new Date();
