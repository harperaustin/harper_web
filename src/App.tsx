import React from "react";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Harper Austin</h1>
      </header>

      <div className="content">
        <section id="about" className="section">
          <h3>About Me</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
            lacinia nisi vitae odio tempus, at dapibus felis gravida.
          </p>
          <p>
            More details about me... Lorem ipsum dolor sit amet, consectetur
            adipiscing elit. Vivamus lacinia nisi vitae odio tempus.
          </p>
        </section>

        <section id="projects" className="section">
          <h3>Projects</h3>
          <p>Get Productive: </p>
        </section>
      </div>
    </div>
  );
}

export default App;
