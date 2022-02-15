import logo from './logo.svg';
import './App.css';
import {BrowserRouter,Route,Routes} from 'react-router-dom';

import Payment_page from './pages/Payment_page';

function App() {
  return (
  <>
    {/* <h1>home page(payment)</h1> */}
<BrowserRouter>
    <Routes>
      <Route exact path="/payment_page" element={<Payment_page/>} />

    </Routes>
    </BrowserRouter>
  </>
  );
}

export default App;
