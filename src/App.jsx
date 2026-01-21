import Header from './components/Header';
import Hero from './components/Hero';
import SocialLinks from './components/SocialLinks';
import Education from './components/Education';
import Experience from './components/Experience';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-900 transition-colors duration-300">
      <Header />
      
      {/* Main Content */}
      <main>
        <Hero />
        <SocialLinks />
        <Education />
        <Experience />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}

export default App;
