// App.jsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/navbar';
import CRMLeadManager from './components/Main/Response';
import Profile from './components/Dashboard/Profile';




function App() {
  return (
   
      <div>
       {/* <Navbar/> */}

       {/* <CRMLeadManager/> */}
       <Profile />
       
        
        <div className="container mx-auto p-4">
          <Routes>
            {/* <Route path="/app/index.html" element={<Profile />} /> */}
           
          </Routes>
        </div>
      </div>
   
  );
}

export default App;