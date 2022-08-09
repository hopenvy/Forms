import { useState, useEffect } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import Form from './components/Form';
import * as formService from './services/formService';
import uniqid from 'uniqid';

import './App.css';

import { useFormInputValidation } from "react-form-input-validation";


function App() {

  const [forms, setForms] = useState([]);

  const navigate = useNavigate();

  const formhandler = (formData) => {
    setForms(state => [
      ...state,
      {
        ...formData,
        _id: uniqid(),
      },
    ]);
    navigate('/');
    console.log(forms)
  };
  const [form] = useFormInputValidation()

  useEffect(() => {
    if (form.isValidForm) {
      formService.getAll()
        .then(result => {
          setForms(result);
        })
    }

  }, [form.isValidForm]);



  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Form formhandler={formhandler} />} />
      </Routes>

    </div >


  );
}

export default App;
