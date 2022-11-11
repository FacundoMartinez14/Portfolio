import React from 'react';
import './Landing.scss'
export default function Landing() {
	return (
		<div className="divContainerLanding">
			<div>
				<p><span className='text-green'>Hola mundo!</span> Mi nombre es...</p>
				<h1>Facundo Martinez</h1>
				<p>
					...y soy Full Stack Developer, actualmente residiendo en Entre Rios,
					Argentina, siempre creando un proyecto nuevo. Te invito a
					contactarme...
				</p>
				<button>Contactame!</button>
			</div>
			<img
				src="https://user-images.githubusercontent.com/104529671/200447698-c4c42f8a-381d-4858-a39f-c6a7e424f66b.gif"
				alt="gif"
			/>
		</div>
	);
}
