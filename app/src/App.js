import "./App.scss";

function App() {
  return (
    <div className="App">
      <section id="first">
        <div className="header">
          <div className="header__logo">Amazing Logo Wow</div>
          <div className="header__menu">
            <div />
          </div>
        </div>

        <div className="background">
          <img alt="" src={require("./assets/jesus1.png")} />
        </div>
      </section>
    </div>
  );
}

export default App;
