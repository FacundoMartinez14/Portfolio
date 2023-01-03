import React, {useEffect, useState} from 'react';
import foto from '../../img/fotocv.jpg';
import './About.scss';
import curriculum from '../../img/CVdesign.pdf';
export default function About() {
	const [isVisible, setIsVisible] = useState(false);
	const listenToScroll = () => {
		const winScroll = document.body.scrollTop ||
		document.documentElement.scrollTop;
		
		if (winScroll > 500) { 
			 setIsVisible(true);
		} else {
			 setIsVisible(false);
		}
	  };
	  console.log(isVisible)
	useEffect(() => {
		window.addEventListener("scroll", listenToScroll);
		return () =>
		   window.removeEventListener("scroll", listenToScroll);
	  }, [])
	return (
		<div className="divContainerAbout bg-gray" id="About">
			<img className={`shadow-lg transition-all duration:500 ${isVisible ? "translate-x-0" : "-translate-x-96"} z-0`} src={foto} alt="Facundo Martinez" />

			<div>
				<h2 className="text-black">¿Quien soy?</h2>
				<p className="text-black">
					Soy un Full Stack Developer de Argentina, disfruto trabajando en el
					front-end, en el diseño y creacion de componentes, pero tambien
					disfruto mucho de la logica del back-end. Siempre me gustó la
					tecnología, aunque mis primeros años después de la secundaria se los
					dediqué a Ingenieria Civil, en esa institucion se dictaba otra carrera
					relacionada al mundo IT, por lo que al final me decidí a estudiar
					ésto. Actualmente, recién graduado, quiero desarrollar mi carrera en
					el mundo tech
				</p>
				<br />
				<p className="text-black">
					Una persona empática y estusiasta, me gustan los desafíos, cada nuevo
					desafío es una nueva chance para aprender algo nuevo. También me gusta
					brindar mis conocimientos a mis compañeros siempre que puedo.
				</p>
				<p className="text-black">
					En mi tiempo libre me puedes encontrar jugando videojuegos para
					distraerme o tambien viendo alguna pelicula, ya que me encanta el
					cine.
				</p>
				<p className="text-black">
					Éstas son algunas de las tecnologías con las que he estado trabajando
					ultimamente:
				</p>
				<ul className="text-black">
					<li>JavaScript (ES6)</li>
					<li>React.js</li>
					<li>Redux</li>
					<li>Node.js</li>
					<li>Express</li>
					<li>PostgreSQL</li>
				</ul>
				<a href={curriculum}>
					<button className="bg-darker-gray border text-black transition-all hover:bg-black hover:text-white active:bg-darker-gray">
						Mira mi curriculum!
					</button>
				</a>
			</div>
		</div>
	);
}
