import React from 'react';
import './App.css';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Resume from './pages/Resume/Resume';
import Contact from './pages/Contact/Contact';
import {jsPDF} from 'jspdf';
import html2canvas from 'html2canvas';

function App() {
  // const printDoc = () => {
  //   const input: any = document.getElementById("divToPrint");
  //   html2canvas(input).then((canvas) => {
  //     const imgData = canvas.toDataURL("image/png");
  //     const pdf: any = new jsPDF();
  //     pdf.addImage(imgData, "JPEG", 0, 0);
  //     pdf.save("download.pdf");
  //     // console.log('done');
  //   });
  // };
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/about" exact component={About} />
        <Route path="/resume" exact component={Resume} />
        <Route path="/contact" exact component={Contact} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
