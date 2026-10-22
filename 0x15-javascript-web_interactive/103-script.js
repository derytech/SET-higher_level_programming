#!/usr/bin/node

document.addEventListener('DOMContentLoaded', () => {
    const languageInput = document.querySelector('#language_code');
    const translateButton = document.querySelector('#btn_translate');
    const helloElement = document.querySelector('#hello');

    async function translateHello() {
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
                throw new Error('Translation request failed');
            }

            const data = await response.json();
            helloElement.textContent = data.hello;
        } catch (error) {
            helloElement.textContent = 'Unable to load translation.';
        }
    }

    translateButton.addEventListener('click', translateHello);

    languageInput.addEventListener('keydown', (event) => {
        if (event.key === 'Enter') {
            translateHello();
        }
    });
});