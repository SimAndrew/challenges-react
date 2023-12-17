import React from 'react';
import './App.css';

const skills = [
	{ skill: 'HTML', level: 'advanced', color: '#90EE90' },
	{ skill: 'CSS', level: 'advanced', color: '#686A6C' },
	{ skill: 'JavaScript', level: 'intermediate', color: '#87CEEB' },
	{ skill: 'React', level: 'intermediate', color: '#FF8C00' },
	{ skill: 'Git and Github', level: 'advanced', color: '#8B8000' },
	{ skill: 'Node', level: 'beginner', color: '#CD7F32' },
];

function App() {
	return (
		<div className="card">
			<Avatar />
			<div className="data">
				<Intro />
				{<h1>H1</h1>}
				<SkillList />
			</div>
		</div>
	);
}

function Avatar() {
	return <img className="avatar" alt="Avatar" src="public/img.png" />;
}

function Intro() {
	return (
		<div>
			<h1>Andrew Sim</h1>
			<p>Front-End Developer</p>
		</div>
	);
}

function SkillList() {
	return (
		<div className="skill-list">
			{skills.map((skill, index) => (
				<Skill
					skill={skill.skill}
					color={skill.color}
					level={skill.level}
					key={index}
				/>
			))}
		</div>
	);
}

function Skill({ skill, color, level }) {
	return (
		<div className="skill" style={{ backgroundColor: color }}>
			<span>{skill}</span>
			<span>
				{level === 'beginner' && '👶'}
				{level === 'intermediate' && '👍'}
				{level === 'advanced' && '💪'}
			</span>
		</div>
	);
}

export default App;
