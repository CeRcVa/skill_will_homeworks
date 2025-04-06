import React from "react";
import "./App.css";
import profilePic from "./profile.jpg";

function App() {
  return (
    <div className="portfolio">
      <header>
        <img src={profilePic} alt="Profile" className="profile-pic" />
        <h1>მოგესალმებით ჩემს პორტფოლიოში</h1>
        <p>მე ვარ დამწყები ვებ-დეველოპერი</p>
        <ul>
          უნარები: <br></br>
          1)Python <br></br>
          2)Django <br></br>
          3)HTML/CSS/Javascript <br></br>
          4)React(soon)
        </ul>
      </header>
    </div>
  );
}

export default App;
