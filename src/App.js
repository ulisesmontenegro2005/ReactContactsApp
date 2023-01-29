import './App.css';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import { ContactsCustomContext } from './context/ContactsContext';
import { ContactDetails } from './components/ContactDetails';
import { Index } from './pages/index'
import { Nav } from './components/Nav';
import { Form } from './pages/Form';

function App() {
  return (
    <div className="App">
      <ContactsCustomContext>
        <BrowserRouter>

          <Nav/>

          <Routes>
            
            <Route path='/' element={<Index/>}/>

            <Route path='/:id' element={<ContactDetails/>}/>

            <Route path='/form' element={<Form/>}/>

          </Routes>

        </BrowserRouter>
      </ContactsCustomContext>
    </div>
  );
}

export default App;
