document.addEventListener('DOMContentLoaded', function () {
    const btn = document.getElementById('backToTop');
    if (!btn) return;

    const showAfter = window.innerHeight; // Show button after scrolling one viewport height

    function onScroll() {
        if (window.scrollY > showAfter) {
            btn.classList.add('show');
        } else {
            btn.classList.remove('show');
        }
    }

    // Add scroll event listener with passive flag for better performance
    window.addEventListener('scroll', onScroll, { passive: true });

    // Scroll to top with smooth behavior when button is clicked
    btn.addEventListener('click', function () {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    // Initial check in case the page is loaded scrolled down
    onScroll();
});
