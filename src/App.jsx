import React from 'react';
import './App.css';

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
			<Skill skill="HTML" color="#90EE90" />
			<Skill skill="CSS" color="#686A6C" />
			<Skill skill="JavaScript" color="#87CEEB" />
			<Skill skill="React" color="#FF8C00" />
			<Skill skill="Git and Github" color="#8B8000" />
			<Skill skill="Node" color="#CD7F32" />
		</div>
	);
}

function Skill(props) {
	return (
		<div className="skill" style={{ backgroundColor: props.color }}>
			<span>{props.skill}</span>
		</div>
	);
}

export default App;
