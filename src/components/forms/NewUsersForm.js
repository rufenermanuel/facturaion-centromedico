import React, { useState } from "react";

const NewUsersForm = (props) => {
  const [userData, setUserData] = useState({
    Name: "",
    LastName: "",
    Dni: "",
    email: "",
    Cellphone: "",
    Phone: "",
    Rol: "",
    Terapias: "",
    ObraSocial: "",
    NumeroAfiliado: "",
    Cud: "",
  });

  return (
    <div>
      <h1 id="finish">Registre Nuevo Usuario</h1>
      <form>
        <div>
          <p>Nombre/es</p>
          <input
            type="text"
            placeholder="Nombre"
            className="form"
            name="Name"
            id="input-Id"
          ></input>
        </div>
        <div>
          <p>Apellido/os</p>
          <input
            type="text"
            placeholder="Apellido/os"
            className="form"
            name="LastName"
            id="input-Id"
          ></input>
        </div>
        <div>
          <p>DNI</p>
          <input
            type="Number"
            placeholder="DNI"
            className="form"
            name="Dni"
            id="input-Id"
          ></input>
        </div>
        <div>
          <p>Email</p>
          <input
            type="email"
            placeholder="email"
            className="form"
            name="Email"
            id="input-Id"
          ></input>
        </div>
        <div>
          <p>Celular</p>
          <input
            type="Number"
            placeholder="cellphone"
            className="form"
            name="Cellphone"
            id="input-Id"
          ></input>
        </div>
        <div>
          <p>Teléfono</p>
          <input
            type="Number"
            placeholder="phone"
            className="form"
            name="Phone"
            id="input-Id"
          ></input>
        </div>
        <div>
          <p>Rol</p>
          <select name="Rol" id="input-Id">
            <option value="">Selecciona un rol</option>
            <option value="1">Paciente</option>
            <option value="2">Profesional Prestador</option>
            <option value="3">Administrativo</option>
          </select>
        </div>
        <div>
          <p>Terapias</p>
          <p>En el caso de necesitar marcar más de una manten presionada la tecla CTRL</p>

          <select name="Terapias" id="input-Id" multiple>
            <option value="1">Terapia 1</option>
            <option value="2">Terapia 2</option>
            <option value="3">Terapia 3</option>
          </select>
         
        </div>
        <div>
          <p>Obra Social</p>
          <select name="ObraSocial" id="input-Id">
            <option value="">Selecciona una Obra Social</option>
            <option value="1">Option 1</option>
            <option value="2">Option 2</option>
            <option value="3">Option 3</option>
          </select>
        </div>
        <div>
          <p>Número Afiliado</p>
          <input
            type="Number"
            placeholder="Numero Afiliado"
            className="form"
            name="NumeroAfiliado"
            id="input-Id"
          ></input>
        </div>
        <div>
          <p>Número CUD</p>
          <input
            type="Number"
            placeholder="Numero Certificado único discapacidad"
            className="form"
            name="Cud"
            id="input-Id"
          ></input>
        </div>
      </form>
      <div>
        <button>Agregar</button>
      </div>
    </div>
  );
};

export default NewUsersForm;
