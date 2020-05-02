import * as React from 'react';
import * as THREE from 'three';

export interface MaintenancePageProps {
  color: string;
}

export interface MaintenancePageState {
  animationTime: number;
}

export class MaintenancePage extends React.Component<
  MaintenancePageProps,
  MaintenancePageState
> {
  canvasRef: React.RefObject<HTMLDivElement>;

  constructor(props: MaintenancePageProps) {
    super(props);
    this.state = {
      animationTime: 0,
    };
    this.canvasRef = React.createRef();
  }

  componentDidMount() {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    // document.body.appendChild( renderer.domElement );
    // use ref as a mount point of the Three.js scene instead of the document.body
    if (this.canvasRef.current) {
      this.canvasRef.current.appendChild(renderer.domElement);
    }
    const geometry = new THREE.BoxGeometry(1, 1, 1);
    const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
    const cube = new THREE.Mesh(geometry, material);
    scene.add(cube);
    camera.position.z = 5;
    const animate = () => {
      requestAnimationFrame(animate);
      cube.rotation.x += 0.01;
      cube.rotation.y += 0.01;
      renderer.render(scene, camera);
    };
    animate();
  }

  render() {
    return (
      <div
        style={{
          height: '100%',
          width: '100%',
          position: 'fixed',
          display: 'flex',
          flexFlow: 'column nowrap',
          justifyContent: 'center',
          alignItems: 'center',
        }}
        ref={this.canvasRef}
      >
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            flexWrap: 'nowrap',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        ></div>
      </div>
    );
  }
}
