// import 'bootstrap/dist/css/bootstrap.min.css';  
import './App.css';
import Bloglist from './Components/Layouts/Bloglist';
import Footer from './Components/Layouts/Footer';
import HeaderComp from './Components/Layouts/HeaderComp';
import Hero from './Components/Layouts/Hero';
// import Layout from './Components/Layouts/Layout';
function App() {
  return (
    <>
     <HeaderComp/>
     <Hero/>
     <Bloglist/>
     
     <Footer/>

    
    </>
  );
}

export default App;
