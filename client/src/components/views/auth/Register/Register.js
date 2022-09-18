import React, { useState, useEffect } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";


import "../Auth.styles.css";
import logocompleto from '../../../../img/logocompleto.png'
import { swal2 } from "../../../../utils/swal2.jsx";


const { REACT_APP_API_ENDPOINT } = process.env

export const Register = () => {
  const [data, setData] = useState();
  const navigate = useNavigate();

  useEffect(() => {
    fetch('http://localhost:4000/api/result')
    .then((response) => response.json())
    .then((data) => {
      
      setData(data)}
    );
}, [setData]);

  const initialValues = {
    userName: "",
    password: "",
    email: "",
    teamID:"",
    role: "",
    continent:"",
    region:""
      };

  const required = "*Campo obligatorio";

  const validationSchema = () =>
    Yup.object().shape({
      userName: Yup.string()
        .min(4, "La cantidad mínima de caracteres es 4")
        .required(required),
      password: Yup.string().required(required),
      email: Yup.string().email("Debe ser un email válido").required(required),
      role: Yup.string().required(required),
            
    });


  const handleSubmit = (e) => {
  e.preventDefault()

    const user = e.currentTarget.value.userName

    console.log(user)
    console.log()
    const teamID = '5bd56f8d-7bd1-438c-ab5c-e4313d899033'

    fetch(`${REACT_APP_API_ENDPOINT}auth/register`, {
       method: "POST",
       headers: {
      "Content-Type": "application/json",
    },
        body: JSON.stringify({
        user: {
          userName: values.userName,
          password: values.password,
          email: values.email,
          teamID,
          role: values.role,
          continent:'America',
          region: "Otro"
           },
      }),
    })
      .then((response) => {
        response.json()
        
      
      })
      .then((data) =>{
        
          swal2()
          navigate("/login", { replace: true });
         
      })
      .catch(error=>console.log(error));
  }

  const formik = useFormik({ initialValues, validationSchema});

  const {
    handleChange,
    errors,
    touched,
    handleBlur,
    values,
    } = formik;

  return (
    <div className="auth">
       <img className='logo_completo flip-vertical-fwd' src={logocompleto} alt='logo'></img>
      <form onSubmit={handleSubmit}>
        <h1 style={{textAlign: 'center'}}>Registro</h1>
        <div>
          <label>¿Cuál es tu nombre?</label>
          <select
            name="userName"
            onChange={handleChange}
            value={values.userName}
            className={errors.userName && touched.userName ? "error" : ""}
            onBlur={handleBlur}
          >
            <option value="">Selecciona tu nombre...</option>
            {data?.userName?.map((option) => (
              <option value={option} key={option}>
                {option}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label>Contraseña</label>
          <input
            type="password"
            name="password"
            onChange={handleChange}
            value={values.password}
            className={errors.password && touched.password ? "error" : ""}
            onBlur={handleBlur}
          />
          {errors.password && touched.password && (
            <span className="error-message">{errors.password}</span>
          )}
        </div>
        <div>
          <label>Email</label>
          <input
            type="email"
            name="email"
            onChange={handleChange}
            value={values.email}
            className={errors.email && touched.email ? "error" : ""}
            onBlur={handleBlur}
          />
          {errors.email && touched.email && (
            <span className="error-message">{errors.email}</span>
          )}
        </div>
        
        <div>
          <label>Rol</label>
          <select
            name="role"
            onChange={handleChange}
            value={values.role}
            className={errors.role && touched.role ? "error" : ""}
            onBlur={handleBlur}
          >
            <option value="">Seleccionar rol...</option>
            {data?.role?.map((option) => (
              <option value={option} key={option}>
                {option}
              </option>
            ))}
          </select>
          {errors.role && touched.role && (
            <span className="error-message">{errors.role}</span>
          )}
        </div>
        
        <div>
          <button type="submit">Enviar</button>
        </div>
        <div className='wrapperList'>
            <h5 style={{textAlign: 'center', margin:'20px 0 10px 0 ', padding: '0'}}>¿Ya estás registrado?</h5>
            <Link to="/login">Inicia sesión</Link>
          </div>
      </form>
    </div>
  );
};
