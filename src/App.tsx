import React from 'react';
import Hero from './components/Hero';

const App: React.FC = () => {
    return (
        <div className="site-shell">
            <main>
                <Hero />

                <section className="landing-preview" id="projects">
                    <div className="landing-preview-inner">
                        <p className="landing-preview-label">Next Build Step</p>
                        <h2>Projects and experience sections are being redesigned in this style.</h2>
                        <p>
                            This first release establishes the visual direction. Next, I can transform your projects,
                            timeline, and skills into the same editorial layout.
                        </p>
                    </div>
                </section>
            </main>
        </div>
    );
};

export default App;
