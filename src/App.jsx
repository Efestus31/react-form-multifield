import { useState } from 'react'

import './App.css'


function App() {
  const [formData, setFormData] = useState({
    titolo: '',
    immagine: '',
    contenuto: '',
    categoria: '',
    tags: [],
    pubblicato: false
  })
  const [articoli, setArticoli] = useState([]);

  function handleTitle(e) {
    setFormData({ ...formData, titolo: e.target.value })
  }

  function handleSubmit(e) {
    e.preventDefault()
    console.log(formData.titolo);
    //reset of title after submit
    setFormData({ titolo: '' })
  }
  return (
    <>
      <header>
        <div className="container">
          <h1>React multiform</h1>
        </div>
      </header>
      <main>
        <div className="container">
          <div className="row">
            <form className="d-flex" onSubmit={handleSubmit} >
              <div className="col">
                <div className="input-group mb-3">
                  {/* Title */}
                  <label htmlFor="task" className="form-label">Titolo articolo </label>
                  <input
                    type="text"
                    id='titolo'
                    value={formData.titolo}
                    onChange={handleTitle}
                    className="form-control"
                    aria-describedby="Titolo:"
                  />
                  {/* image */}
                  <label htmlFor="task" className="form-label">Immagine articolo  </label>
                  <input type="file" className="form-control" id="immagineArticolo" />
                  {/* text area */}
                  <span className="input-group-text">Contenuto articolo:</span>
                  <textarea className="form-control" aria-label="Contenuto articolo"></textarea>
                  {/* select */}
                  <label className="input-group-text" for="inputGroupSelect01">Options</label>
                  <select className="form-select" id="inputGroupSelect01">
                    <option selected>Scegli la categoria:</option>
                    <option value="1">Tecnologia</option>
                    <option value="2">Lifestyle</option>
                    <option value="3">Educazione</option>
                    <option value="4">Cucina e Ricette</option>
                    <option value="5">Business e Finanza</option>
                    {/* checkbox */}
                    <input className="form-check-input mt-0" type="checkbox" value="Innovazione" aria-label="Innovazione" />
                    <input className="form-check-input mt-0" type="checkbox" value="Benessere" aria-label="Benessere" />
                    <input className="form-check-input mt-0" type="checkbox" value="Educazione" aria-label="Educazione" />
                    <input className="form-check-input mt-0" type="checkbox" value="RicetteFacili" aria-label="RicetteFacili" />
                    <input className="form-check-input mt-0" type="checkbox" value="Startup" aria-label="Startup" />
                    {/* publish */}
                    <input type="checkbox" className="form-check-input mt-0" id="pubblicato" />
                  </select>
                  {/* Submit */}
                  <button type="submit">Aggiungi Articolo</button>
                </div>
              </div>
            </form>

          </div>
        </div>
      </main>
    </>
  )
}

export default App
