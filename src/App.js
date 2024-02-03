import React, {useState} from 'react';

import Home from "./components/home";
import { BrowserRouter ,Route, Routes} from "react-router-dom";
import Teams from "../src/pages/teams";
import Events from "../src/pages/events";
import Details from '../src/pages/detailspage';

const App = () => {

  const [loading, setLoading] = useState(true);
  const preloader = document.getElementById("preload");
  if(preloader){
    setTimeout(() => {
      preloader.style.display = "none";
      setLoading(false);
    }, 2000);
  }

  return(
    !loading && (<div className='bg-site'>
      <BrowserRouter>
        <Routes>
          <Route index element={< Home/>}/>
          {/* <Route path='/events' element={< Events/>}/> */}
          <Route path='/teams' element={< Teams/>}/>
          <Route path='/events' element = {< Events/>}/>
          <Route path='/details' element = {< Details/>}/>
        </Routes>
      </BrowserRouter>
    </div>)
  );
};

export default App;
