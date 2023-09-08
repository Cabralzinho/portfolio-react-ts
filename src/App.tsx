import './App.css'
import { NavbarDesktop } from './components/Navbars/components/NavbarDesktop'
import { NavbarMobile } from './components/Navbars/components/NavbarMobile'
import { Sections } from './components/Sections'

function App() {
  return (
    <>
      <NavbarDesktop />
      <NavbarMobile />
      <Sections.Start />
      <Sections.AboutMe />
      <Sections.Project />
      <Sections.Services />
      <Sections.Knowledges />
    </>
  )
}

export default App
