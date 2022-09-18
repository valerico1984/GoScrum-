import React, {useState, useEffect} from "react";
import { useFormik } from "formik";
import { useNavigate, Link } from "react-router-dom";
import * as Yup from "yup";

import { swal } from "../../../../utils/swal";
import axios from 'axios';

import "../Auth.styles.css";

import avengers from '../../../../img/avengers.png'

const { REACT_APP_API_ENDPOINT: API_ENDPOINT } = process.env;



export const Login = () => {
  const navigate = useNavigate();
  
  const [data, setData] = useState();

  const initialValues = {
    userName: "",
    password: "",
  }

  useEffect(() => {
    axios.get('http://localhost:4000/api/result')
        .then((result) => {
          const resultData=result.data
        setData(resultData)}
        );
  }, [setData]);


  const required = "* Campo obligatorio";

  const validationSchema = () =>
    Yup.object().shape({
      userName: Yup.string()
        .min(4, "La cantidad mínima de caracteres es 4")
        .required(required),
      password: Yup.string().required(required),
    });

  const onSubmit = () => {
    
    const { userName, password } = values;

    fetch(`${API_ENDPOINT}auth/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        userName,
        password,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.status_code === 200) {
          localStorage.setItem("token", data?.result?.token);
          localStorage.setItem("userName", data?.result?.user.userName);
          navigate("/", { replace: true });
        } else {
          swal();
        }
      });
  };

  const formik = useFormik({ initialValues, validationSchema, onSubmit });

  const { handleSubmit, handleChange, errors, touched, handleBlur, values } =
    formik;

  return (
    <div className='wrapperLogin'>
        <img className='equipo scale-up-center' src={avengers} alt='logo'></img> 
       <div className="auth">
      
        <form onSubmit={handleSubmit}>
          <h1> ¡Bienvenid@, Avenger!</h1>
          <div>
            <label>¿Quién eres?</label>
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
              onBlur={handleBlur}
              className={errors.password && touched.password ? "error" : ""}
            />
            {errors.password && touched.password && (
              <div>{errors.password}</div>
            )}
          </div>
          <div>
            <button type="submit">Enviar</button>
            
          </div>
          <div className='wrapperList'>
            <h5 style={{textAlign: 'center', margin:'20px 0 10px 0 ', padding: '0'}}>'¿Aún no configuraste tu cuenta?</h5>
            <Link to="/register">Registrate</Link>
          </div>
        </form>
      </div>
    </div>
  );
};
