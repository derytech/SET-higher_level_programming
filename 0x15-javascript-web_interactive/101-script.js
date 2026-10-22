```javascript
#!/usr/bin/node

document.addEventListener('DOMContentLoaded', () => {
  let items = ['Item'];
  const list = document.querySelector('ul.my_list');

  function render() {
    list.innerHTML = '';

    items.forEach((item) => {
      const listItem = document.createElement('li');
      listItem.textContent = item;
      list.appendChild(listItem);
    });
  }

  document.querySelector('#add_item').addEventListener('click', () => {
    items.push('Item');
    render();
  });

  document.querySelector('#remove_item').addEventListener('click', () => {
    if (items.length > 0) {
      items.pop();
      render();
    }
  });

  document.querySelector('#clear_list').addEventListener('click', () => {
    items = [];
    render();
  });

  render();
});
```