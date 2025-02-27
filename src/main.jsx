import { createRoot } from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router'
import Home from './pages/Home/Home.jsx'
import Auth from './pages/Auth/Auth.jsx'
import RegisterComp from './components/Register/RegisterComp.jsx'
import Config from './pages/Config/Config.jsx'
import { Provider } from './context/Provider.jsx'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
      <Provider>
      <App/>
        <Routes>
          <Route path='/dashboard'>
            <Route index element={<Home/>}></Route>
          </Route>

          <Route path='/'>
            <Route index element={<Auth/>}></Route>
          </Route>

          <Route path='/register'>
            <Route index element={<RegisterComp/>}></Route>
          </Route>

          <Route path='/config'>
            <Route index element={<Config/>}></Route>
          </Route>
        </Routes>
      </Provider>
  </BrowserRouter>,
)
