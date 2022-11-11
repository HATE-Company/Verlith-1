import logo from './logo.svg';
import './App.scss';

function App() {
  return (
    <div className="App">
     <section id='first'>
      <h1>First Section</h1>
      <a href='#second'>Navigate Second Seciton</a>
     </section>
     <section id='second'>
      <h1>Second Section</h1>
      <a href='#first'>Navigate First Seciton</a>

     </section>
    </div>
  );
}

export default App;
