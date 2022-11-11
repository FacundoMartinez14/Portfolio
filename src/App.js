import './App.scss';
import Navbar from './components/Navbar/Navbar';
import About from './components/About/About';
import Projects from './components/Projects/Projects';
import Footer from './components/Footer/Footer';
import Landing from './components/Landing/Landing';
function App() {
	return (
		<div className="mainContainer">
			<Navbar />
			<Landing />
			<About />
			<Projects />
			<Footer />
		</div>
	);
}

export default App;
