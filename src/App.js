import React from 'react';
import Landingpage from './Pages/Home';
import Homepage from './Pages/Homepage';
import About from './Pages/About';
import Tutorials from './Pages/Tutorials';
import Contact from './Pages/Contact';
import Bookings from './Pages/Bookings';



import {BrowserRouter,Routes,Route} from 'react-router-dom'


function App() {
   
   return(
     <BrowserRouter>
     <div>





  
</div>


<Routes>
 <Route path='/'   element={<Landingpage/>}></Route>
 <Route  path='Homepage'   element={<Homepage/>}> </Route>
 <Route  path='About'   element={<About/>}> </Route>
 <Route  path='Contact'   element={<Contact/>}> </Route>
 <Route  path='Tutorials'   element={<Tutorials/>}> </Route>
 <Route  path='Bookings'   element={<Bookings/>}> </Route>

 
</Routes>
     
     
     
     </BrowserRouter>



   )
  
 
  
   
 
}

export default App ;
