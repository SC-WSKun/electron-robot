import { useRef, useState } from 'react'
import * as THREE from 'three'
import { Canvas, useFrame, ThreeElements } from '@react-three/fiber'
import { RobotModel } from '@/components/RobotModel/RobotModel'
export const Communicate = () => {
    return (
        <div className="communicate__container">
            <Canvas>
                <ambientLight intensity={Math.PI / 2} />
                <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} decay={0} intensity={Math.PI} />
                <pointLight position={[-10, -10, -10]} decay={0} intensity={Math.PI} />
                <RobotModel position={[0, 0, 0]}/>
            </Canvas>
        </div>
    )
}

