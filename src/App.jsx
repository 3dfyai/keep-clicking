import { CustomCursor } from './components/CustomCursor';
import { CRTFrame } from './components/CRTFrame';
import { LandingScreen } from './components/LandingScreen';

function App() {
  return (
    <>
      <CustomCursor isPressed={false} />
      <CRTFrame />
      <LandingScreen />
    </>
  );
}

export default App;
