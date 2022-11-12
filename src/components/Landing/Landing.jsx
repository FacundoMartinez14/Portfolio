import React from 'react';
import './Landing.scss';
export default function Landing() {
	return (
		<div className="divContainerLanding">
			<div>
				<p>
					<span classNqame="text-green">Hola mundo!</span> Mi nombre es...
				</p>
				<h1 className="font-bold">Facundo Martinez</h1>
				<p className="text-black">
					...y soy Full Stack Developer, actualmente residiendo en Entre Rios,
					Argentina, siempre creando un proyecto nuevo. Te invito a
					contactarme...
				</p>
				<a href="mailto:facundo.ee2@gmail.com">
					<button className="bg-gray text-black transition-all hover:bg-black hover:text-white active:bg-darker-gray">
						Contactame!
					</button>
				</a>
			</div>
			<img
				src="https://user-images.githubusercontent.com/104529671/200447698-c4c42f8a-381d-4858-a39f-c6a7e424f66b.gif"
				alt="gif"
			/>
		</div>
	);
}
