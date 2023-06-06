import './App.css'

import { MantineProvider } from '@mantine/core'

import { NavBar } from './components/navBar'
import { Header } from './components/header'
import { Main } from './components/main'
import { Form } from './components/form'
import { Footer } from './components/footer'

function App() {

  return (
    <MantineProvider withGlobalStyles withNormalizeCSS>
      <div className='app'>
        <NavBar />
        <Header />
        <Main />
        <Form />
        <Footer />
      </div>
    </MantineProvider >
  )
}

export default App
