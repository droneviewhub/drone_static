document.addEventListener('DOMContentLoaded', () => {
    const chatContainer = document.getElementById('chat-container');
    const userInput = document.getElementById('user-input');
    const sendButton = document.getElementById('send-button');
    const loadingIndicator = document.getElementById('loading-indicator');

    // Función para añadir un mensaje a la ventana del chat
    function addMessage(text, sender) {
        const messageDiv = document.createElement('div');
        // Asigna la clase CSS correcta dependiendo de si el mensaje es del usuario o de la IA
        messageDiv.classList.add(sender === 'user' ? 'user-message' : 'ai-message');
        messageDiv.textContent = text;
        chatContainer.appendChild(messageDiv);
        // Hace scroll automático para mostrar el último mensaje
        chatContainer.scrollTop = chatContainer.scrollHeight;
    }

    // Función para manejar el envío del mensaje
    async function handleSendMessage() {
        const userMessage = userInput.value.trim();
        if (!userMessage) return; // No hacer nada si el mensaje está vacío

        // 1. Mostrar el mensaje del usuario en el chat
        addMessage(userMessage, 'user');
        userInput.value = ''; // Limpiar el campo de texto

        // 2. Mostrar el indicador de carga y deshabilitar el botón
        loadingIndicator.classList.remove('d-none');
        sendButton.disabled = true;

        // 3. Preparar y enviar la solicitud al backend de Django
        const formData = new FormData();
        formData.append('pregunta', userMessage);

        try {
            const response = await fetch('/', { // Envía la solicitud a la URL raíz del sitio
                method: 'POST',
                body: formData,
                headers: {
                    // El CSRF token no es necesario porque la vista tiene csrf_exempt
                }
            });

            const data = await response.json();

            // 4. Mostrar la respuesta de la IA o un mensaje de error
            if (data.respuesta) {
                addMessage(data.respuesta, 'ai');
            } else if (data.error) {
                addMessage(`Error: ${data.error}`, 'ai');
            } else {
                addMessage('Error: No se recibió una respuesta válida del servidor.', 'ai');
            }

        } catch (error) {
            console.error('Error al comunicarse con el servidor:', error);
            addMessage('Error: No se pudo conectar con el servidor. Inténtalo de nuevo más tarde.', 'ai');
        } finally {
            // 5. Ocultar el indicador de carga y rehabilitar el botón
            loadingIndicator.classList.add('d-none');
            sendButton.disabled = false;
            userInput.focus(); // Poner el foco de nuevo en el campo de texto
        }
    }

    // Asignar el evento al botón de enviar
    sendButton.addEventListener('click', handleSendMessage);

    // Opcional: permitir enviar con la tecla "Enter"
    userInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault(); // Evitar el salto de línea
            handleSendMessage();
        }
    });
});
