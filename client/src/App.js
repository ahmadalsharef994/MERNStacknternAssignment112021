import './App.css';
import Footer from './components/Footer';
import Announcement from './components/Announcement';
import Navbar from './components/Navbar';
import Newsletter from './components/Newsletter';
import University from './components/University';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Announcement/>
      <University/>
      <Newsletter/>
      <Footer/>
    </div>
  );
}

export default App;
