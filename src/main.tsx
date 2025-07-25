import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { StyleProvider } from './components/style-context.tsx'
import FormWrapper from './components/form-wrapper.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <StyleProvider>
      <FormWrapper>
        <App />
      </FormWrapper>
    </StyleProvider>
  </StrictMode>,
)
