var tabLinks = document.getElementsByClassName('tab-links');
var tabContents = document.getElementsByClassName('tab-contents');

function openTab(tabName) {
    for (tabLink of tabLinks) {
        tabLink.classList.remove('active-link');
    }
    for (tabContent of tabContents) {
        tabContent.classList.remove('active-tab');
    }
    event.currentTarget.classList.add('active-link');
    document.getElementById(tabName).classList.add('active-tab');
}

// JavaScript for handling the mobile navigation menu
document.querySelector('.fas.fa-bars').addEventListener('click', function () {
    document.querySelector('nav ul').classList.toggle('show');
});

document.querySelector('.fas.fa-times').addEventListener('click', function () {
    document.querySelector('nav ul').classList.remove('show');
});

document.addEventListener("DOMContentLoaded", function () {
    // Get the button elements
    var btnShowMore = document.querySelector('.btn-show-more');
    var btnShowLess = document.querySelector('.btn-show-less');

    // Add click event listeners
    btnShowMore.addEventListener('click', function (event) {
        // Show the next four works
        var hiddenWorks = document.querySelectorAll('.work-list .work:nth-child(n+5):not([style*="display: block"])');
        for (var i = 0; i < hiddenWorks.length; i++) {
            hiddenWorks[i].style.display = 'block';
        }

        // Toggle button visibility
        btnShowMore.style.display = 'none';
        btnShowLess.style.display = 'block';

        // Prevent default anchor behavior
        event.preventDefault();
    });

    btnShowLess.addEventListener('click', function (event) {
        // Hide works beyond the initial four
        var hiddenWorks = document.querySelectorAll('.work-list .work:nth-child(n+5)');
        for (var i = 0; i < hiddenWorks.length; i++) {
            hiddenWorks[i].style.display = 'none';
        }

        // Toggle button visibility
        btnShowMore.style.display = 'block';
        btnShowLess.style.display = 'none';

        // Prevent default anchor behavior
        event.preventDefault();
    });
});

var sidemeu = document.getElementById("sidemenu");
function openmenu(){
    sidemeu.style.right = "0";
}
function closemenu(){
    sidemeu.style.right = "-200px";
}

const scriptURL = 'https://script.google.com/macros/s/AKfycbyyX3gLoIJz0GJgiikui5O7oKeutYTCdlbXMj1cLEkHMwDJyv0n4n60cQ0ESBVcxYW6iQ/exec'
const form = document.forms['submit-to-google-sheet']
const msg = document.getElementById("msg")

form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    .then(response => {
        msg.innerHTML = "Message Send Successfully"
        setTimeout(function(){
            msg.innerHTML = ""
        },5000)
        form.reset()
    })
    .catch(error => console.error('Error!', error.message))
})
