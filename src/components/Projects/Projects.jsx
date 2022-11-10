import React from 'react';
import gameLoop from '../../img/Landing-game-loop.png';
import countries from '../../img/Home-countries-app.png';
export default function Projects() {
	return (
		<div>
			<h1>Algunos de mis trabajos</h1>
			<div>
				<img src={gameLoop} alt="Game Loop" />
				<ul>
					<li>React</li>
					<li>Redux</li>
					<li>Bootstrap</li>
					<li>Express</li>
				</ul>
				<p>
					Ésta app de venta de juegos en formato digital, ésta idea viene de
					facilitarle al usuario la compra de juegos sin necesidad de moverse de
					su casa y ademas de comprarlo en formato fisico, que es incluso, más
					caro.
				</p>
				<a href="https://github.com/DiFernando11/gamer-commerce">
					<img
						src="https://raw.githubusercontent.com/devicons/devicon/master/icons/github/github-original.svg"
						alt="GitHub"
						width="40"
						height="40"
					/>
				</a>
				<a href="https://gamer-commerce.vercel.app/">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 24 24"
						stroke-width="1.5"
						stroke="currentColor"
						class="w-6 h-6"
					>
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244"
						/>
					</svg>
				</a>
			</div>
			<div>
				<img src={countries} alt="Countries App" />
				<ul>
					<li>React</li>
					<li>Redux</li>
					<li>CSS puro</li>
					<li>Express</li>
				</ul>
				<p>
					Single-page application de videojuegos que incluía: búsquedas,
					filtrados, ordenamientos y creación. Desarrolle íntegramente esta
					aplicación tanto frontend como backend.
				</p>
				<a href="https://github.com/FacundoMartinez14/PI-Countries">
					<img
						src="https://raw.githubusercontent.com/devicons/devicon/master/icons/github/github-original.svg"
						alt="GitHub"
						width="40"
						height="40"
					/>
				</a>
				<a href="https://countriesapp-owkdmfn2r-facundomartinez14.vercel.app/">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 24 24"
						stroke-width="1.5"
						stroke="currentColor"
						class="w-6 h-6"
					>
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244"
						/>
					</svg>
				</a>
			</div>
			<div></div>
		</div>
	);
}
