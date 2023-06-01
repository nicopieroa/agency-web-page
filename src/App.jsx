import './App.css'
import { MantineProvider, Button } from '@mantine/core'

import { NavBar } from './components/navBar'

function App() {

  function Header() {

    return (
      <header className='header'>
        <h1>Salud Legal</h1>
        <h2>Lorem ipsum dolor sit amet consectetur adipisicing elit. In temporibus facilis ab qui
          asperiores provident</h2>
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
