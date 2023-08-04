import './App.css';
import RouteComp from './Handsonseven/RouteComp'
import {BrowserRouter} from "react-router-dom"
import LinkCompo from './Handsonseven/LinkCompo';
function App() {
  return (
    <>
    <BrowserRouter>
    <LinkCompo/>
   <RouteComp/>
   </BrowserRouter>
   </>
  );
}

export default App;
