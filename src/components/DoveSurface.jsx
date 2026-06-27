import { useMemo } from "react";
import Paper from "./Paper";
import DebugFace from "./DebugFace";
import { extractFaces } from "../utils/FaceExtractor";
import { filterFaces } from "../utils/FaceFilter";
import { createPlacementData } from "../utils/PlacementEngine";

const FEATHER_LAB = false;
const DEBUG = false;

const drawings = [
  "/drawings/demo/Baum.png",
  "/drawings/demo/Blume.png",
  "/drawings/demo/Erde.png",
  "/drawings/demo/Erde-herz.png",
  "/drawings/demo/Familie.png",
  "/drawings/demo/Friedenstaube.png",
  "/drawings/demo/Haende.png",
  "/drawings/demo/Haus.png",
  "/drawings/demo/Herz.png",
  "/drawings/demo/Hund.png",
  "/drawings/demo/kinder.png",
  "/drawings/demo/Luftballons.png",
  "/drawings/demo/Meer.png",
  "/drawings/demo/Peace-hand.png",
  "/drawings/demo/Peace-Zeichen.png",
  "/drawings/demo/Regenbogen.png",
  "/drawings/demo/Regenbogen2.png",
  "/drawings/demo/Roteblume.png",
  "/drawings/demo/Schmetterling.png",
  "/drawings/demo/Smiley.png",
  "/drawings/demo/Sonne.png",
  "/drawings/demo/Sonnenblume.png",
  "/drawings/demo/Sterne.png",
  "/drawings/demo/Sternschnuppe.png",
  "/drawings/demo/Wolken.png",
];

export default function DoveSurface({ mesh }) {

  const placements = useMemo(() => {

    if (!mesh) return [];

    mesh.updateMatrixWorld(true);
    mesh.geometry.computeBoundingBox();

    const bounds = mesh.geometry.boundingBox;

    const faces = extractFaces(mesh);
    const filteredFaces = filterFaces(faces);

    return createPlacementData(
      filteredFaces,
      drawings,
      bounds
    );

  }, [mesh]);

  const featherRow = useMemo(() => {

    const papers = [];

    for (let i = 0; i < 30; i++) {

      const t = i / 29;

      papers.push({

        image: drawings[i % drawings.length],

        position: [
          -1.2 + t * 2.4,
          0.35 + Math.sin(t * Math.PI) * 0.25,
          -t * 0.15,
        ],

        rotation: (Math.random() - 0.5) * 0.25,

        flow: 0,

        scale: 0.18 + Math.random() * 0.03,

        normal: null,

      });
    }

    return papers;

  }, []);

  console.log("Placements:", placements.length);

  if (FEATHER_LAB) {

    return (
      <>
        {featherRow.map((paper, i) => (
          <Paper
            key={i}
            position={paper.position}
            image={paper.image}
            rotation={paper.rotation}
            flow={paper.flow}
            scale={paper.scale}
            normal={paper.normal}
          />
        ))}
      </>
    );
  }

  return (
    <>
      {placements.map((item, i) =>
        DEBUG ? (
          <DebugFace
            key={i}
            position={item.position}
            normal={item.normal}
            area={item.area}
            a={item.a}
            b={item.b}
            c={item.c}
          />
        ) : (
          <Paper
            key={i}
            position={item.position}
            normal={item.normal}
            rotation={item.rotation}
            flow={item.flow}
            image={item.image}
            scale={item.scale}
          />
        )
      )}
    </>
  );
}