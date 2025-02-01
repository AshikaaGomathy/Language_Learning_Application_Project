import React from "react";
import "./App.css";

const App: React.FC = () => {
  return (
    <div className="container">
      <header className="header">
        <div className="logo">LINGOHUB</div>
        <button className="login">Login</button>
      </header>

      <section className="hero">
        <div className="image">IMAGE</div>
        <div className="desc">DESC</div>
      </section>

      <button className="get-started">Get Started</button>

      <nav className="language-nav">
        <button>English</button>
        <button>Korean</button>
        <button>German</button>
        <button>Spanish</button>
        <button>Italian</button>
        <button>Japanese</button>
      </nav>

      <section className="hero">
        <div className="desc">DESC</div>
        <div className="image">IMAGE</div>
      </section>

      <section className="hero">
        <div className="image">IMAGE</div>
        <div className="desc">DESC</div>
      </section>

      <section className="premium">
        <p>Free Trial</p>
        <p>Premium</p>
      </section>

      <section className="hero">
        <div className="desc">DESC</div>
        <div className="image">IMAGE</div>
      </section>

      <section className="phrase-box">
        <p>PHRASE</p>
      </section>

      <button className="get-started">Get Started</button>

      <footer className="footer">Footer</footer>
    </div>
  );
};

export default App;
