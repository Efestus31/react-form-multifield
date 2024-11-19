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
            <form class="d-flex">
              <div class="col">
                <div class="input-group mb-3">
                  {/* Title */}
                  <span class="input-group-text" id="basic-addon1">Titolo:</span>
                  <label htmlFor="task" class="form-label">Titolo articolo </label>
                  <input type="text" class="form-control" id="titolo" aria-describedby="Titolo:" />
                  {/* image */}
                  <label htmlFor="task" class="form-label">Immagine articolo  </label>
                  <input type="file" class="form-control" id="immagineArticolo" />
                  {/* text area */}
                  <span class="input-group-text">Contenuto articolo:</span>
                  <textarea class="form-control" aria-label="Contenuto articolo"></textarea>
                  {/* select */}
                  <label class="input-group-text" for="inputGroupSelect01">Options</label>
                  <select class="form-select" id="inputGroupSelect01">
                    <option selected>Scegli la categoria:</option>
                    <option value="1">Tecnologia</option>
                    <option value="2">Lifestyle</option>
                    <option value="3">Educazione</option>
                    <option value="4">Cucina e Ricette</option>
                    <option value="5">Business e Finanza</option>
                  </select>
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
