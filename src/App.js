import "./styles.css";
import React from "react";
//Crea un directorio de contactos con dos inputs , uno de nombre y
//uno de numero de contacto, guardalo en un estado y crea otro
//componente donde se muestren nombre y numero y se actualice
//cada que añadas un nuevo contacto.
const initialState = {
  name: "",
  phone: null
};

export default function App() {
  const [input, setInput] = React.useState(initialState);
  const [records, setRecords] = React.useState([
    { name: "House Berraca", phone: "3342578232" },
    { name: "Tony Tralice", phone: "1111111" },
    { name: "Jabón", phone: "76777777" },
    { name: "javier gutierrez", phone: "9999999" }
  ]);
  // const [phones, setPhones] = React.useState([]);
  const handleInputChange = (evento) => {
    console.log("Input: " + JSON.stringify(input));
    // console.log(evento)
    setInput((prev) => ({
      ...prev,
      [evento.target.name]: evento.target.value
    }));
  };

  const onSubmit = (e) => {
    setRecords((prev) => {
      console.log("prev: " + JSON.stringify(prev));
      return [...prev, input];
    });
  };

  const Results = (input) => {
    const linea = input.records;
    console.log("Results: " + JSON.stringify(linea));
    console.log("Typeof: " + typeof linea + " - " + JSON.stringify(linea));
    if (typeof linea === undefined) {
      return <div> "no entries" </div>;
    } else {
      return (
        <div className="nes-text nes-container is-rounded is-dark">
          <h1>Contacts (and phone #): </h1>
          <ul>
            {linea.map((el) => (
              <Entry key={el.name} name={el.name} phone={el.phone} />
            ))}
          </ul>
        </div>
      );
    }
  };

  const Entry = (props) => {
    return (
      <div key={props.phone}>
        <li>
          {props.name} - ({props.phone})
        </li>
      </div>
    );
  };

  return (
    <>
      <div className="nes-text is-primary nes-container is-rounded is-dark ">
        <h1>Hello OneCarNow!</h1>
        <h2>Start editing to see some magic happen!</h2>
        <div className="nes-field is-inline">
          <label htmlFor="inline_field">Name: </label>
          <input
            onChange={handleInputChange}
            type="text"
            name="name"
            id="inline_field"
            className="nes-input is-dark"
          ></input>
        </div>
        <div className="nes-field is-inline">
          <label htmlFor="inline_field">Phone: </label>
          <input
            onChange={handleInputChange}
            type="text"
            name="phone"
            id="inline_field"
            className="nes-input is-dark"
          ></input>
          <button
            onClick={onSubmit}
            type="button"
            name="botonEnviar"
            className="nes-btn inline-field"
          >
            {" "}
            Add record!{" "}
          </button>
        </div>
      </div>
      <div>
        <Results records={records} />
      </div>
    </>
  );
}
