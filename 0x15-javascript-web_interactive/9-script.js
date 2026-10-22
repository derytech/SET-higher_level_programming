```javascript
#!/usr/bin/node

document.addEventListener('DOMContentLoaded', async () => {
  const helloElement = document.querySelector('#hello');

  try {
    const response = await fetch(
      'https://hellosalut.stefanbohacek.dev/?lang=fr'
    );

    if (!response.ok) {
      throw new Error('Failed to fetch greeting');
    }

    const data = await response.json();
    helloElement.textContent = data.hello;
  } catch (error) {
    helloElement.textContent = 'Unable to load greeting.';
  }
});
```