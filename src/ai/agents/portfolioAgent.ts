class PortfolioAgent {
    private resumeData: any;

    constructor(resumeData: any) {
        this.resumeData = resumeData;
    }

    public answerBackgroundQuestion(): string {
        return `I have over 10 years of experience in AI governance, model risk, and financial services. My expertise includes IFRS 9, IRB, and regulatory compliance.`;
    }

    public explainProjects(): string {
        return `I have worked on various projects, including the development of AI models for risk assessment and governance frameworks. Each project is designed to enhance operational efficiency and compliance.`;
    }

    public describeSkills(): string {
        return `My skills include AI governance, Python, SQL, and cloud technologies. I am proficient in model validation and risk management, with a strong focus on regulatory frameworks.`;
    }

    public talkAboutExperience(): string {
        return `I have held senior roles in organizations like EY and NatWest, where I led teams in developing risk models and ensuring compliance with regulatory standards.`;
    }

    public explainTechnicalStrengths(): string {
        return `I possess a strong blend of technical and regulatory knowledge, enabling me to bridge the gap between AI technology and governance requirements.`;
    }

    public getResumeData(): any {
        return this.resumeData;
    }
}

export default PortfolioAgent;