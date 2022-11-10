import './App.css';
import Navbar from './components/Navbar/Navbar';
import About from './components/About/About';
import Projects from './components/Projects/Projects';
import Footer from './components/Footer/Footer';
function App() {
	return (
		<div className="mainContainer">
			<Navbar />
			<About />
			<Projects />
			<Footer />
		</div>
	);
}

export default App;
