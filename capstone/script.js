const numQuadrants = 4;
const numCores = 16;
const numScapes = 8;
const numNodes = 23;

// Generate the HTML code for the grid
const gridContainer = document.querySelector('.grid-container');
for (let q = 1; q <= numQuadrants; q++) {
  const quadrant = document.createElement('div');
  quadrant.classList.add('quadrant');
  quadrant.innerHTML = `<h3>Quadrant ${q}</h3>`;
  
  const cores = document.createElement('div');
  cores.classList.add('cores');
  
  for (let c = 1; c <= numCores; c++) {
    const core = document.createElement('div');
    core.classList.add('core');
    
    const scapes1 = document.createElement('div');
    scapes1.classList.add('scapes');
    for (let s = 1; s <= 4; s++) {
      const scape = document.createElement('div');
      scape.classList.add('scape');
      
      const nodes = document.createElement('div');
      nodes.classList.add('nodes');
      for (let n = 1; n <= numNodes; n++) {
        const node = document.createElement('div');
        node.classList.add('node');
        nodes.appendChild(node);
      }
      
      scape.appendChild(nodes);
      scapes1.appendChild(scape);
    }
    
    const scapes2 = document.createElement('div');
    scapes2.classList.add('scapes');
    for (let s = 5; s <= 8; s++) {
      const scape = document.createElement('div');
      scape.classList.add('scape');
      
      const nodes = document.createElement('div');
      nodes.classList.add('nodes');
      for (let n = 1; n <= numNodes; n++) {
        const node = document.createElement('div');
        node.classList.add('node');
        nodes.appendChild(node);
      }
      
      scape.appendChild(nodes);
      scapes2.appendChild(scape);
    }
    
    core.appendChild(scapes1);
    core.appendChild(scapes2);
    cores.appendChild(core);
  }
  
  quadrant.appendChild(cores);
  gridContainer.appendChild(quadrant);
}

// Define an array of standard colors
const colors = ["red", "green", "blue", "yellow", "orange", "purple", "pink"];

// Get all scape elements
const scapes = document.querySelectorAll(".scape");

// Loop through each scape and assign a random color
scapes.forEach(function(scape) {
  // Generate a random index for the colors array
  const randomIndex = Math.floor(Math.random() * colors.length);
  
  // Assign the random color to the scape
  scape.style.backgroundColor = colors[randomIndex];
});