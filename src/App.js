import logo from './logo.svg';
import './App.css';
import {useState} from 'react'

function App() {
 const [pageData, setPageData] = useState('')
 const [vulns, setVulns] = useState('')
  const getData = async () => {
    await fetch('http://localhost:3000',
    {
    }).then(res => res.text()).then(data => {
      console.log('this is our data', data)
      setPageData(data)
    })
    await fetch('http://localhost:3000/vulns').then(res => res.text()).then(data => {
      console.log('vulns', data.length)
      setVulns(data.length)
    })
  }
  getData();

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          {pageData}<br />{vulns}
        </a>
      </header>
    </div>
  );
}

export default App;
