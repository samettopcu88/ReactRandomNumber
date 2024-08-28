import { useState } from 'react' // useState fonksiyonunu import ettik
import './App.css'

function App() {

    const [min, setMin] = useState() // min ve setMin değişkenlerini tanımladık
    const [max, setMax] = useState() // max ve setMax değişkenlerini tanımladık
    const [random, setRandom] = useState() // random ve setRandom değişkenlerini tanımladık]

    const changeMin = (e) => {
        setMin(Number(e.target.value))
    }

    const changeMax = (e) => {
        setMax(Number(e.target.value))
    }

    const generateRandom = () => {
        setRandom(Math.floor(Math.random() * (max - min + 1)) + min)
    }

  return (

      <div className="app">
          <h1>Random Number</h1>
          <div className="container">
              <p>Random Number: {random}</p>
              <input
                  type="number"
                  placeholder="Enter a min number"
                  onChange={changeMin} // min değerini güncelle
              />
              <input
                  type="number"
                  placeholder="Enter a max number"
                  onChange={changeMax} // max değerini güncelle
              />
              <button onClick={generateRandom}>Give a random number</button>
          </div>
      </div>
  )
}

export default App
