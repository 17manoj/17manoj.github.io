import React from 'react';

const Hero: React.FC = () => {
    return (
        <section className="hero" id="top">
            <div className="hero-noise" aria-hidden="true" />
            <header className="hero-topbar">
                <p className="hero-eyebrow">Manoj Kr. Bisht</p>
                <p className="hero-location">Glasgow, UK</p>
            </header>

            <div className="hero-grid">
                <div className="hero-main">
                    <p className="hero-kicker">AI Governance Leader</p>
                    <h1 className="hero-title">
                        Designing trust for
                        <span>AI in banking.</span>
                    </h1>
                    <p className="hero-summary">
                        Senior Manager focused on responsible AI, model risk, and regulatory readiness across financial services.
                        I combine deep IFRS 9 and IRB experience with practical AI governance for real-world deployment.
                    </p>

                    <div className="hero-cta-row">
                        <a href="#projects" className="hero-cta hero-cta-primary">View Projects</a>
                        <a href="mailto:mmpbisht17@gmail.com" className="hero-cta hero-cta-secondary">Contact Me</a>
                    </div>

                    <ul className="hero-tags" aria-label="Specializations">
                        <li>Responsible AI</li>
                        <li>Model Risk</li>
                        <li>PRA Remediation</li>
                        <li>RAG Risk Controls</li>
                    </ul>
                </div>

                <aside className="hero-panel" aria-label="Profile highlights">
                    <p className="hero-panel-label">Current Role</p>
                    <h2>Manager, EY</h2>
                    <p>
                        Leading oversight across IFRS 9 audits, IRB remediation, and governance work aligned with PRA expectations.
                    </p>

                    <div className="hero-panel-metrics">
                        <div>
                            <span>10+</span>
                            <p>Years Experience</p>
                        </div>
                        <div>
                            <span>3</span>
                            <p>Core Domains</p>
                        </div>
                        <div>
                            <span>UK</span>
                            <p>Banking Focus</p>
                        </div>
                    </div>
                </aside>
            </div>
        </section>
    );
};

export default Hero;