import './App.css';
import { GlobalProvider } from './components/Globalcontext/Globalcontext';
import Index from './components/Index';
import { Routes, Route } from 'react-router-dom'
import Dashboard from './components/Dashboard/Dashboard';
import Releaseproject from './components/ReleaseProject/Releaseproject';
function App() {
  return (
    <GlobalProvider>
      <div className="App">
        <Routes>
          <Route path='/' element={<Index />} >
            <Route path='' element={ <Dashboard/>} />
            <Route path='Dashboard' element={ <Dashboard/>} />
            <Route path='ReleaseProject' element={<Releaseproject/>} />
          </Route>
        </Routes>
      </div>
    </GlobalProvider>
  );
}

export default App;
