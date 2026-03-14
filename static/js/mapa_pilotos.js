// Tu arreglo de profesionales
const profesionales = [ 
    { 
        id: 1, 
        nombre: 'Juan Pérez', 
        especialidad: 'Inspección de Infraestructura', 
        evaluacion: 'Cinco estrellas', 
        region: 'Región Metropolitana', 
        disponibilidad: 'Hoy', 
        precio: 'precioA', 
        imagen: 'dvh_MapaPilotos_images/Piloto.jpg', 
        certificacion: 'DGAC', 
        licencia: 'option1' 
    }, 
    { 
        id: 2, 
        nombre: 'Mariano López', 
        especialidad: 'Topografía y Cartografía', 
        evaluacion: 'Cuatro estrellas', 
        region: 'Región de Valparaíso', 
        disponibilidad: 'En una hora', 
        precio: 'precioB', 
        imagen: 'dvh_MapaPilotos_images/Piloto_03.jpg', 
        certificacion: 'DGAC', 
        licencia: 'option2' 
    }, 
    { 
        id: 3, 
        nombre: 'Carlos Gómez', 
        especialidad: 'Inspección de Infraestructura', 
        evaluacion: 'Cinco estrellas', 
        region: 'Región de Valparaíso', 
        disponibilidad: 'Hoy', 
        precio: 'precioC', 
        imagen: 'dvh_MapaPilotos_images/Piloto.jpg', 
        certificacion: 'DGAC', 
        licencia: 'option1' 
    }
]; 

// Helper para obtener el precio
function obtenerPrecioTexto(precioValue) {
    switch (precioValue) {
        case 'precioA':
            return '$50.000 CLP';
        case 'precioB':
            return '$45.000 CLP';
        case 'precioC':
            return '$55.000 CLP';
        default:
            return 'Precio no especificado';
    }
}

// Obtener los elementos del DOM
const professionalInfoContainer = document.getElementById('professional-info');
const locationIcons = document.querySelectorAll('.location-icon');

// Función para mostrar la información del profesional
function displayProfessionalInfo(professional) {
    if (!professional) {
        professionalInfoContainer.innerHTML = `
            <h5 class="card-title">No hay profesionales disponibles en esta área.</h5>
            <p class="card-text">Intenta buscar en otro punto del mapa.</p>
        `;
        return;
    }

    const infoHtml = `
        <h5 class="card-title">${professional.nombre}</h5>
        <p class="card-text"><strong>Especialidad:</strong> ${professional.especialidad}</p>
        <p class="card-text"><strong>Evaluación:</strong> ${professional.evaluacion}</p>
        <p class="card-text"><strong>Región:</strong> ${professional.region}</p>
        <p class="card-text"><strong>Certificación:</strong> ${professional.certificacion}</p>
        <p class="card-text"><strong>Precio:</strong> ${obtenerPrecioTexto(professional.precio)}</p>
        <a href="#" class="btn btn-primary mt-3">Ver Perfil</a>
    `;
    professionalInfoContainer.innerHTML = infoHtml;
}

// Agregar el evento de clic a cada ícono de ubicación
locationIcons.forEach(icon => {
    icon.addEventListener('click', () => {
        const selectedRegion = icon.getAttribute('data-region');
        
        // Filtramos por región
        const filteredProfessionals = profesionales.filter(p => p.region === selectedRegion);

        if (filteredProfessionals.length > 0) {
            // Si hay profesionales, mostramos el primero de la lista
            displayProfessionalInfo(filteredProfessionals[0]);
        } else {
            // Si no hay, mostramos un mensaje de "no encontrado"
            displayProfessionalInfo(null);
        }
    });
});