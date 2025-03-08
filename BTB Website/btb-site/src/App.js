import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import About from './pages/About';
import StoreMenu from './pages/StoreMenu';
import Catering from './pages/Catering';
import CateringMenu from './pages/CateringMenu';
import Hours from './pages/HoursLocation';
import Main from './Main';
import Salads from './Components/Salads';
import AddOns from './Components/AddOns';
import Sandwiches from './Components/Sandwiches';
import Fritatas from './Components/Fritattas';
import Soups from './Components/Soups';
import Sweets from './Components/Sweets';
import Bowls from './Components/Bowls';

const menuLinks = [
  {which:'salads', element:<Salads/>}, 
  {which:'addons', element:<AddOns/>},
  {which:'fritatas', element:<Fritatas></Fritatas>},
  {which:'sweets', element:<Sweets></Sweets>}
  ]
const catMenuLinks = [{which:'salads', element:<Salads></Salads>}, 
  {which:'sandwiches', element:<Sandwiches></Sandwiches>},
  {which:'bowls', element:<Bowls></Bowls>},
  {which:'fritatas', element:<Fritatas></Fritatas>},
  {which:'soups', element:<Soups></Soups>},
  {which:'sweets', element:<Sweets></Sweets>} 
  ]

function App() {
  return (
      <Router>
        <Routes>
          <Route path="/" element={<Main/>}>
            <Route index element={<About />}/>
            <Route path="storeMenu" element={<StoreMenu/>}>
              <Route index element={<Salads/>}/>
              {menuLinks.map((menu)=><Route path={menu.which} element={menu.element}/>)}
            </Route>
            <Route path="catering" element={<Catering/>}/>
            <Route path="hours" element={<Hours/>}/>
            <Route path="cateringMenu" element={<CateringMenu/>}>
              <Route index element={<Salads></Salads>}/>
              {catMenuLinks.map((menu) => <Route path={menu.which} element={menu.element}/>)}
            </Route>
            <Route path="*" element={<div/>}/>
          </Route>
        </Routes>
      </Router>
  );
}

export default App;
