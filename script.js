document.addEventListener("DOMContentLoaded", function() {
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('scroll-visible');
                observer.unobserve(entry.target); // Stop observing once it's in view
            }
        });
    });

    document.querySelectorAll('.flex').forEach(div => {
        observer.observe(div);
    });
});

    document.addEventListener("DOMContentLoaded", function() {
        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('scroll-visible');
                    observer.unobserve(entry.target);
                }
            });
        });

        const elementsToObserve = ['.head', '.row_one', '.row_two', '.row_three'];

        elementsToObserve.forEach(selector => {
            document.querySelectorAll(selector).forEach(element => {
                observer.observe(element);
            });
        });
    });
