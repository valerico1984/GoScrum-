import Swal from "sweetalert2"

export const swal2 = () =>
   Swal.fire(
     {
          title: "Registro exitoso",
          text: "Ingrese con su nombre y contraseña",
          confirmButtonText: "Aceptar",
          width: "400px",
          timer: 10000,
          timerProgressBar: true,
     })