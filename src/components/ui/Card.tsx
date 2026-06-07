import React from 'react';

interface CardProps {
    title: string;
    description: string;
    techStack: string[];
    githubLink: string;
    liveDemoLink: string;
    coverImage?: string;
}

const Card: React.FC<CardProps> = ({ title, description, techStack, githubLink, liveDemoLink, coverImage }) => {
    return (
        <div className="bg-white shadow-lg rounded-lg overflow-hidden">
            {coverImage ? (
                <img src={coverImage} alt={title} className="w-full h-48 object-cover" />
            ) : (
                <div className="w-full h-48 bg-gray-200" aria-hidden="true" />
            )}
            <div className="p-4">
                <h2 className="text-xl font-semibold">{title}</h2>
                <p className="text-gray-700">{description}</p>
                <div className="mt-2">
                    <span className="text-sm font-medium text-gray-500">Tech Stack: </span>
                    <span className="text-sm text-gray-600">{techStack.join(', ')}</span>
                </div>
                <div className="mt-4 flex justify-between">
                    <a href={githubLink} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
                        View on GitHub
                    </a>
                    <a href={liveDemoLink} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
                        Live Demo
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Card;