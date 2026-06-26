import Paper from "../Paper";

const drawings = [
  "/drawings/demo/Herz.png",
  "/drawings/demo/Familie.png",
  "/drawings/demo/Sonne.png",
  "/drawings/demo/Regenbogen.png",
  "/drawings/demo/Peace-hand.png",
];

export default function FeatherLab() {
  const papers = [];

const rows = 15;
const cols = 20;

for (let row = 0; row < rows; row++) {
for (let col = 0; col < cols; col++) {

const t = col / (cols - 1);

    papers.push({

      image: drawings[(row * cols + col) % drawings.length],

      position: [
        -1.15 + col * 0.12 - row * 0.04,
        row * 0.08 + Math.sin(t * Math.PI) * 0.10,
        -row * 0.008 - col * 0.004,
        ],

    scale: 0.055,

    rotation: 0,

    scale: 0.12,

    });

  }
}

  return (
    <>
      {papers.map((paper, i) => (
        <Paper
          key={i}
          position={paper.position}
          image={paper.image}
          rotation={paper.rotation}
          scale={paper.scale}
          normal={null}
        />
      ))}
    </>
  );
}