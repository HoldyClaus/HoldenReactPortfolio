import React from 'react';
import Project from '../Project';

function Portfolio() {
	const projects = [
		{
			name: 'reSpot',
			description:
				'This website is a community-driven platform where people share and review their favorite Spotify playlists.',
			image: '',
			technologies: [
				'HTML/CSS',
				'JavaScript',
				'Node.js',
				'MongoDB & Mongoose',
				'Heroku',
				'React.js',
				'MERN Stack',
			],
			github: 'https://github.com/HoldyClaus/Re-Spot',
			deployed: 'https://respot-uta.herokuapp.com/',
		},
		{
			name: 'BetterReads',
			description:
				'Welcome to BetterReads, the ultimate tool for avid readers! BetterReads is a user-friendly platform that allows you to keep track of the books you have read and those you want to read in the future.',
			image: '',
			technologies: [
				'HTML/CSS',
				'JavaScript',
				'Node.js',
				'Handlebars.js',
				'Express & Sequelize',
				'Heroku',
			],
			github: 'https://github.com/HoldyClaus/books-app',
			deployed: 'https://better-reads10.herokuapp.com/',
		},
		{
			name: 'Regex Review',
			description:
				'In this assignment I will be going over the Regular Expression of Email: /^([a-z0-9_.-]+)@([\da-z.-]+).([a-z.]{2,6})$/',
			image: '',
			technologies: [
                'Github gist'
			],
			github: 'https://github.com/HoldyClaus/RegexReview',
			deployed: 'https://github.com/HoldyClaus/RegexReview/blob/main/gist-template.md',
		},
		{
			name: 'Weather Dashboard',
			description:
				'A weather dashboard that shows current weather and five-day weather forecast for any city.',
			image: '',
			technologies: ['HTML/CSS', 'JavaScript'],
			github: 'https://github.com/HoldyClaus/Challenge6',
			deployed: 'https://holdyclaus.github.io/Challenge6/',
		},
		{
			name: 'Password Generator',
			description:
				'This is an application that allows you to generate a password from 8 to 128 characters based on criteria you select.',
			image: '',
			technologies: ['HTML/CSS', 'JavaScript'],
			github: 'https://github.com/HoldyClaus/Challenge-3',
			deployed: 'https://holdyclaus.github.io/Challenge-3/',
		},
		{
			name: 'Coffee Shop',
			description:
				'This application is a C++ application that is a generated coffee shop',
			image: '',
			technologies: ['C++'],
			github: 'https://github.com/HoldyClaus/Assignment-4-Coffee-Shop',
			
		},
	];

	return (
		<section>
			<div className="center">
				<h1 className="page-header">My Portfolio</h1>
			</div>
			<div>
				<ul className="flex-row mobile-row">
					<li className="padding">
						<Project projects={projects[0]}></Project>
					</li>
					<li className="padding">
						<Project projects={projects[1]}></Project>
					</li>
				</ul>
				<ul className="flex-row mobile-row">
					<li className="padding">
						<Project projects={projects[2]}></Project>
					</li>
					<li className="padding">
						<Project projects={projects[3]}></Project>
					</li>
				</ul>
				<ul className="flex-row mobile-row">
					<li className="padding">
						<Project projects={projects[4]}></Project>
					</li>
				</ul>
			</div>
		</section>
	);
}

export default Portfolio;