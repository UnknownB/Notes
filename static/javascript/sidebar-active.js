const currentPath = window.location.pathname;

const sidebarLinks = document.querySelectorAll('.sidebar a');

sidebarLinks.forEach(link => {
    if (link.pathname == currentPath) {
        link.classList.add('active');
    } else {
        link.classList.remove('active');
    }
});