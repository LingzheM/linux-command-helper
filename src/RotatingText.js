import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Text } from '@react-three/drei';

const RotatingText = ({ text, position, rotationSpeed }) => {
    const textRef = useRef();

    useFrame(() => {
        if (textRef.current) {
            textRef.current.rotation.x += rotationSpeed.x;
            textRef.current.rotation.y += rotationSpeed.y;
            textRef.current.rotation.z += rotationSpeed.z;
        }
    });

    return (
        <Text
            ref={textRef}
            color="black"
            fontSize={0.1}
            maxWidth={200}
            lineHeight={1}
            letterSpacing={0.02}
            textAlign={'left'}
            font="https://fonts.googleapis.com/css?family=Noto+Sans+JP"
            anchorX="center"
            anchorY="middle"
            position={position}
        >
            {text}
        </Text>
    );
};

export default RotatingText;