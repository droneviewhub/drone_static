// Seleccionar todos los elementos necesarios
const textareas = document.querySelectorAll('textarea[required]');
const selects = document.querySelectorAll('select[required]');
const checkboxes = document.querySelectorAll('.check-required');
const fileInput = document.getElementById('file1');
const finalButton = document.getElementById('finalButton');
const successAlert = document.getElementById('alert-success');

// Función de validación principal
function validateForm() {
  let allTextareasFilled = Array.from(textareas).every(textarea => textarea.value.trim() !== '');
  let allSelectsSelected = Array.from(selects).every(select => select.value.trim() !== '');
  let allCheckboxesChecked = Array.from(checkboxes).every(checkbox => checkbox.checked);
  let fileUploaded = fileInput.files.length > 0;

  // Mostrar u ocultar mensajes de error para textareas
  textareas.forEach(textarea => {
    const errorMsg = document.getElementById(`error-${textarea.id}`);
    if (textarea.value.trim() === '') {
      errorMsg.classList.remove('d-none');
    } else {
      errorMsg.classList.add('d-none');
    }
  });

  // Mostrar u ocultar mensajes de error para select
  selects.forEach(select => {
    const errorMsg = document.getElementById(`error-${select.id}`);
    if (select.value.trim() === '') {
      errorMsg.classList.remove('d-none');
    } else {
      errorMsg.classList.add('d-none');
    }
  });

  // Mostrar u ocultar mensaje de error para el archivo
  const errorFile = document.getElementById('error-file1');
  if (!fileUploaded) {
    errorFile.classList.remove('d-none');
  } else {
    errorFile.classList.add('d-none');
  }

  // Habilitar o deshabilitar el botón final
  if (allTextareasFilled && allSelectsSelected && allCheckboxesChecked && fileUploaded) {
    finalButton.disabled = false;
  } else {
    finalButton.disabled = true;
  }
}

// Escuchar cambios en todos los elementos del formulario
document.querySelectorAll('textarea[required], .check-required, #file1, select[required]').forEach(element => {
  element.addEventListener('change', validateForm);
  element.addEventListener('input', validateForm);
});

// Evento para el botón de registro
finalButton.addEventListener('click', (e) => {
  e.preventDefault();
  if (!finalButton.disabled) {
    successAlert.classList.remove('d-none');
  }
});