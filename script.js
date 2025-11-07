document.addEventListener('DOMContentLoaded', () => {
  const forms = document.querySelectorAll('.needs-validation');

  forms.forEach(form => {
    const alert = form.querySelector('.alert');

    form.addEventListener('submit', event => {
      event.preventDefault();
      event.stopPropagation();

      if (form.checkValidity()) {
        if (alert) {
          alert.style.display = 'block';
          alert.classList.add('show');

          const modalContent = form.closest('.modal-content');
          if (modalContent) {
            modalContent.style.paddingBottom = '2rem';
          }

          setTimeout(() => {
            alert.classList.remove('show');
            setTimeout(() => {
              alert.style.display = 'none';
              if (modalContent) {
                modalContent.style.paddingBottom = '';
              }
            }, 300);
          }, 3000);
        }

      }

      form.classList.add('was-validated');
    });
  });
});
