
document.addEventListener('DOMContentLoaded', function () {
  fetch('https://opensheet.elk.sh/1Ed0ZsX0ZOO3gpWnwdHD5vC1feDbR3IqT5MyeI9VYBII/Sheet1')
    .then(res => res.json())
    .then(data => {
      const container = document.getElementById('menu-container');
      data.forEach(row => {
        const card = document.createElement('div');
        card.className = 'menu-card';
        card.innerHTML = `
          <img src="${row.ImageURL || 'https://via.placeholder.com/200'}" alt="Menu Item">
          <h3>${row.Item}</h3>
          <p>₹ ${row.Price}</p>
          <a href="https://wa.me/919444655181?text=I want to order: ${encodeURIComponent(row.Item)}" target="_blank">Order Now</a>
        `;
        container.appendChild(card);
      });
    });
});
