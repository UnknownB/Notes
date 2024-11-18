window.addEventListener('DOMContentLoaded', () => {
    const headings = document.querySelectorAll("h1, h2, h3, h4, h5, h6");
    const tocLinks = document.querySelectorAll('#toc a');

    window.addEventListener('scroll', () => {
        let fromTop = window.scrollY;
        headings.forEach(heading => {
            if (heading.offsetTop <= fromTop + 20 && heading.offsetTop + heading.offsetHeight > fromTop + 20) {
                tocLinks.forEach(link => {
                    link.classList.remove('active');
                });
                const currentLink = document.querySelector(`#toc a[href*="#${heading.id}"]`);
                if (currentLink) {
                    currentLink.classList.add('active');
                }
            }
            heading.classList.add('active');
        });
    });
});