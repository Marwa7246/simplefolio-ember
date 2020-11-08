const projects = [
	{
		name: 'COVID Dashboard',
		description: [
			`COVID Dashboard is a full stack responsive web application built with ReactJS as the front-end and ruby-on-rails as the back-end. The dashboard lets you view COVID-19 statistics and the related news for different countries across the world.

      Tech Stack: NodeJs, ReactJs, Ruby-on-Rails, Postgresql, Axios, HTML, SASS, Bootstrap.`
		],
		url: '#!',
		repo: 'https://github.com/Marwa7246/covid-dashboard',
		thumbnail: {
			image: 'assets/images/01_Dashboard.png',
			alt: 'COVID Dashboard'
		}
	},
	{
		name: 'Jungle',
		description: [
			`A mini e-commerce application built with Rails 4.2.

      The app sends a welcome email to the user upon signing-up. Also it sends an order receipt upon completing an order. The app is tested using rspec and capybara.
      Tech Stack: Ruby on rails, CSS, HTML, Rspec and Capybara `
		],
		url: '#!',
		repo: 'https://github.com/Marwa7246/jungle-rails',
		thumbnail: {
			image: 'assets/images/jungle.png',
			alt: 'Jungle'
		}
  },
  {
		name: 'Scheduler',
		description: [
			`React based project to create meetings for students to connect with mentors in real-time.

      Tech Stack: React, Classnames, Storybook, Babel, WebSockets, Axios, Webpack Dev Server, Jest, Testing Library, Cypress, prop-types.`
		],
		url: 'https://quizzical-heyrovsky-2b1ec0.netlify.app/',
		repo: 'https://github.com/Marwa7246/scheduler',
		thumbnail: {
			image: 'assets/images/scheuler_home.png',
			alt: 'Scheduler'
		}
  },
  {
		name: 'Tweeter',
		description: [
			`Tweeter is a simple, single-page Twitter clone, build using HTML, CSS, JS, jQuery and AJAX in the front-end, and Node, Express and MongoDB in the back-end.`
		],
		url: '',
		repo: 'https://github.com/Marwa7246/tweeter',
		thumbnail: {
			image: 'assets/images/tweeter.png',
			alt: 'tweeter'
		}
	},
];

const socials = [
	// {
	// 	name: 'camera-retro',
	// 	url: 'mailto:marwa.ragheb@gmail.com'
	// },
	{
		name: 'linkedin',
		url: 'https://www.linkedin.com/in/marwa-ragheb'
	},
	{
		name: 'github',
		url: 'https://github.com/Marwa7246'
	}
];

export { projects, socials };
