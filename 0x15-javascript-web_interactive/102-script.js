#!/usr/bin/node

document.addEventListener('DOMContentLoaded', () => {
    const languageInput = document.querySelector('#language_code');
    const translateButton = document.querySelector('#btn_translate');
    const helloElement = document.querySelector('#hello');

    translateButton.addEventListener('click', async () => {
        const languageCode = languageInput.value.trim();

        if (!languageCode) {
            helloElement.textContent = 'Please enter a language code.';
            return;
        }

        try {
            const url = 'https://hellosalut.stefanbohacek.dev/?lang='
                + encodeURIComponent(languageCode);

            const response = await fetch(url);

            if (!response.ok) {
                throw new Error('Failed to fetch translation');
            }

            const data = await response.json();
            helloElement.textContent = data.hello;
        } catch (error) {
            helloElement.textContent = 'Unable to load translation.';
        }
    });
});