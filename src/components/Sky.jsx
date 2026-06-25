import * as THREE from "three";
/* -------------------- SKY -------------------- */
export default function Sky() {
  return (
    <mesh position={[0, 0, -80]}>
      <sphereGeometry args={[120, 32, 32]} />
      <shaderMaterial
        side={THREE.BackSide}
        uniforms={{
          top: { value: new THREE.Color("#081225") },
          bottom: { value: new THREE.Color("#2b3a67") },
        }}
        vertexShader={`
          varying vec3 vPos;

          void main() {
            vPos = position;
            gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
          }
        `}
        fragmentShader={`
          uniform vec3 top;
          uniform vec3 bottom;

          varying vec3 vPos;

          void main() {
            float h = vPos.y * 0.01 + 0.5;
            gl_FragColor = vec4(mix(bottom, top, h), 1.0);
          }
        `}
      />
    </mesh>
  );
}