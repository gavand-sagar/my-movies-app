import { Route, Routes } from 'react-router-dom';
import './App.css';
import DetailsPage from './DetailsPage';
import ListPage from './ListPage';
import NotFoundPage from './NotFoundPage';

function App() {
  return (<>
    <Routes>
      <Route path='/' element={<ListPage />} />
      <Route path='/list' element={<ListPage />} />
      <Route path='/details/:id' element={<DetailsPage />} />
      <Route path='*' element={<NotFoundPage />} />
    </Routes>
  </>)
}

export default App;
