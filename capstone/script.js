const colors = ['#FF5733', '#C70039', '#900C3F', '#581845', '#FFC300', '#FF5733', '#C70039', '#900C3F'];

const gridContainer = document.querySelector('.grid-container');

for (let i = 0; i < 4; i++) {
  const quadrant = document.createElement('div');
  quadrant.classList.add('quadrant');
  gridContainer.appendChild(quadrant);
  const randomColor = colors[Math.floor(Math.random() * colors.length)];
          quadrant.style.backgroundColor = randomColor;

  for (let j = 0; j < 16; j++) {
    const core = document.createElement('div');
    core.classList.add('core');
    quadrant.appendChild(core);

    for (let k = 0; k < 8; k++) {
      const scape = document.createElement('div');
      scape.classList.add('scape');
      core.appendChild(scape);

      for (let l = 0; l < 23; l++) {
        const node = document.createElement('div');
        node.classList.add('node');
        scape.appendChild(node);
        const randomColor = colors[Math.floor(Math.random() * colors.length)];
          node.style.backgroundColor = randomColor;


      }
    }
  }
}