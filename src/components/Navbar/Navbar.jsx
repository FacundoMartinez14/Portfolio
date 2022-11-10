import React from 'react';

export default function Navbar() {
	return (
		<nav className="sticky top-0 flex items-center justify-between flex-wrap bg-gray-800 p-3 shadow-2xl">
			<div className="flex items-center flex-shrink-0 text-white mr-6"></div>
			<div className="block lg:hidden">
				<button className="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white"></button>
			</div>
			<div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
				<div className="text-sm lg:flex-grow">
					<a
						href="#Projects"
						className="block mt-4 lg:inline-block lg:mt-0 text-gray-300 hover:text-white mr-4"
					>
						Proyectos
					</a>
					<a
						href="#About"
						className="block mt-4 lg:inline-block lg:mt-0 text-gray-300 hover:text-white mr-4"
					>
						Acerca de mi...
					</a>
					<a
						href="#responsive-header"
						className="block mt-4 lg:inline-block lg:mt-0 text-gray-300 hover:text-white"
					>
						Contactame!
					</a>
				</div>
				<div>
					<a
						href="/porfolio"
						className="inline-block text-sm px-4 py-2 leading-none text-gray-300 border-white  hover:text-white  mt-4 lg:mt-0"
					>
						Facundo Martinez
					</a>
				</div>
			</div>
		</nav>
	);
}
