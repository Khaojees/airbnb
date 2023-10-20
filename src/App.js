import './App.css';
import Menu from './components/Menu';
import Place from './components/Place';
import MyFooter from './components/MyFooter';
import MyData from './data/MyData'; 
import IconData from './data/IconData';


function App() {
  return (
    <div>
      <Menu/>
      <Place/>
      <MyFooter/> 
    </div>
  );
}

export default App;
