const toggleLinks = document.querySelector('.links')
const toggleButton = document.querySelector('.nav-toggle')

// console.log(toggleLinks.classList);

toggleButton.addEventListener('click', function () {
    // if (toggleLinks.classList.contains('show-links')) {
    //     toggleLinks.classList.remove('show-links')

    // } else {
    //     toggleLinks.classList.add('show-links')
    // }

    toggleLinks.classList.toggle('show-links')
})
