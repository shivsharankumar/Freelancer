import React from 'react';

import NavBar from './NavBar';
import MastHead from './MastHead';
import Portfolios from './Portfolio';
import About from'./About';
import Contact from './Contact';
import Footer from './Footer';
import Copyright from './Copyright';




const App =() =>{
    return(
        <div>
            <NavBar/>
            <MastHead/>
            <Portfolios/>
            <About/>
            <Contact/>
            <Footer/>
            <Copyright/>
        </div>
    )
};

export default App;

