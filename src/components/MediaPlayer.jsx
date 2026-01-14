import { useState } from 'react';
import { WireframeCity } from './scenes/WireframeCity';
import { PolyScene } from './scenes/PolyScene';
import { StaticNoise } from './scenes/StaticNoise';

const SCENES = [
    {
        id: 0,
        component: WireframeCity,
        description: "The grid stretches infinitely into the magenta horizon. Data pulses through the floorboards of this digital architecture. The air smells of ozone and static."
    },
    {
        id: 1,
        component: PolyScene,
        description: "A singular artifact from the vector-era. It rotates with a mathematical purity that feels alien to our curved, organic world. It is the core of the machine."
    },
    {
        id: 2,
        component: StaticNoise,
        description: "Signal lost. The capsule is drifting through a sea of white noise. Fragments of forgotten broadcasts flicker just beneath the surface of the snow."
    }
];

export function MediaPlayer() {
    const [currentScene, setCurrentScene] = useState(0);

    const handlePrev = (e) => {
        e.stopPropagation();
        setCurrentScene((prev) => (prev - 1 + SCENES.length) % SCENES.length);
    };

    const handleNext = (e) => {
        e.stopPropagation();
        setCurrentScene((prev) => (prev + 1) % SCENES.length);
    };

    const CurrentSceneComponent = SCENES[currentScene].component;

    return (
        <div className="media-player">
            <div className="player-header">
                <span>TIME_CAPSULE_V1.0.MPG</span>
                <div style={{ display: 'flex', gap: '2px' }}>
                    <span style={{ width: '12px', height: '12px', background: 'var(--win-grey)', border: '1px solid #000' }} />
                    <span style={{ width: '12px', height: '12px', background: 'var(--win-grey)', border: '1px solid #000' }} />
                </div>
            </div>

            <div className="display-area">
                <div className="scene-container">
                    <CurrentSceneComponent />
                </div>
            </div>

            <div className="description-box">
                {SCENES[currentScene].description}
            </div>

            <div className="controls">
                <div className="win-btn" onClick={handlePrev}>CHANNEL -</div>
                <div className="win-btn" onClick={handleNext}>CHANNEL +</div>
                <div className="win-btn" style={{ color: 'var(--neon-magenta)' }}>REC</div>
            </div>

            <div className="status-bar">
                <span>00:42:12:09</span>
                <span>VOL ||||||||||||| 100%</span>
            </div>
        </div>
    );
}
