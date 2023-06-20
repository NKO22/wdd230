// JavaScript code to dynamically populate the current year and last modified date

document.addEventListener('DOMContentLoaded', function() {
    var yearElem = document.getElementById('year');
    var lastModifiedElem = document.getElementById('lastModified');
  
    // Populate current year
    var currentYear = new Date().getFullYear();
    yearElem.textContent = currentYear;
  
    // Populate last modified date
    var lastModifiedDate = document.lastModified;
    lastModifiedElem.textContent = 'Last Modified: ' + lastModifiedDate;
  });
  