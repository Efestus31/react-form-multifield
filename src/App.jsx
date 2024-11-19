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
  //handle title imput
  function handleTitle(e) {
    setFormData({ ...formData, titolo: e.target.value })
  }
  //handle content imput
  function handleContent(e) {
    setFormData({ ...formData, contenuto: e.target.value })

  }
  //handle form imput
  function handleCategory(e) {
    setFormData({ ...formData, categoria: e.target.value })
  }

  //handle tags
  function handleTags(e) {
    const { value, checked } = e.target
    setFormData((prevData) => {
      const newTags = checked
        ? [...prevData.tags, value]
        : prevData.tags.filter((tag) => tag !== value)
      return { ...prevData, tags: newTags }
    })
  }

  //handle form submit
  function handleSubmit(e) {
    e.preventDefault()
    console.log(formData);
    //reset of title after submit
    setFormData({ titolo: '', contenuto: '', categoria: '', tags: [] })
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
                  <label htmlFor="contenuto" className='form-label'>Contenuto articolo:</label>
                  <textarea
                    id='contenuto'
                    value={formData.contenuto}
                    onChange={handleContent}
                    className="form-control"
                    aria-label="Contenuto articolo"
                  />

                  {/* select */}
                  <label className="input-group-text" for="inputGroupSelect01">Options</label>
                  <select
                    id='categoria'
                    value={formData.categoria}
                    onChange={handleCategory}
                    className="form-select"
                  >
                    <option selected>Scegli la categoria:</option>
                    <option value="1">Tecnologia</option>
                    <option value="2">Lifestyle</option>
                    <option value="3">Educazione</option>
                    <option value="4">Cucina e Ricette</option>
                    <option value="5">Business e Finanza</option>

                    {/* checkbox */}
                    <label htmlFor="tags">Tags:</label>
                    <label>
                      <input
                        className="form-check-input mt-0"
                        type="checkbox"
                        value="Innovazione"
                        checked={formData.tags.includes('Innovazione')}
                        onChange={handleTags}
                        aria-label="Innovazione"
                      /> Innovazione
                    </label>
                    <label>
                      <input
                        className="form-check-input mt-0"
                        type="checkbox"
                        value="Innovazione"
                        checked={formData.tags.includes('Benessere')}
                        onChange={handleTags}
                        aria-label="Benessere"
                      /> Benessere
                    </label>
                    <label>
                      <input
                        className="form-check-input mt-0"
                        type="checkbox"
                        value="Innovazione"
                        checked={formData.tags.includes('Educazione')}
                        onChange={handleTags}
                        aria-label="Educazione"
                      /> Educazione
                    </label>
                    <label>
                      <input
                        className="form-check-input mt-0"
                        type="checkbox"
                        value="Innovazione"
                        checked={formData.tags.includes('RicetteFacili')}
                        onChange={handleTags}
                        aria-label="RicetteFacili"
                      /> RicetteFacili
                    </label>
                    <label>
                      <input
                        className="form-check-input mt-0"
                        type="checkbox"
                        value="Innovazione"
                        checked={formData.tags.includes('Startup')}
                        onChange={handleTags}
                        aria-label="Startup"
                      /> Startup
                    </label>
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
