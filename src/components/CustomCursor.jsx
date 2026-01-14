import { useEffect, useState, useRef } from 'react';

const GHOST_COUNT = 5;

export function CustomCursor({ isPressed }) {
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const ghostPositions = useRef(Array(GHOST_COUNT).fill({ x: 0, y: 0 }));
    const [, forceUpdate] = useState(0);

    useEffect(() => {
        const handleMouseMove = (e) => {
            setPosition({ x: e.clientX, y: e.clientY });

            // Update ghost positions with staggered delay
            ghostPositions.current.forEach((_, index) => {
                setTimeout(() => {
                    ghostPositions.current[index] = { x: e.clientX, y: e.clientY };
                    forceUpdate(n => n + 1);
                }, index * 20);
            });
        };

        document.addEventListener('mousemove', handleMouseMove);
        return () => document.removeEventListener('mousemove', handleMouseMove);
    }, []);

    return (
        <>
            {ghostPositions.current.map((pos, index) => (
                <div
                    key={index}
                    className="cursor-ghost"
                    style={{
                        left: pos.x,
                        top: pos.y,
                    }}
                />
            ))}
            <div
                className="custom-cursor"
                style={{
                    left: position.x,
                    top: position.y,
                    transform: isPressed ? 'scale(0.8)' : 'scale(1)',
                }}
            />
        </>
    );
}
