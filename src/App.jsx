import './App.css'
import { MantineProvider, Button } from '@mantine/core'

import { NavBar } from './components/navBar'

function App() {

  function Header() {

    return (
      <header className='header'>
        <h1>Salud Legal</h1>

        <div className='header-h2s-container'>
          <h2>Más 20 años de trayectoría</h2>
          <h2>Profesionalismo y capacidad de anticipación</h2>
          <h2>Servicio y gestión personalizada</h2>
        </div>

        <Button variant="outline" radius="md" size="xs" uppercase className='contactButton-outline'>
          Hablemos
        </Button>
        <div className='icons-container'>
          <img src="images/health.svg" alt="Cruz que representa la salud" />
          <img src="images/law.svg" alt="Martillo que representa el ámbito legal" />
          <img src="images/balance.svg" alt="Balanza que representa la justicia" />
        </div>
      </header>
    )
  }


  return (
    <MantineProvider withGlobalStyles withNormalizeCSS>
      <NavBar />
      <Header />
    </MantineProvider >
  )
}

export default App
