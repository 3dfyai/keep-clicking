import { useState, useEffect, useCallback } from 'react';
import { CustomCursor } from './components/CustomCursor';
import { CRTFrame } from './components/CRTFrame';
import { LandingScreen } from './components/LandingScreen';
import { MediaPlayer } from './components/MediaPlayer';

// Duration of the master GIF in milliseconds (adjust as needed)
const GIF_DURATION_MS = 15000; // 15 seconds

function App() {
  const [isRevealed, setIsRevealed] = useState(false);
  const [showGlitch, setShowGlitch] = useState(false);
  const [isPressed, setIsPressed] = useState(false);

  const handleReveal = useCallback(() => {
    setShowGlitch(true);
    setTimeout(() => {
      setIsRevealed(true);
      setShowGlitch(false);
    }, 150);
  }, []);

  // Auto-transition after GIF plays once
  useEffect(() => {
    if (!isRevealed) {
      const timer = setTimeout(() => {
        handleReveal();
      }, GIF_DURATION_MS);
      return () => clearTimeout(timer);
    }
  }, [isRevealed, handleReveal]);

  // Only track mouse state for cursor animation (no click actions on landing)
  useEffect(() => {
    const handleMouseDown = () => {
      setIsPressed(true);
    };

    const handleMouseUp = () => {
      setIsPressed(false);
    };

    document.addEventListener('mousedown', handleMouseDown);
    document.addEventListener('mouseup', handleMouseUp);

    return () => {
      document.removeEventListener('mousedown', handleMouseDown);
      document.removeEventListener('mouseup', handleMouseUp);
    };
  }, []);

  return (
    <>
      <CustomCursor isPressed={isPressed} />
      <CRTFrame />

      {showGlitch && <div className="glitch-flash" />}

      {!isRevealed ? (
        <LandingScreen />
      ) : (
        <div className={`main-container ${isRevealed ? 'crt-turn-on' : ''}`}>
          <div className="scenery-canvas" />
          <MediaPlayer />
        </div>
      )}
    </>
  );
}

export default App;
