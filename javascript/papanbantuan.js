// Kebutuhan Harian Start
const pilihKondisi = document.getElementById('pilihKondisi');
const inputBox = document.getElementById('inputBox');
let draggedItem = null;

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
}

function playSound(imgPath) {
  const imgName = imgPath.split('/').pop();
  const soundSrc = soundData[imgName];
  
  if(soundSrc) {
    const audio = new Audio(soundSrc);
    audio.play().catch(error => console.error('Gagal memutar suara:', error));
  }
}

function dragAndDrop() {
  const images = document.querySelectorAll('#pilihKondisi img');
  
  images.forEach(img => {
    img.setAttribute('draggable', 'true');
    
    img.addEventListener('dragstart', (e) => {
      draggedItem = img;
      img.classList.add('dragging');
      img.style.opacity = '0.5';
    });
    
    img.addEventListener('dragend', (e) => {
      draggedItem = null;
      img.classList.remove('dragging');
      img.style.opacity = '1';
    });
  });
}

[pilihKondisi, inputBox].forEach(board => {
  board.addEventListener('dragover', (e) => {
    e.preventDefault();
    board.style.backgroundColor = board === inputBox ? '#2d5a8a' : '#7ab5f0';
  });
  
  board.addEventListener('dragleave', (e) => {
    board.style.backgroundColor = board === inputBox ? '#346CA3' : '#8EC3F7';
  });
  
  board.addEventListener('drop', (e) => {
    e.preventDefault();
    board.style.backgroundColor = board === inputBox ? '#346CA3' : '#8EC3F7';
    
    if (draggedItem) {
      board.appendChild(draggedItem);

      if(board === inputBox) {
        playSound(draggedItem.src);
      }
    }

    dragAndDrop();
  });
});

document.addEventListener('DOMContentLoaded', dragAndDrop);


// Kebutuhan Harian End