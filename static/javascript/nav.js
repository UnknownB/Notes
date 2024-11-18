
// homeButton
const homeButton = document.getElementById('homeButton');
homeButton.addEventListener('click', () => {
    window.location.href = '/';
});

// toggleButton (開關 sidebar、toc-bar)
const header = document.getElementById('header');
const sidebar = document.getElementById('sidebar');
const toc_bar = document.getElementById('toc-bar');

const toggleButton = document.getElementById('toggleButton');
toggleButton.addEventListener('click', () => {
    header.classList.toggle('collapsed');
    sidebar.classList.toggle('collapsed');
    toc_bar.classList.toggle('collapsed');
});