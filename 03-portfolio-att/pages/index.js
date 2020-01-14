import React, {Component} from 'react'
import Typed from 'react-typed';

class Home extends Component {
	constructor(props) {
		super(props);

		this.roles = ['Developer', 'Tech Lover', 'Team Player', 'Course Creater', 'React.js', 'Angular'];
	}

	render(){
		return(
			<div id="wrap_home">
				<div className="bg">
					<img src="/static/images/background-index.png" />
				</div>
				<div className="indent">
					<div className="col col1">
						<div className="bloco">
							<img src="/static/images/section-1.png" />
							<div className="texto">
								<h1 class="bold">Full Stack Web Developer</h1>
								<span>Have a look at my portfolio and jov history.</span>
							</div>
						</div>
					</div>

					<div className="col col2">
						<div className="texto">
							<h2>WELCOME TO THE PORTFOLIO WEBSITE OF FILIP JERGA.
								GET INFORMED, COLLABORATE AND DISCOVER PROJECTS
								I WAS WORKING ON THROUGH THE YEARS!</h2>
						</div>
						<div className="texto typed">
							<Typed
								loop
								typeSpeed={60}
								backSpeed={60}
								strings={this.roles}
								backDelay={1000}
								loopCount={0}
								showCursor
								className="self-typed"
								cursorChar="|"
							/>
						</div>
						<div className="texto">
							<h2 className="light">Let's take a look on my work</h2>
						</div>
					</div>
				</div>
			</div>
		)
	}

};

export default Home
