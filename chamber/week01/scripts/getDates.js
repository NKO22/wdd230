const yearSpan = document.getElementById("year");
const lastModifiedParagraph = document.getElementById("lastModified");

// Populate the year
const currentYear = new Date().getFullYear();
yearSpan.textContent = currentYear;

// Populate the last modified date
const lastModifiedDate = new Date(document.lastModified);
lastModifiedParagraph.textContent = "Last modified: " + lastModifiedDate.toDateString();