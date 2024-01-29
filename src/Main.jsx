// main app
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Layout from './layout';
import Home from './Home';
import AboutMe from './AboutMe';
import ContactMe from './ContactMe';
import Free from './free'





function Main(){
   
    return(
        <>
       
        
        <BrowserRouter>
        <Layout>
        <Routes>
        
            <Route path='/' exact  element={<Free/>}/> 
            <Route path='/home'exact   element={<Home/>}/> 
            <Route path="/aboutme" exact element={<AboutMe/>}/>
            <Route path="/contact"exact  element={<ContactMe/>}/>
           
        </Routes> 
        </Layout>
        
        </BrowserRouter>
       
        </>

    )
}

export default Main;