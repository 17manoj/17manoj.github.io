import React from 'react';

const ExperienceTimeline: React.FC = () => {
    const experiences = [
        {
            title: "Manager",
            company: "EY",
            location: "Edinburgh, UK",
            date: "Nov 2024 - Present",
            description: "Provide senior oversight across IFRS 9 audits, IRB remediation programmes, and PRA-related advisory work for UK banks."
        },
        {
            title: "AVP - Development of IRB Loss Given Default Model for SME Portfolio",
            company: "NatWest Group",
            location: "Edinburgh, UK",
            date: "Jan 2023 - Sep 2024",
            description: "Led a sub-team in the development of an Internal Ratings-Based (IRB) Loss Given Default model for the SME portfolio."
        },
        {
            title: "Principal Analyst - Development of IRB Loss Given Default Model for UK Mortgages Portfolio",
            company: "NatWest Group",
            location: "Edinburgh, UK",
            date: "Apr 2019 - Oct 2022",
            description: "Worked as a principal analyst in the development of the IRB Loss Given Default model for mortgages in compliance with EBA and PRA expectations."
        },
        {
            title: "Lead Analyst - Behavioural Scorecard Model for Personal Credit Cards Portfolio",
            company: "NatWest Group",
            location: "Edinburgh, UK",
            date: "Sep 2017 - Mar 2019",
            description: "Worked as a lead analyst on a behavioural scorecard model using internal and external bureau data to support decision-making."
        },
        {
            title: "Java Developer",
            company: "Sapient Nitro",
            location: "Noida, India",
            date: "Nov 2012 - Jun 2015",
            description: "Developed e-commerce site features using Java technology in a hybrid framework while working in agile delivery cycles."
        }
    ];

    return (
        <div className="experience-timeline">
            <h2 className="text-2xl font-bold mb-4">Experience Timeline</h2>
            <ul className="space-y-4">
                {experiences.map((experience, index) => (
                    <li key={index} className="border-l-4 border-gray-300 pl-4">
                        <h3 className="font-semibold">{experience.title} at {experience.company}</h3>
                        <p className="text-gray-600">{experience.location} | {experience.date}</p>
                        <p>{experience.description}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ExperienceTimeline;