import './styles/main.scss';
import Header from './components/Header';
import Introduction from './components/Introduction';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';

const App = () => {
  return (
    <>
      <Header/>
      <Introduction/>
      <Skills/>
      <Projects/>
      <Contact/>
    </>
  );
}

export default App;
