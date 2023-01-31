import { BaseColaboradores } from "./Data";
import { useState } from "react";
function App() {
  const [listaColaboradores, setListaColaboradores] = useState(BaseColaboradores);
  const [nombreColaborador, setNombreColaborador] = useState('');
  const [correoColaborador, setCorreoColaborador] = useState('');
  const [contadorID, setContadorID] = useState(4);
  const [buscadorInfo, setBuscadorInfo] = useState('');
  
  const handleSubmit = (e) => {
    e.preventDefault();
    setListaColaboradores([...listaColaboradores, {
      id: contadorID,
      nombre: nombreColaborador,
      correo: correoColaborador
    }]);
    setContadorID(contadorID+1);
    setNombreColaborador('');
    setCorreoColaborador('');
  };
  return (
    <>
      <section className="bg-dark text-light p-1 d-flex justify-content-between">
        <h2 className="m-5">Buscador de Colaboradores</h2>
        <input name="buscadorColaboradores" className=" w-25 text-center me-5 rounded col-xs-2" type="text" placeholder="Buscar un colaborador" onChange={(e) => setBuscadorInfo(e.target.value)} value={buscadorInfo} />
      </section>
      <form className="m-5" onSubmit={handleSubmit}>
          <div className="form-group">
              <label>Nombre del colaborador</label>
              <input name="nombreColaborador" type="text" className="form-control" placeholder="Ingresa el nombre del colaborador" onChange={(e) => setNombreColaborador(e.target.value)} value={nombreColaborador}/>      
          </div>
          <div className="form-group">
              <label>Correo del colaborador</label>
              <input name="correoColaborador" type="text" className="form-control" placeholder="Ingresa el correo del colaborador" onChange={(e) => setCorreoColaborador(e.target.value)} value={correoColaborador}/>
          </div>
          <div className='mt-2'>
          <button type="submit" className="btn btn-warning">
            Agregar colaborador
          </button>
          </div>
      </form>
      <hr className="mx-5"></hr>
      <div className="mx-5 my-3">
        <h1>Listado de colaboradores</h1>
        <ul className="list-group">
          {listaColaboradores.map(colaborador => {
            if (buscadorInfo === "" || colaborador.nombre.toLowerCase().includes(buscadorInfo.toLowerCase()) || colaborador.correo.toLowerCase().includes(buscadorInfo.toLowerCase())){
              return <li className="mt-2 list-group-item list-group-item-warning" key={colaborador.id}>{colaborador.nombre} - {colaborador.correo}</li>
            }
          })}
        </ul>
      </div>
    </>
  );
}

export default App;
