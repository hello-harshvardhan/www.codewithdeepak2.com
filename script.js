let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');
let sections = document.querySelectorAll('section'); // Corrected to select all sections
let navlinks = document.querySelectorAll('header nav a'); // Corrected to select all nav links

// Handle scrolling and update active link
window.onscroll = () => {
    let top = window.scrollY;

    sections.forEach(sec => {
        let offset = sec.offsetTop - 150; // Corrected offset calculation
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            navlinks.forEach(link => {
                link.classList.remove('active'); // Remove active class from all links
            });

            let activeLink = document.querySelector(`header nav a[href*="${id}"]`);
            if (activeLink) {
                activeLink.classList.add('active'); // Add active class to the current link
            }
        }
    });
};

// Handle menu icon click (for mobile menu)
menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x'); // Toggles the menu icon class
    navbar.classList.toggle('active'); // Toggles the navbar class
};
