import React from 'react';

const App: React.FC = () => {
    const impactStories = [
        {
            org: 'EY',
            title: 'IFRS 9 Audit and PRA Remediation Oversight',
            summary:
                'Led oversight across IFRS 9 audits and IRB remediation programmes for UK banks, converting supervisory expectations into practical governance actions and evidence packs.'
        },
        {
            org: 'NatWest Group',
            title: 'IRB LGD Model Development for SME Portfolio',
            summary:
                'Led a sub-team through segmentation, downturn analysis, calibration, and documentation to deliver a robust Loss Given Default model aligned with EBA and PRA expectations.'
        },
        {
            org: 'NatWest Group',
            title: 'Mortgages LGD Model for UK Portfolio',
            summary:
                'Delivered principal-analyst leadership for an IRB mortgage model with end-to-end implementation, large-scale PySpark and Python analysis, and detailed model governance documentation.'
        },
        {
            org: 'Sapient Nitro',
            title: 'Software Engineering Foundation in Production Delivery',
            summary:
                'Built e-commerce features as a Java developer, establishing strong delivery discipline in engineering, SQL, debugging, and cross-functional product execution.'
        }
    ];

    const strengths = [
        {
            heading: 'AI Governance and Responsible AI',
            items: [
                'AI governance and control design',
                'Responsible AI and AI assurance',
                'AI risk assessments and control testing',
                'AI lifecycle oversight and monitoring'
            ]
        },
        {
            heading: 'Financial Services Risk and Regulation',
            items: [
                'IFRS 9 and ECL model governance',
                'IRB model development and remediation',
                'PRA supervisory readiness',
                'Model risk across three lines of defence'
            ]
        },
        {
            heading: 'Technical and Delivery Skills',
            items: [
                'Python, PySpark, SQL, SAS',
                'AWS cloud familiarity',
                'Quantitative modelling and analysis',
                'Executive-ready communication'
            ]
        }
    ];

    const frameworks = [
        'EU AI Act',
        'PRA SS1/23',
        'FCA AI Principles',
        'MAS FEAT / Veritas',
        'CRR / CRD',
        'EBA IRB Guidance',
        'PRA SS4/13',
        'Model Validation Standards'
    ];

    return (
        <div className="pc-shell">
            <header className="pc-nav">
                <div className="pc-nav-inner">
                    <p className="pc-brand">MANOJ KR. BISHT</p>
                    <nav className="pc-links" aria-label="Primary">
                        <a href="#impact">Impact</a>
                        <a href="#strengths">Strengths</a>
                        <a href="#about">About</a>
                        <a href="mailto:mmpbisht17@gmail.com">Contact</a>
                    </nav>
                </div>
            </header>

            <main>
                <section className="pc-hero" id="top">
                    <div className="pc-hero-inner">
                        <p className="pc-kicker">Hello</p>
                        <h1>
                            AI governance leadership
                            <span>for regulated banking.</span>
                        </h1>
                        <p className="pc-lede">
                            Senior Manager based in Glasgow, UK, bringing 10+ years across model risk, audit,
                            remediation, and emerging AI governance in financial services.
                        </p>
                        <div className="pc-cta-row">
                            <a href="#impact" className="pc-btn pc-btn-primary">View Experience</a>
                            <a href="mailto:mmpbisht17@gmail.com" className="pc-btn pc-btn-ghost">Get in Touch</a>
                        </div>
                    </div>
                </section>

                <section className="pc-section pc-section-split" id="impact">
                    <div className="pc-section-head">
                        <p className="pc-eyebrow">Selected Leadership Experience</p>
                        <h2>Translating regulatory expectations into operational AI and model controls.</h2>
                    </div>

                    <div className="pc-story-grid">
                        {impactStories.map((story) => (
                            <article key={story.title} className="pc-story-card">
                                <p className="pc-story-org">{story.org}</p>
                                <h3>{story.title}</h3>
                                <p>{story.summary}</p>
                            </article>
                        ))}
                    </div>
                </section>

                <section className="pc-section" id="strengths">
                    <div className="pc-section-head">
                        <p className="pc-eyebrow">Core Strengths</p>
                        <h2>A rare combination of model-risk depth and practical AI governance delivery.</h2>
                    </div>

                    <div className="pc-strength-grid">
                        {strengths.map((group) => (
                            <article key={group.heading} className="pc-strength-card">
                                <h3>{group.heading}</h3>
                                <ul>
                                    {group.items.map((item) => (
                                        <li key={item}>{item}</li>
                                    ))}
                                </ul>
                            </article>
                        ))}
                    </div>
                </section>

                <section className="pc-section pc-frameworks">
                    <div className="pc-section-head">
                        <p className="pc-eyebrow">Regulatory and Framework Knowledge</p>
                        <h2>Working fluency across the standards shaping responsible AI in finance.</h2>
                    </div>
                    <div className="pc-chip-wrap" aria-label="Regulatory frameworks">
                        {frameworks.map((framework) => (
                            <span key={framework} className="pc-chip">{framework}</span>
                        ))}
                    </div>
                </section>

                <section className="pc-section pc-about" id="about">
                    <div className="pc-about-grid">
                        <article>
                            <p className="pc-eyebrow">Behind the Work</p>
                            <h2>Building confidence in AI adoption through governance discipline.</h2>
                            <p>
                                Manoj is a senior risk, audit, and model-governance professional who operates at the
                                intersection of business, risk, compliance, and technology. He helps organizations move
                                from abstract policy to practical controls, documentation quality, challenge process,
                                and remediation readiness.
                            </p>
                            <p>
                                His profile is strongest for leadership roles spanning AI governance, responsible AI,
                                model risk, and regulatory change in financial services.
                            </p>
                        </article>

                        <aside className="pc-contact-card">
                            <p className="pc-eyebrow">Contact</p>
                            <h3>Manoj Kr. Bisht</h3>
                            <p>Senior Manager - AI Governance</p>
                            <a href="mailto:mmpbisht17@gmail.com">mmpbisht17@gmail.com</a>
                            <a href="tel:+447425617888">+44 07425 617888</a>
                            <p>Glasgow, UK · Open to relocation</p>
                        </aside>
                    </div>
                </section>
            </main>

            <footer className="pc-footer">
                <p>AI Governance · Responsible AI · Model Risk · Financial Services</p>
            </footer>
        </div>
    );
};

export default App;
