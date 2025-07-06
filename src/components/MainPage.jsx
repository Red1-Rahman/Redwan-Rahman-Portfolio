import React, { useState } from 'react';

function MainPage() {
    const [showPoem, setShowPoem] = useState(false);

    return (
        <div>
            {/* ...existing code... */}
            <button onClick={() => setShowPoem(true)} style={{ margin: '10px 0' }}>
                Poem
            </button>
            {showPoem && (
                <div style={{
                    position: 'fixed',
                    top: 0, left: 0, right: 0, bottom: 0,
                    background: 'rgba(0,0,0,0.5)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    zIndex: 1000
                }}>
                    <div style={{
                        background: '#fff',
                        padding: '2rem',
                        borderRadius: '8px',
                        maxWidth: '400px',
                        textAlign: 'center'
                    }}>
                        <h2>Poem</h2>
                        <p>
                            {/* Replace with your poem */}
                            In code and dreams, I build and strive,<br />
                            With logic, art, I come alive.<br />
                            From quantum depths to AI's light,<br />
                            I shape tomorrow, day and night.
                        </p>
                        <button onClick={() => setShowPoem(false)}>Close</button>
                    </div>
                </div>
            )}
            {/* ...existing code... */}
        </div>
    );
}

export default MainPage;