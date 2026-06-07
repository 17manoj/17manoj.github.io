import React from 'react';

const Hero: React.FC = () => {
    return (
        <section className="flex flex-col items-center justify-center h-screen text-center bg-gradient-to-r from-blue-500 to-purple-500 text-white">
            <h1 className="text-5xl font-bold mb-4">Manoj Kr. Bisht</h1>
            <h2 className="text-2xl mb-6">Senior Manager - AI Governance</h2>
            <p className="mb-8 max-w-xl">
                Strategic leader in AI governance with over 10 years of experience in financial services, combining technical expertise with regulatory awareness.
            </p>
            <div className="flex space-x-4">
                <a href="#projects" className="bg-white text-blue-500 px-4 py-2 rounded shadow hover:bg-gray-200 transition">
                    View Projects
                </a>
                <a href="/path/to/resume.pdf" className="bg-white text-blue-500 px-4 py-2 rounded shadow hover:bg-gray-200 transition">
                    Download Resume
                </a>
                <a href="/ai" className="bg-white text-blue-500 px-4 py-2 rounded shadow hover:bg-gray-200 transition">
                    Talk to My AI Agent
                </a>
            </div>
        </section>
    );
};

export default Hero;