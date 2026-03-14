document.addEventListener('DOMContentLoaded', () => {
    const chatContainer = document.getElementById('chat-container');
    const userInput = document.getElementById('user-input');
    const sendButton = document.getElementById('send-button');
    const loadingIndicator = document.getElementById('loading-indicator');

    let chatHistory = [];

    function addMessage(text, sender) {
        const messageDiv = document.createElement('div');
        messageDiv.classList.add(sender === 'user' ? 'user-message' : 'ai-message', 'p-2', 'rounded');
        messageDiv.textContent = text;
        chatContainer.appendChild(messageDiv);
        chatContainer.scrollTop = chatContainer.scrollHeight;
    }

    sendButton.addEventListener('click', async () => {
        const prompt = userInput.value.trim();
        if (!prompt) return;

        addMessage(prompt, 'user');
        userInput.value = '';

        loadingIndicator.classList.remove('d-none'); 
        sendButton.disabled = true;

        chatHistory.push({ role: "user", parts: [{ text: prompt }] });

        try {
           
            const payload = {
                contents: chatHistory
            };
            const apiKey = "";
            const apiUrl = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash-preview-05-20:generateContent?key=${apiKey}`;

         
            let response;
            let success = false;
            let retries = 0;
            const maxRetries = 5;
            const initialDelay = 1000; 

            while (!success && retries < maxRetries) {
                try {
                    response = await fetch(apiUrl, {
                        method: 'POST',
                        headers: { 'Content-Type': 'application/json' },
                        body: JSON.stringify(payload)
                    });

                    if (response.ok) {
                        success = true;
                    } else {
                        console.error(`API call failed with status: ${response.status}`);
                        if (response.status === 429) { 
                            const delay = initialDelay * Math.pow(2, retries);
                            console.log(`Retrying in ${delay}ms...`);
                            await new Promise(res => setTimeout(res, delay));
                            retries++;
                        } else {
                            throw new Error(`API call failed with status: ${response.status}`);
                        }
                    }
                } catch (error) {
                    console.error('Fetch error:', error);
                    break; 
                }
            }

            if (!success) {
                throw new Error('Failed to fetch response from API after multiple retries.');
            }

            const result = await response.json();

           
            if (result.candidates && result.candidates.length > 0 &&
                result.candidates[0].content && result.candidates[0].content.parts &&
                result.candidates[0].content.parts.length > 0) {
                const aiResponseText = result.candidates[0].content.parts[0].text;
                addMessage(aiResponseText, 'ai');

                chatHistory.push({ role: "model", parts: [{ text: aiResponseText }] });
            } else {
                addMessage("Error: No se pudo obtener una respuesta válida.", 'ai');
            }
        } catch (error) {
            console.error('Error al comunicarse con la IA:', error);
            addMessage('Error: Ocurrió un problema al procesar su solicitud.', 'ai');
        } finally {
            loadingIndicator.classList.add('d-none'); 
            sendButton.disabled = false;
        }
    });
});