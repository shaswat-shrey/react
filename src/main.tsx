import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Apping from './Apping.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Apping />
  </StrictMode>,
  
)
