import { Canvas, useFrame, ThreeElements } from '@react-three/fiber'
import { RobotModel } from '@/components/RobotModel/RobotModel'
import './style/Communicate.less'
import { WangcaiModel } from '@/components/RobotModel/Wangcai'
import { useNavigate } from 'react-router'
export const Communicate = () => {
    const navigate = useNavigate()
    const goHome = () => {
        navigate('/')
    }
    return (
        <div className="communicate__container">
            <div className='communicate__model'>
                <Canvas style={{width: '100%', height: '100%'}}>
                    <ambientLight intensity={Math.PI / 2} />
                    <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} decay={0} intensity={Math.PI} />
                    <pointLight position={[-10, -10, -10]} decay={0} intensity={Math.PI} />
                    <RobotModel position={[0, 0, 0]} scale={[3, 3, 3]} rotation={[0, 0, 0]} />
                </Canvas>
            </div>
            <div className='communicate__control'>
                <button className='communicate__btn' onClick={goHome}>返回首页</button>
            </div>
        </div>
    )
}

