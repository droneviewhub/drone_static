// Contenido dinámico para cada enlace
const contents = {
  "content-1": {
    title: "1. introducción",
    paragraph: " Estos términos regulan el uso de la plataforma dvh por operadores de drones registrados"
  },
  "content-2": {
    title: " 2. requisitos de registro",
    paragraph: "- Licencia DGAC vigente.<br>- Seguro de responsabilidad civil vigente. <br>- Equipos en condiciones óptimas.<br>- Documentación válida y actualizada"
  },
"content-3": {
    title: "3. obligaciones profesionales",
    paragraph: " El operador debe:<br>- Cumplir estrictamente con la normativa aeronáutica nacional e internacional.<br>- Realizar únicamente vuelos autorizados y en condiciones seguras.<br>- Mantener confidencialidad sobre información del cliente.<br>- Entregar material de calidad profesional en tiempo y forma."
  },
"content-4": {
    title: " 4. código de conducta",
    paragraph: " Mantener comportamiento profesional, ético y respetuoso.<br>- Proteger la privacidad de personas y propiedades.<br>- No volar en zonas restringidas o sin autorización.<br>- No contactar directamente a clientes fuera de la plataforma."
  },
  "content-5": {
    title: " 5. asignación de trabajos",
    paragraph: "dvh asignará trabajos basándose en:<br>- Proximidad geográfica.<br>- Experiencia y especialización.<br>- Calificaciones de clientes anteriores."
  },
  "content-6": {
    title: "6. pagos y comisiones",
    paragraph: "- Comisión dvh: 25% por servicio completado.<br>- Pagos semanales vía transferencia.<br>- Retención del 10% durante 30 días para posibles reclamos.<br>- Operador es responsable de sus obligaciones fiscales"
  },
  "content-7": {
    title: "7. entrega de material y derechos",
    paragraph: "- Entregar el material en el formato y calidad acordados.<br>- Mantener copias de seguridad por 30 días.<br>- Piloto retiene derechos de autor como creador del material audiovisual.<br>- Autoriza el uso promocional y curatorial del material por parte de dvh"
  },
  "content-8": {
    title: "8. suspensión y terminación",
    paragraph: " dvh puede suspender o terminar la cuenta por:<br>- Incumplimiento de normas, baja calidad o conducta inadecuada.<br>- Documentación falsa o vencida.<br>- Actividades fraudulentas o ilegales"
  },
  "content-9": {
    title: " 9. responsabilidad e indemnización",
    paragraph: "El operador acepta:<br>- Ser único responsable por sus operaciones de vuelo.<br>- Indemnizar a dvh contra reclamos derivados de sus servicios.<br>- Mantener seguros adecuados para cubrir posibles daños."
  },
  "content-10": {
    title: "10. jurisdicción y ley aplicable",
    paragraph: "Estos términos se rigen por la ley chilena. Cualquier disputa será resuelta por los tribunales competentes de la
 ciudad/región donde se realice el servicio."
  },
  
  "content-11": {
    title: "1. introducción",
    paragraph: "Estos términos regulan el uso de la plataforma Drone View Hub (dvh) por parte de los clientes que solicitan
 servicios de grabación aérea."
  },
 "content-12": {
    title: " 2. registro y aceptación",
    paragraph: "Al registrarse en dvh, el cliente declara:<br>- Ser mayor de edad o contar con autorización de sus representantes legales<br>- Haber leído, comprendido y aceptado estos términos y condiciones<br>- Proporcionar información veraz y actualizada"
  },
   "content-13": {
    title: " 3. obligaciones del cliente",
    paragraph: " El cliente se compromete a:<br>- Solicitar únicamente servicios que cumplan con las leyes locales y normativas aeronáuticas<br>- Proporcionar información precisa sobre el tipo de servicio requerido<br>- Realizar pagos de manera puntual según las condiciones establecidas<br>- No solicitar vuelos en zonas prohibidas, restringidas o de uso militar<br>- Obtener permisos necesarios cuando el servicio lo requiera<br>- Tratar con respeto a los operadores y personal de dvh<br>- No utilizar la plataforma para actividades ilegales o que violen derechos de tercero"
  },
   "content-14": {
    title: "4. proceso de solicitud y pago",
    paragraph: " Estructura de precios y cotizaciones:<br>- Los precios mostrados en la plataforma son estimativos y pueden variar según las condiciones específicas del
 servicio.<br>- Cotización definitiva se confirmará antes de la asignación del operador.<br>- Pago anticipado del 100% mediante tarjeta, transferencia u otros métodos autorizados.<br>- El pago debe completarse dentro de 24 horas posteriores a la aceptación de la cotización."
  },
   "content-15": {
    title: " 5. cancelaciones y reembolsos",
    paragraph: " Cancelaciones con más de 48 horas: reembolso del 100%<br>- Cancelaciones entre 24-48 horas: reembolso del 50%<br>- Cancelaciones con menos de 24 horas: sin reembolso<br>- Casos de fuerza mayor: condiciones climáticas adversas, restricciones gubernamentales o emergencias. Se
 ofrecerá reagendamiento o reembolso completo."
  },
   "content-16": {
    title: "6. entrega y derechos sobre el contenido",
    paragraph: "- El cliente ostenta la titularidad principal del material como resultado del encargo y financiamiento del proyecto.<br>- El piloto retiene derechos de autor como creador del contenido audiovisual.<br>- dvh se reserva derechos de uso promocional y curatorial según lo establecido en la sección de Propiedad
 Intelectual Compartida."
  },
   "content-17": {
    title: "7. propiedad intelectual compartida",
    paragraph: "Cliente: uso comercial exclusivo del material para sus fines propios.<br>- Piloto: derecho de autoría y portafolio profesional (limitado).<br>- dvh: uso promocional limitado a fragmentos representativos para difusión de la plataforma."
  },
   "content-18": {
    title: "8. privacidad y protección de datos",
    paragraph: "dvh cumple con normativa vigente sobre protección de datos. Incluye:<br>- Acceso, rectificación, eliminación, portabilidad y oposición.<br>- Uso de datos: prestación de servicios, pagos, comunicaciones, prevención de fraude.<br>- dvh no vende datos personales a terceros."
  },
   "content-19": {
    title: "9. limitaciones de responsabilidad",
    paragraph: "dvh no será responsable por:<br>- Daños directos o indirectos por uso de la plataforma.<br>- Fallas técnicas, interrupciones del servicio o pérdida de datos.<br>- Actos u omisiones de operadores independientes."
  },
  "content-20": {
    title: "10. jurisdicción y ley aplicable",
    paragraph: "Estos términos se rigen por la ley chilena. Cualquier disputa será resuelta por los tribunales competentes de la
 ciudad/región donde se realice el servicio."
  }
};


const links = document.querySelectorAll('a[data-content]');
const contentDisplay = document.getElementById('content-display');

links.forEach(link => {
  link.addEventListener('click', (event) => {
    event.preventDefault(); // Evita que la página se recargue
    const contentKey = event.target.getAttribute('data-content');
    const content = contents[contentKey];

    if (content) {
      // Actualizamos el contenido del contenedor derecho
      contentDisplay.innerHTML = `
        <h3 class="text-start">${content.title}</h3>
        <p class="text-start h5">${content.paragraph}</p>
      `;
    }
  });
});