import React from 'react';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Projects from './components/Projects';
import ExperienceTimeline from './components/ExperienceTimeline';
// import AgentChat from './components/AgentChat';

const App: React.FC = () => {
    return (
        <div className="bg-gray-900 text-white min-h-screen">
            <main className="container mx-auto px-4 py-8">
                <Hero />
                <Skills />
                <Projects />
                <ExperienceTimeline />
                {/* <AgentChat /> */}
            </main>
        </div>
    );
};

export default App;
