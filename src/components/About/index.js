import React from 'react';

function About() {
	return (
		<section>
			<div className="center" id="about">
				<h1 className="page-header">About Me</h1>
			</div>
			<div className="center">
				<img
					src= ""
					alt="about-me"
					className="photo"
				/>
			</div>
			<div>
				<p>
              Hello my name is Holden Claus Senior Studying Computer Science at UHD.
              Full-time student completing BS degree Computer Science. Key Courses/Themes: Web Programming, Data Structure/Algorithms , Programming Languages, Computing/Operating/Database Systems, Hardware, Game Dev & AI
              Some of my hobbies include Gaming, Rock Climbing, Shooting, Fishing
				</p>
				<p>
					I applied aspects of UX and agile development in a
					recent project. I worked on a team of five to{' '}
					<a
						href="https://github.com/Nick-McCarthy/Re-Spot"
						target="_blank"
					>
						develop
					</a>{' '}
					a{' '}
					<a
						href="https://respot-uta.herokuapp.com/"
						target="_blank"
					>
						single-page MERN app
					</a>{' '}
					This website is a community-driven platform where people share and review their favorite Spotify playlists. 
                    Users can search for playlists based on specific users and leave ratings and comments to share their thoughts with the community. 
                    The website will also features a leaderboard of the most reviewed playlists and a section for featured curators. 
                    Overall, it's a great place to discover new music and connect with other music lovers.
				</p>
			</div>
		</section>
	);
}

export default About;