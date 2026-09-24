import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Nav from './componants/Nav'
import Banner from './componants/Banner'


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Nav />
    <Banner />
  </StrictMode>,
)
