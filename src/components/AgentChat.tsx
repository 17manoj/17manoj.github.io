/*
import React, { useState } from 'react';
import { PortfolioAgent } from '../ai/agents/portfolioAgent';

const AgentChat: React.FC = () => {
    const [input, setInput] = useState('');
    const [messages, setMessages] = useState<{ user: string; agent: string }[]>([]);
    const agent = new PortfolioAgent();

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInput(e.target.value);
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (input.trim() === '') return;

        const userMessage = input;
        setMessages((prev) => [...prev, { user: userMessage, agent: '' }]);
        setInput('');

        const agentResponse = await agent.getResponse(userMessage);
        setMessages((prev) => {
            const updatedMessages = [...prev];
            updatedMessages[updatedMessages.length - 1].agent = agentResponse;
            return updatedMessages;
        });
    };

    return (
        <div className="flex flex-col p-4 bg-gray-100 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-4">Talk to My AI Agent</h2>
            <div className="flex-1 overflow-y-auto mb-4">
                {messages.map((msg, index) => (
                    <div key={index} className="mb-2">
                        <div className="text-blue-600 font-bold">You:</div>
                        <div className="bg-white p-2 rounded-lg shadow">{msg.user}</div>
                        <div className="text-green-600 font-bold">Agent:</div>
                        <div className="bg-gray-200 p-2 rounded-lg shadow">{msg.agent}</div>
                    </div>
                ))}
            </div>
            <form onSubmit={handleSubmit} className="flex">
                <input
                    type="text"
                    value={input}
                    onChange={handleInputChange}
                    className="flex-1 p-2 border border-gray-300 rounded-l-lg"
                    placeholder="Ask me anything..."
                />
                <button type="submit" className="bg-blue-600 text-white p-2 rounded-r-lg">
                    Send
                </button>
            </form>
        </div>
    );
};

export default AgentChat;
*/