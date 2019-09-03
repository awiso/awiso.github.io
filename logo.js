// create illo
let illo = new Zdog.Illustration({
  // set canvas with selector
  element: '.zdog-canvas',
  dragRotate: true,
});

let small = new Zdog.Group({
  addTo: illo,
})

let large = new Zdog.Group({
  addTo: illo,
  translate: {x: 94, y: 55, z: 10}
})

let spoke = new Zdog.Group({
  addTo: small,
});

let center = new Zdog.Shape({
  addTo: spoke,
  stroke: false,
})

let cyl = new Zdog.Cylinder({
  addTo: small,
  diameter: 80,
  length: 20,
  stroke: false,
  color: '#a3a3a3',
  backface: '#a3a3a3',
});

let box = new Zdog.Box({
  addTo: spoke,
  width: 15,
  height: 20,
  depth: 20,
  stroke: false,
  fill: true,
  translate: {y: 48},
  color: '#a3a3a3', // default face color
  leftFace: '#a3a3a3',
  rightFace: '#a3a3a3',
  topFace: '#a3a3a3',
  bottomFace: '#a3a3a3',
});

for (let i = 0; i < 360; i+=60) {
  spoke.copyGraph({
    addTo: small,
    rotate: {z: Zdog.TAU/6 + (i * Math.PI /180)},
  });
}

new Zdog.Cylinder({
  addTo: large,
  diameter: 100,
  length: 20,
  stroke: false,
  color: '#a3a3a3',
  backface: '#a3a3a3',
});

new Zdog.Box({
  addTo: spoke,
  width: 15,
  height: 20,
  depth: 20,
  stroke: false,
  fill: true,
  translate: {y: 55},
  color: '#a3a3a3', // default face color
  leftFace: '#a3a3a3',
  rightFace: '#a3a3a3',
  topFace: '#a3a3a3',
  bottomFace: '#a3a3a3',
});

for (let i = 0; i < 360; i+=40) {
  spoke.copyGraph({
    addTo: large,
    rotate: {z: Zdog.TAU/6 + (i * Math.PI /180)},
  });
}

// update & render
illo.updateRenderGraph();

function animate() {
  // rotate illo each frame
  illo.rotate.y += 0.02;
  illo.updateRenderGraph();
  // animate next frame
  requestAnimationFrame( animate );
}
// start animation
animate();