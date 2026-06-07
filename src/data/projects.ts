export interface Project {
  title: string;
  description: string;
  techStack: string[];
  githubLink: string;
  liveDemoLink: string;
  tags: string[];
  coverImage?: string;
}

export const projects: Project[] = [
  {
    title: "AI Governance Framework",
    description: "Developed a comprehensive AI governance framework for a leading financial institution, ensuring compliance with regulatory standards.",
    techStack: ["Python", "AWS", "SQL"],
    githubLink: "https://github.com/yourusername/ai-governance-framework",
    liveDemoLink: "https://yourusername.github.io/ai-governance-framework",
    tags: ["AI", "Governance", "Finance"]
  },
  {
    title: "Credit Risk Model",
    description: "Designed and implemented a credit risk model using machine learning techniques to predict loan defaults.",
    techStack: ["Python", "PySpark", "SAS"],
    githubLink: "https://github.com/yourusername/credit-risk-model",
    liveDemoLink: "https://yourusername.github.io/credit-risk-model",
    tags: ["Machine Learning", "Finance", "Risk Management"]
  },
  {
    title: "Responsible AI Toolkit",
    description: "Created a toolkit for assessing and ensuring responsible AI practices within organizations, focusing on transparency and accountability.",
    techStack: ["React", "TypeScript", "Tailwind CSS"],
    githubLink: "https://github.com/yourusername/responsible-ai-toolkit",
    liveDemoLink: "https://yourusername.github.io/responsible-ai-toolkit",
    tags: ["AI", "Toolkit", "Ethics"]
  },
  {
    title: "AI Red Teaming Project",
    description: "Conducted AI red teaming exercises to identify vulnerabilities in AI systems and propose mitigation strategies.",
    techStack: ["Python", "AWS", "SQL"],
    githubLink: "https://github.com/yourusername/ai-red-teaming",
    liveDemoLink: "https://yourusername.github.io/ai-red-teaming",
    tags: ["AI", "Security", "Risk Assessment"]
  },
  {
    title: "Financial Data Visualization",
    description: "Developed an interactive dashboard for visualizing financial data, enabling better decision-making for stakeholders.",
    techStack: ["React", "D3.js", "Tailwind CSS"],
    githubLink: "https://github.com/yourusername/financial-data-visualization",
    liveDemoLink: "https://yourusername.github.io/financial-data-visualization",
    tags: ["Data Visualization", "Finance", "Dashboard"]
  }
];