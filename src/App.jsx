// import './App.css'
import { Route, Routes } from 'react-router-dom'
import Layout from './components/Layout'
import Resources from './components/Resources'

function App() {
  return (
        //Layout komponentet for å beholde felles UI-struktur. 
        <Layout>
            <Routes>
                {/*Routing til de ulike sidene. Sender med prop som category, denne tas i mot i Resources.jsx.*/ }
                <Route path='/html' element={<Resources category="html" />} />
                <Route path='/css' element={<Resources category="css" />} />
                <Route path='/javascript' element={<Resources category="javascript" />} />
                <Route path='/react' element={<Resources category="react" />} />
                <Route path='/headless-cms' element={<Resources category="headless-cms" />} />
            </Routes>
        </Layout>
    )
}

export default App
