import React from 'react';

const skillsData = [
  'AI/ML',
  'Cloud Computing',
  'Data Science',
  'Software Engineering',
  'Responsible AI',
  'Model Risk',
  'LangChain',
  'Python',
  'SQL',
  'React',
];

const Skills: React.FC = () => {
  return (
    <section className="py-10 bg-gray-100 dark:bg-gray-800">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-6">Skills</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {skillsData.map((skill, index) => (
            <div key={index} className="bg-white dark:bg-gray-700 p-4 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-center">{skill}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;