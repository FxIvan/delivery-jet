import React from "react";

export const validarDatos = (values) => {
    if(values.nombre.length < 3){
        alert("Nombre invalido")
        return false
     }
     if(values.telefono.length < 8){
         alert("Numero de telefono invalido")
         return false
     }

     // si pasa todo quiere decir que cumplio con los parametros del formulario

     return true //entonces hacemos un return true
};
