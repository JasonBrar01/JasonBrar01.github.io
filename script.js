const html = document.documentElement; // Get the html element
const body = document.body;
const thumbnails = document.querySelectorAll('.thumbnail');
const overlays = document.querySelectorAll('.image-overlay');

thumbnails.forEach((thumbnail, index) => {
    thumbnail.addEventListener('click', () => {
        overlays[index].style.display = 'flex';
        html.classList.add('no-scroll'); // Apply to html
        body.classList.add('no-scroll'); // Apply to body
    });

    overlays[index].addEventListener('click', () => {
        overlays[index].style.display = 'none';
        html.classList.remove('no-scroll'); // Remove from html
        body.classList.remove('no-scroll'); // Remove from body
    });
});

const thumbnails_narrow = document.querySelectorAll('.thumbnail-narrow');
const overlays_narrow = document.querySelectorAll('.image-overlay-narrow');

thumbnails_narrow.forEach((thumbnail, index) => {
    thumbnail.addEventListener('click', () => {
        overlays_narrow[index].style.display = 'flex';
        html.classList.add('no-scroll');
        body.classList.add('no-scroll');
    });

    overlays_narrow[index].addEventListener('click', () => {
        overlays_narrow[index].style.display = 'none';
        html.classList.remove('no-scroll');
        body.classList.remove('no-scroll');
    });
});
