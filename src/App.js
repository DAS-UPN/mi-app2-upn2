import React, { useReducer, useState } from 'react';
import './App.css';

const formReducer = (state, event) => {
 return {
   ...state,
   [event.name]: event.value
 }
}

function App() {
  const [formData, setFormData] = useReducer(formReducer, {});
  const [formData2, setFormData2] = useReducer(formReducer, {});

  const [formDataRUC, setFormDataRUC] = useReducer(formReducer, {});
  const [formDataNC, setFormDataNC] = useReducer(formReducer, {});
  const [formDataTC, setFormDataTC] = useReducer(formReducer, {});

  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = event => {
    event.preventDefault();
    setSubmitting(true);

    setTimeout(() => {
      setSubmitting(false);
    }, 20000);
  }

  const handleChange = event => {
    setFormData({
      name: event.target.name,
      value: event.target.value,
    });
  }

  const handleChange2 = event => {
    setFormData2({
      name: event.target.name,
      value: event.target.value,
    });
  }

  const handleChangeRUC = event => {
    setFormDataRUC({
      name: event.target.name,
      value: event.target.value,
    });
  }

  const handleChangeNC = event => {
    setFormDataNC({
      name: event.target.name,
      value: event.target.value,
    });
  }

  const handleChangeTC = event => {
    setFormDataTC({
      name: event.target.name,
      value: event.target.value,
    });
  }

  return(
    <div className="estilo">
      <h1>Registro de Proveedor</h1>
      {submitting &&
       <div>
         Información de proveedor registrada:
         <ul>
           {Object.entries(formData).map(([name, value]) => (
             <li key={name}><strong>Razón Social</strong>: {value.toString()}</li>
           ))}
         </ul>
         <ul>
           {Object.entries(formData2).map(([name, value]) => (
             <li key={name}><strong>Nombre comercial</strong>: {value.toString()}</li>
           ))}
         </ul>

         <ul>
           {Object.entries(formDataRUC).map(([name, value]) => (
             <li key={name}><strong>RUC</strong>: {value.toString()}</li>
           ))}
         </ul>

         <ul>
           {Object.entries(formDataNC).map(([name, value]) => (
             <li key={name}><strong>Nombre de contacto</strong>: {value.toString()}</li>
           ))}
         </ul>

         <ul>
           {Object.entries(formDataTC).map(([name, value]) => (
             <li key={name}><strong>Teléfono / celular</strong>: {value.toString()}</li>
           ))}
         </ul>
       </div>
      }
      <form onSubmit={handleSubmit}>
        <fieldset>
          <label>
            <p>Razón Social</p>
            <input name="name" onChange={handleChange}/>
          </label>
          <label>
            <p>Nombre comercial</p>
            <input name="ape" onChange={handleChange2}/>
          </label>
          <label>
            <p>RUC</p>
            <input name="ruc" onChange={handleChangeRUC}/>
          </label>

          <label>
            <p>Nombre de contacto</p>
            <input name="nc" onChange={handleChangeNC}/>
          </label>

          <label>
            <p>Teléfono / celular</p>
            <input name="tc" onChange={handleChangeTC}/>
          </label>
        </fieldset>
        <button type="submit">Registrar</button>
      </form>
    </div>
  )
}



export default App;