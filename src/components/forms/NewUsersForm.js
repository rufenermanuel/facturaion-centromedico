import React, {  useState } from "react";
const NewUsersForm = (props) => {
/*   const [userData, setUserData] = useState({
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
 */
  const [displayProfesional, setDisplayProfesional] = useState('none');
  const [displayPaciente, setDisplayPaciente] = useState('none');
  const [displayAdministrativo, setDisplayAdministrativo] = useState('none')

  const handleSelectChangeRoles = (event) => {
console.log(event.target.value)
    if (event.target.value === 'profesional') {
      setDisplayProfesional('block');
      setDisplayPaciente('none');
      setDisplayAdministrativo('none')
    } else if (event.target.value === 'paciente') {
      console.log('entré a paciente')
      setDisplayPaciente('block');
      setDisplayProfesional('none');
      setDisplayAdministrativo('none')
    } else {
      setDisplayAdministrativo('block')
      setDisplayPaciente('none');
      setDisplayProfesional('none');
    }
    
  }

  return (
    <div>
      <h1 id="finish">Registre Nuevo Usuario</h1>
      <form>
        <div id="containerDataBase">
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
            <select name="Rol" id="input-Id" onChange={handleSelectChangeRoles}>
              <option value="">Selecciona un rol</option>
              <option value="paciente">Paciente</option>
              <option value="profesional">Profesional</option>
              <option value="administrativo">Administrativo</option>
            </select>
          </div>
        </div>
        <div id="containerProfesional" style={{ display: displayProfesional }}>
          <div>
            <p>Especialidad</p>
            <select name="Especialidad" id="input-Id">
              <option value="">Elija una especialidad</option>
              <option value="Fonoaudiología">Fonoaudiología</option>
              <option value="Psicopedagogía">Psicopedagogía</option>
              <option value="Psicomotricidad">Psicomotricidad</option>
            </select>
            <p>Terapias ofrecidas</p>
            <p>
              En el caso de necesitar marcar más de una manten presionada la
              tecla CTRL
            </p>

            <select name="Terapias" id="input-Id" multiple>
              <option value="1">Terapia 1</option>
              <option value="2">Terapia 2</option>
              <option value="3">Terapia 3</option>
            </select>
          </div>
        </div>
        <div id="containerPaciente" style={{ display: displayPaciente }}>
          <div>
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

              <p>Terapias</p>
              <p>
                En el caso de necesitar marcar más de una manten presionada la
                tecla CTRL
              </p>

              <select name="Terapias" id="input-Id" multiple>
                <option value="1">Terapia 1</option>
                <option value="2">Terapia 2</option>
                <option value="3">Terapia 3</option>
              </select>
            </div>
          </div>
        </div>
        <div id="containerAdminstrativo" style={{ display: displayAdministrativo }}></div>

      </form>

      <div>
        <button>Agregar</button>
      </div>
    </div>
  );
};

export default NewUsersForm;
