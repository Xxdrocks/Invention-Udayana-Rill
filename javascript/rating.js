const rating = document.getElementById('rating');
const cards = rating.querySelectorAll('.ratingCard');

function updateCurvedPosition() {
  const rect = rating.getBoundingClientRect();
  const centerX = rect.left + rect.width / 2;

  cards.forEach((card) => {
    const cardRect = card.getBoundingClientRect();
    const cardCenterX = cardRect.left + cardRect.width / 2;
    const distanceX = cardCenterX - centerX;

    const maxY = 100;
    const normalizedX = distanceX / (rect.width / 2);
    const y = Math.cos(normalizedX * Math.PI / 2) * maxY;

    card.style.top = `${maxY - y}px`;
    card.style.position = 'relative';

    const maxRotate = 15;
    const rotate = -normalizedX * maxRotate;
    card.style.transform = `rotate(${rotate}deg)`;
  });
}

rating.addEventListener('wheel', (e) => {
  e.preventDefault();
  rating.scrollLeft += e.deltaY;
});

rating.addEventListener('scroll', updateCurvedPosition);
window.addEventListener('resize', updateCurvedPosition);
window.addEventListener('load', updateCurvedPosition);
