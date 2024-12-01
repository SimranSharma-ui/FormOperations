import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AllUsers from './Componants/AllUsers';
import GetOneUser from './Componants/GetOneUser';
import Form from './Componants/Form';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AllUsers />} />
        <Route path="/user/:id" element={<GetOneUser />} /> {/* Add this route for user details */}
        <Route path="/form" element={<Form />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
