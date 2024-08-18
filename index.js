var toggleRead = document.querySelector('#button');
var elements = document.querySelectorAll('.post');
var unread = document.querySelectorAll('.dot');

toggleRead.addEventListener('click', function() {
    elements.forEach(function(element) {
        element.classList.remove('color'); // Remove the 'color' class
    });
    unread.forEach(function(dot) {
        dot.classList.remove('dot'); // Remove the 'dot' class
    });
    document.querySelector('h1 span').innerHTML = '0';
});
