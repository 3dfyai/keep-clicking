export function LandingScreen() {
    return (
        <div className="landing-screen">
            {/* GIF in the center (behind everything) */}
            <div className="landing-gif-container">
                <img
                    src="/Nested Sequence 01.gif"
                    alt="Loading..."
                    className="loading-gif"
                />
                {/* Dark overlay to dim the GIF */}
                <div className="gif-dim-overlay"></div>
            </div>

            {/* Logo overlay on top of the GIF with click animation */}
            <img
                src="/logo_overlay.png"
                alt="Keep Clicking"
                className="logo-overlay"
            />

            {/* Frame overlay on top with transparent center */}
            <img
                src="/frame_transparent.png"
                alt=""
                className="frame-overlay"
            />
        </div>
    );
}
