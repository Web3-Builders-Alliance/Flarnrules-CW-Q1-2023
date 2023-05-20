const colors = ['#FF5733', '#C70039', '#900C3F', '#581845', '#FFC300', '#FF5733', '#C70039', '#900C3F'];

const gridContainer = document.querySelector('.grid-container');

for (let quadrantInstance = 0; quadrantInstance < 4; quadrantInstance++) {
  const quadrant = document.createElement('div');
  quadrant.classList.add('quadrant');
  gridContainer.appendChild(quadrant);
  const randomColor = colors[Math.floor(Math.random() * colors.length)];
          quadrant.style.backgroundColor = randomColor;

  for (let coreInstance = 0; coreInstance < 16; coreInstance++) {
    const core = document.createElement('div');
    core.classList.add('core');
    quadrant.appendChild(core);

    for (let scapeInstance = 0; scapeInstance < 8; scapeInstance++) {
      const scape = document.createElement('div');
      scape.classList.add('scape');
      core.appendChild(scape);

      for (let nodeInstance = 0; nodeInstance < 23; nodeInstance++) {
        const node = document.createElement('div');
        node.classList.add('node');
        scape.appendChild(node);
        const randomColor = colors[Math.floor(Math.random() * colors.length)];
          node.style.backgroundColor = randomColor;


      }
    }
  }
}