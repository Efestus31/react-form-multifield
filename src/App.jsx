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

  //handle image
  function handleImage(e) {
    setFormData({ ...formData, immagine: e.target.files[0] });
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

  //handle publish
  function handlePublish(e) {
    setFormData({ ...formData, pubblicato: e.target.checked })
  }

  //handle form submit
  function handleSubmit(e) {
    e.preventDefault()
    console.log(formData);
    setArticoli([...articoli, formData]);
    //reset of title after submit
    setFormData({ titolo: '', immagine: '', contenuto: '', categoria: '', tags: [], pubblicato: false })
  }


  return (
    <>
      <header className="bg-primary text-white py-4">
        <div className="container text-center">
          <h1>React multiform</h1>
        </div>
      </header>
      <main>
        <div className="container mt-4">

          <form className="row g-3" onSubmit={handleSubmit} >

            <div className="col-12">
              {/* Title */}
              <label htmlFor="task" className="form-label">Titolo articolo </label>
              <input
                type="text"
                id='titolo'
                value={formData.titolo}
                onChange={handleTitle}
                className="form-control"
                placeholder="Inserisci il titolo dell'articolo"
              />
            </div>

            <div className="col-12">
              {/* image */}

              <label htmlFor="task" className="form-label">Immagine articolo  </label>
              <input
                type="file"
                className="form-control"
                id="immagineArticolo"
                onChange={handleImage}
                accept="image/*"
              />
            </div>

            {/* text area */}
            <div className="col-12">

              <label htmlFor="contenuto" className='form-label'>Contenuto articolo:</label>
              <textarea
                id='contenuto'
                value={formData.contenuto}
                onChange={handleContent}
                className="form-control"
                placeholder="Scrivi il contenuto dell'articolo"
                rows="5"
              />
            </div>

            <div className="col-12">
              {/* select */}
              <label className="input-group-text" htmlFor="inputGroupCategory">Categorie</label>
              <select
                id='categoria'
                value={formData.categoria}
                onChange={handleCategory}
                className="form-select"
              >
                <option value="">Scegli la categoria:</option>
                <option value="1">Tecnologia</option>
                <option value="2">Lifestyle</option>
                <option value="3">Educazione</option>
                <option value="4">Cucina e Ricette</option>
                <option value="5">Business e Finanza</option>
              </select>
            </div>
            <div className="col-12">
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
                  value="Benessere"
                  checked={formData.tags.includes('Benessere')}
                  onChange={handleTags}
                  aria-label="Benessere"
                /> Benessere
              </label>
              <label>
                <input
                  className="form-check-input mt-0"
                  type="checkbox"
                  value="Educazione"
                  checked={formData.tags.includes('Educazione')}
                  onChange={handleTags}
                  aria-label="Educazione"
                /> Educazione
              </label>
              <label>
                <input
                  className="form-check-input mt-0"
                  type="checkbox"
                  value="RicetteFacili"
                  checked={formData.tags.includes('RicetteFacili')}
                  onChange={handleTags}
                  aria-label="RicetteFacili"
                /> RicetteFacili
              </label>
              <label>
                <input
                  className="form-check-input mt-0"
                  type="checkbox"
                  value="Startup"
                  checked={formData.tags.includes('Startup')}
                  onChange={handleTags}
                  aria-label="Startup"
                /> Startup
              </label>
            </div>

            <div className="input-group mb-3">
              {/* publish */}
              <input
                type="checkbox"
                checked={formData.pubblicato}
                onChange={handlePublish}
                className="form-check-input mt-0"
                id="pubblicato" />
              Pubblicato
            </div>

            {/* Submit */}
            <button type="submit">Aggiungi Articolo</button>
          </form>

          <div className="mt-5">
            <h2>Articoli Inseriti:</h2>
            <ul className="list-group">
              {articoli.map((articolo, index) => (
                <li key={index} className="list-group-item">
                  <h3>{articolo.titolo}</h3>
                  <img src={articolo.immagine} alt="" />
                  <p>{articolo.contenuto}</p>
                  <p><strong>Categoria:</strong> {articolo.categoria}</p>
                  <p><strong>Tags:</strong> {articolo.tags.join(', ')}</p>
                  <p><strong>Pubblicato:</strong> {articolo.pubblicato ? 'Sì' : 'No'}</p>
                </li>
              ))}
            </ul>
          </div>

        </div >
      </main >
    </>
  )
}

export default App
