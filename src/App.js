import React, { useEffect, useState } from "react";
import "./App.css";

const App = () => {
  const [results, setResults] = useState("");

  useEffect(() => {
    getResults();
  }, []);

  const getResults = async () => {
    const response = await fetch(`https://covid19-api.com/country/all`);
    const data = await response.json();
    setResults(data.hits);
    console.log(data.hits);
  };

  return (
    <div className="App">
      <h1>COVID19</h1>
    </div>
  );
};

export default App;
