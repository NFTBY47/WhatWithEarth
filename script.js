const earthImage = document.getElementById('earthImage');
const continentImage = document.getElementById('continentImage');
const continentLabel = document.getElementById('continentLabel');
const runButton = document.getElementById('run');

// Все континенты
const continents = [
  { name: 'Африка', src: 'images/CONTINENTS/AFRICA.png' },
  { name: 'Антарктида', src: 'images/CONTINENTS/ANTA.png' },
  { name: 'Австралия', src: 'images/CONTINENTS/AVSTRAL.png' },
  { name: 'Северная Америка', src: 'images/CONTINENTS/NORTH.png' }
];

// Предзагрузка изображений
continents.forEach(cont => {
  const img = new Image();
  img.src = cont.src;
});

// Показ континента с хаотичными параметрами
function showContinent(continent) {
  continentImage.src = continent.src;
  continentLabel.textContent = continent.name;

  const randomX = `${Math.random() * 40 - 20}px`;
  const randomY = `${Math.random() * 30 - 15}px`;
  const randomRot = `${Math.random() * 10 - 5}deg`;

  continentImage.style.setProperty('--x', randomX);
  continentImage.style.setProperty('--y', randomY);
  continentImage.style.setProperty('--rot', randomRot);

  continentImage.classList.add('show');
  continentLabel.classList.add('show');
  earthImage.style.opacity = 0.1;

  // Возвращаем глобальную карту
  setTimeout(() => {
    continentImage.classList.remove('show');
    continentImage.style.opacity = 0;
    continentLabel.classList.remove('show');
    earthImage.style.opacity = 1;
  }, 6000);
}

// Запускаем бесконечный цикл анимаций
function startCycle() {
  let i = 0;
  setInterval(() => {
    const cont = continents[i % continents.length];
    showContinent(cont);
    i++;
  }, 9000);
}

// При клике запускаем
runButton.addEventListener('click', () => {
  startCycle();
  runButton.disabled = true;
  runButton.innerText = "Симуляция запущена";
});
