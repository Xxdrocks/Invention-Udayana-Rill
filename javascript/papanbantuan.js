// Papan Bantuan Start
const pilihKondisi = document.getElementById('pilihKondisi');
const inputBox = document.getElementById('inputBox');
let draggedItem = null, offsetX = 0, offsetY = 0;

const soundData = {
  '1.png': '../assets/audio/PapanBantuan/1.mp3',
  '2.png': '../assets/audio/PapanBantuan/2.mp3',
  '3.png': '../assets/audio/PapanBantuan/3.mp3',
  '4.png': '../assets/audio/PapanBantuan/4.mp3',
  '5.png': '../assets/audio/PapanBantuan/5.mp3',
  '6.png': '../assets/audio/PapanBantuan/6.mp3',
  '7.png': '../assets/audio/PapanBantuan/7.mp3',
  '8.png': '../assets/audio/PapanBantuan/8.mp3',
  '9.png': '../assets/audio/PapanBantuan/9.mp3',
  '10.png': '../assets/audio/PapanBantuan/10.mp3',
  '11.png': '../assets/audio/PapanBantuan/11.mp3',
  '12.png': '../assets/audio/PapanBantuan/12.mp3',
  '13.png': '../assets/audio/PapanBantuan/13.mp3',
  '14.png': '../assets/audio/PapanBantuan/14.mp3',
  '15.png': '../assets/audio/PapanBantuan/15.mp3',
  '16.png': '../assets/audio/PapanBantuan/16.mp3',
  '17.png': '../assets/audio/PapanBantuan/17.mp3',
  '18.png': '../assets/audio/PapanBantuan/18.mp3',
  '19.png': '../assets/audio/PapanBantuan/19.mp3',
};

function playSound(imgPath) {
  const imgName = imgPath.split('/').pop();
  const soundSrc = soundData[imgName];
  if(soundSrc) {
    const audio = new Audio(soundSrc);
    audio.play().catch(() => {});
  }
}

function dragAndDrop() {
  const images = document.querySelectorAll('#pilihKondisi img, #inputBox img');
  images.forEach(img => {
    img.setAttribute('draggable', 'true');
    img.addEventListener('dragstart', () => {
      draggedItem = img;
      img.style.opacity = '0.5';
    });
    img.addEventListener('dragend', () => {
      draggedItem = null;
      img.style.opacity = '1';
    });

    img.addEventListener('touchstart', (e) => {
      draggedItem = img;
      const rect = img.getBoundingClientRect();
      offsetX = e.touches[0].clientX - rect.left;
      offsetY = e.touches[0].clientY - rect.top;
      img.style.position = 'absolute';
      img.style.zIndex = '1000';
      img.style.opacity = '0.7';
    });

    img.addEventListener('touchmove', (e) => {
      if (!draggedItem) return;
      e.preventDefault();
      const x = e.touches[0].clientX - offsetX;
      const y = e.touches[0].clientY - offsetY;
      img.style.left = x + 'px';
      img.style.top = y + 'px';
    }, { passive: false });

    img.addEventListener('touchend', (e) => {
      if (!draggedItem) return;
      const dropTarget = document.elementFromPoint(e.changedTouches[0].clientX, e.changedTouches[0].clientY);
      if (dropTarget && dropTarget.closest('#inputBox')) {
        inputBox.appendChild(draggedItem);
        playSound(draggedItem.src);
      } else if (dropTarget && dropTarget.closest('#pilihKondisi')) {
        pilihKondisi.appendChild(draggedItem);
      }
      draggedItem.style.position = '';
      draggedItem.style.left = '';
      draggedItem.style.top = '';
      draggedItem.style.zIndex = '';
      draggedItem.style.opacity = '1';
      draggedItem = null;
      dragAndDrop();
    });
  });
}

[pilihKondisi, inputBox].forEach(board => {
  board.addEventListener('dragover', (e) => {
    e.preventDefault();
    board.style.backgroundColor = board === inputBox ? '#2d5a8a' : '#7ab5f0';
  });
  board.addEventListener('dragleave', () => {
    board.style.backgroundColor = board === inputBox ? '#346CA3' : '#8EC3F7';
  });
  board.addEventListener('drop', (e) => {
    e.preventDefault();
    board.style.backgroundColor = board === inputBox ? '#346CA3' : '#8EC3F7';
    if (draggedItem) {
      board.appendChild(draggedItem);
      if(board === inputBox) playSound(draggedItem.src);
    }
    dragAndDrop();
  });
});

document.addEventListener('DOMContentLoaded', dragAndDrop);

// Papan Bantuan End