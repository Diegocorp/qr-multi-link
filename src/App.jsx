import './App.css'

function App() {
  const links = [
    {
      id: 1,
      url: 'https://www.sciencedirect.com/science/article/abs/pii/S1876382021008027',
      title: 'Infección por Pseudomonas syringae Pathovar syringae revela diferentes mecanismos de defensa en dos cultivares de cereza dulce'
    },
    {
      id: 2,
      url: 'https://www.mdpi.com/2223-7747/13/12/1671',
      title: 'Tesoros Revelados de Solanáceas: Perspectivas Mecanísticas de Fitoquímicos con Potencial Terapéutico para Combatir Enfermedades Humanas'
    }
  ]

  const handleLinkClick = (url) => {
    window.open(url, '_blank', 'noopener,noreferrer')
  }

  return (
    <div className="app">
      <div className="container">
        <header className="header">
          <h1 className="title">Investigación en Microbiología</h1>
          <p className="subtitle">Selecciona un artículo de investigación para ver</p>
        </header>
        
        <div className="buttons-container">
          {links.map((link) => (
            <button
              key={link.id}
              className="link-button"
              onClick={() => handleLinkClick(link.url)}
            >
              <span className="button-icon">🔬</span>
              <span className="button-text">{link.title}</span>
              <span className="button-arrow">→</span>
            </button>
          ))}
        </div>
        
        <footer className="footer">
          <p>Escanea el código QR para acceder a los artículos de investigación</p>
        </footer>
      </div>
    </div>
  )
}

export default App

