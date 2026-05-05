import ReactDOM from 'react-dom/client'
import {StrictMode} from 'react'
import App from './App.jsx'
import './index.css'
import { LanguageProvider } from './hooks/useLanguage.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <StrictMode>
    <LanguageProvider>
      <App />
    </LanguageProvider>
  </StrictMode>,
)
