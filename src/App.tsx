// App.jsx
import React from 'react';
import Header from "./components/molecules/Header";
import Footer from "./components/molecules/Footer";

const App: React.FC = () => {
  return (
    <div className="flex flex-col h-screen justify-between">
      <div>
        <Header />
        <Footer />
      </div>
    </div>
  );
};

export default App;
