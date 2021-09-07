import React from "react";

import StateProvider from "./StateProvider";
import Header from "./Header";
import Container from "./Container";

function App() {
  return (
    <StateProvider>
      <div className="App">
        <Header />
        <Container />
      </div>
    </StateProvider>
  );
}

export default App;
