// document.addEventListener('DOMContentLoaded', () => {
//   const forms = document.querySelectorAll('.needs-validation');

//   forms.forEach(form => {
//     const alert = form.querySelector('#myAlert1');
//     const modalContent = form.closest('.modal-content');

//     form.addEventListener('submit', event => {
//       event.preventDefault();
//       event.stopPropagation();

//       if (form.checkValidity()) {
//         // Показываем alert
//         alert.style.display = 'block';
//         alert.classList.add('show');

//         // Добавляем класс, чтобы модалка “расширилась”
//         modalContent.style.paddingBottom = '2rem';

//         // Автоматическое скрытие через 3 секунды
//         setTimeout(() => {
//           alert.classList.remove('show');
//           setTimeout(() => {
//             alert.style.display = 'none';
//             modalContent.style.paddingBottom = '';
//           }, 300); // ждем завершения fade-анимации
//         }, 3000);
//       }

//       form.classList.add('was-validated');
//     });
//   });
// });

document.addEventListener('DOMContentLoaded', () => {
  const forms = document.querySelectorAll('.needs-validation');

  forms.forEach(form => {
    const alert = form.querySelector('.alert'); // ищем alert внутри формы

    form.addEventListener('submit', event => {
      event.preventDefault();
      event.stopPropagation();

      if (form.checkValidity()) {
        if (alert) {
          alert.style.display = 'block';
          alert.classList.add('show');

          // Если форма в модалке — ищем modal-content для отступа
          const modalContent = form.closest('.modal-content');
          if (modalContent) {
            modalContent.style.paddingBottom = '2rem';
          }

          // Автоматическое скрытие через 3 секунды
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

        // Очистить поля (если нужно)
        // form.reset();
        // form.classList.remove('was-validated');
      }

      form.classList.add('was-validated');
    });
  });
});
