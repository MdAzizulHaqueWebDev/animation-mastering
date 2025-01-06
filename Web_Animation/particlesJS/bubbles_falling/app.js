/* -----------------------------------------------
/* How to use? : Check the GitHub README
/* ----------------------------------------------- */

/* To load a config file (particles.json) you need to host this demo (MAMP/WAMP/local)... */
/*
particlesJS.load('particles-js', 'particles.json', function() {
  console.log('particles.js loaded - callback');
});
*/

/* Otherwise just put the config content (json): */

particlesJS(
	"particles-container",

	{
		particles: {
			number: {
				value: 100,
				density: {
					enable: true,
					value_area: 800,
				},
			},
			color: {
				value:[ "#f00",'#0f0','ff0'],
			},
			shape: {
				type: ["stroke", "circle", "star", "polygon", "triangle", "rectangle"],
				stroke: {
					width: 0.2,
					color: "#000000",
				},
				polygon: {
					width: 0.2,
					color: "#0f0",
					nb_sides: 5,
				},
				image: {
					src: "img/github.svg",
					width: 100,
					height: 100,
				},
			},
			opacity: {
				value: 0.5,
				random: false,
				anim: {
					enable: true,
					speed: 1,
					opacity_min: 0.1,
					sync: false,
				},
			},
			size: {
				value: 30,
				random: true,
				anim: {
					enable: true,
					speed: 0,
					size_min: 0.1,
					sync: false,
				},
			},
			line_linked: {
				enable: false,
				distance: 150,
				color: "#ffffff",
				opacity: 0.4,
				width: 1,
			},
			move: {
				enable: true,
				speed: 2,
				direction: "top",
				random: false,
				straight: false,
				out_mode: "out",
				attract: {
					enable: true,
					rotateX: 600,
					rotateY: 1200,
				},
			},
		},
		interactivity: {
			detect_on: "canvas",
			events: {
				onhover: {
					enable: true,
					mode: "repulse",
				},
				onclick: {
					enable: true,
					mode: "grab",
				},
				resize: true,
			},
			modes: {
				grab: {
					distance: 400,
					line_linked: {
						enable: true,
						opacity: 1,
					},
				},
				bubble: {
					distance: 400,
					size: 0,
					duration: 2,
					opacity: 0,
					speed: 8,
				},
				repulse: {
					distance: 200,
				},
				push: {
					particles_nb: 4,
				},
				remove: {
					particles_nb: 2,
				},
			},
		},
		retina_detect: true,
		config_demo: {
			hide_card: false,
			background_color: "#b61924",
			background_image: "",
			background_position: "50% 50%",
			background_repeat: "no-repeat",
			background_size: "cover",
		},
	},
);
