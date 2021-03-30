import './App.css';
import { Hero } from './components/Hero';
import { Navigation } from './components/Navigation';
import { Producto } from './components/Producto';
import { Productos } from './components/Productos';

function App() {
  return (
    <div className="App">
      <Navigation />
      <Hero />
      <Productos />
      <Producto />
    </div>
  );
}

export default App;
