import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Staff from './components/Staff';
import Pricing from './components/Pricing';
import FeedBack from './components/Feedback';
import Newsletter from './components/Newsletter';
import Footer from './components/Footer';
import Services from './components/Services';  
// import './App.css';

function App() {

  const servicesList = [ // này là example data nên để đại ở app.jsx.
    { id: 1, name: "Haircut", price: "$30", description: "Professional haircut for all hair types" },
    { id: 2, name: "Hair Coloring", price: "$80", description: "Full hair coloring service" },
    { id: 3, name: "Highlights", price: "$100", description: "Partial or full highlights" },
    { id: 4, name: "Blowout", price: "$40", description: "Professional blow dry and style" },
    { id: 5, name: "Keratin Treatment", price: "$150", description: "Smoothing keratin treatment" },
    { id: 6, name: "Hair Extension", price: "$200", description: "Professional hair extension service" },
    { id: 7, name: "Perm", price: "$120", description: "Permanent wave treatment" },
    { id: 8, name: "Deep Conditioning", price: "$50", description: "Intensive hair conditioning treatment" },
  ];

  return (
    <div className="App">
      <Header />
      <main>
        <Hero />
        <Services servicesList={servicesList} /> {/*  phần này còn lỏ lắm nên chỉ code đại đại phần này thui =)) */}
        <Staff />
        <Pricing />
        <FeedBack />
        <Newsletter />
      </main>
      <Footer />
    </div>
  );
}
export default App;