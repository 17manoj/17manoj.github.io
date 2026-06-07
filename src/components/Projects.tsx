import React from 'react';
import { projects as projectsData } from '../data/projects';
import type { Project } from '../data/projects';
import Card from './ui/Card';

const Projects: React.FC = () => {
    return (
        <section className="py-10">
            <h2 className="text-3xl font-bold text-center mb-8">Projects</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {projectsData.map((project: Project) => (
                    <Card
                        key={project.title}
                        title={project.title}
                        description={project.description}
                        techStack={project.techStack}
                        githubLink={project.githubLink}
                        liveDemoLink={project.liveDemoLink}
                        coverImage={project.coverImage}
                    />
                ))}
            </div>
        </section>
    );
};

export default Projects;