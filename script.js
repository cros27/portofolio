const button = document.querySelector('.btn');
const message = document.querySelector('#message');

let isVisible = false;

button.addEventListener('click', function () {
    if (isVisible) {
        message.textContent = '';
        button.textContent = 'Kontak Gua';
        isVisible = false;
    } else {
        message.textContent = 'Email: mfharhan406@gmail.com | GitHub: github.com/cros27';
        button.textContent = 'Tutup';
        isVisible = true;
    }
});

const darkBtn = document.querySelector('#darkBtn');

darkBtn.addEventListener('click', function () {
    document.body.classList.toggle('dark');

    if (document.body.classList.contains('dark')) {
        darkBtn.textContent = 'Light Mode';
    } else {
        darkBtn.textContent = 'Dark Mode';
    }
});