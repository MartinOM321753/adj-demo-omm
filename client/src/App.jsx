import TestController from "./modules/test/test.controller"
function App() {

  return (
    <>
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">ADJ DEMO</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
          aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">Home</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
     <div className="container mt-4">
        <h2>Inicio</h2>
        <hr></hr>
        <button className="btn btn-primary" onClick={()=>TestController.callApi()}>Llame a mi API</button>
     </div>
    </>
  )
}

export default App
