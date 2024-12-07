
 import{BrowserRouter as Router, Routes , Route}from 'react-router-dom';
 import Home from './pages/Home';
 import Login from './pages/Login';

 const App = () => {
   return (
   <div>
      
    <Router> 
     <Routes>
 <Route path="/"element={<Home/>}/>
 <Route path="/Login" element={<Login/>}/>


   </Routes>
</Router>
    </div> 
  );
 };

export default App


