import React, { useRef, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Text } from '@react-three/drei';
import RotatingText from './RotatingText'

const Sphere = ({commands}) => {
    const meshRef = useRef();
    const [hovered, setHover] = useState(false);
    const [active, setActive] = useState(false);

    useFrame(() => {
        if (meshRef.current) {
            // 慢慢旋转球体
            meshRef.current.rotation.x = meshRef.current.rotation.y += 0.01;
        }
    });

    return (
        
        <mesh
            ref={meshRef}
            scale={active ? 1.5 : 1}
            onClick={() => setActive(!active)}
            onPointerOver={() => setHover(true)}
            onPointerOut={() => setHover(false)}>
            <sphereGeometry args={[1, 32, 32]} />
            <meshStandardMaterial 
                color={hovered ? 'blue' : 'orange'}
                transparent={true}  // 启用透明度
                opacity={0.1}       // 调整这个值来改变透明度，0.0 是完全透明，1.0 是完全不透明
            />
            {commands.map(command => (
                <RotatingText
                    key={command.id}
                    text={command.text}
                    position={command.position}
                    rotationSpeed={command.rotationSpeed} // 传递旋转速度
                />
            ))}
        </mesh>
    );
};

const SphereCanvas = ({ commands }) => {
    return (
        <Canvas>
            <ambientLight />
            <pointLight position={[10, 10, 10]} />
            <Sphere commands={commands} />
        </Canvas>
    );
};

export default SphereCanvas;
