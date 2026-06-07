import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Skills from './components/Skills';
import ExperienceTimeline from './components/ExperienceTimeline';
import AgentChat from './components/AgentChat';
import './index.css';

const App: React.FC = () => {
  return (
    <Router>
      <div className="flex flex-col items-center">
        <Hero />
        <Switch>
          <Route path="/projects" component={Projects} />
          <Route path="/skills" component={Skills} />
          <Route path="/experience" component={ExperienceTimeline} />
          <Route path="/chat" component={AgentChat} />
          <Route path="/" exact>
            <div className="text-center">
              <h2 className="text-2xl font-bold">Welcome to My Portfolio</h2>
              <p className="mt-2">Explore my projects, skills, and experience.</p>
            </div>
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default App;