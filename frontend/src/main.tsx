import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { BrowserRouter as MainRouter} from 'react-router-dom';
import { store } from './features/store.ts'
import { Provider } from 'react-redux';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <MainRouter basename={'/LOGICA/'}>
      <Provider store={store}>
        <App />
      </Provider>
    </MainRouter>
  </React.StrictMode>,
)
