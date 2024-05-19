document.addEventListener('DOMContentLoaded', () => {
    const assinarButtons = document.querySelectorAll('.assinar-btn');
    const modal = document.getElementById('modal');
    const closeModal = document.querySelector('.close');
    const voltarBtn = document.getElementById('voltarBtn');

    assinarButtons.forEach(button => {
        button.addEventListener('click', () => {
            modal.style.display = 'block';
        });
    });

    closeModal.addEventListener('click', () => {
        modal.style.display = 'none';
    });

    voltarBtn.addEventListener('click', () => {
        modal.style.display = 'none';
    });

    window.addEventListener('click', (event) => {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    });
});
