import { useState } from 'react'
import './App.css'
import Header from './components/Header';
import Card from './components/Card';
import data from './data/data';

function App() {
  const cards =  data.map(item => {
    console.log(item.imageUrl)
    return(
      <Card
          displayImg = {item.imageUrl}
          countryName = {item.location}
          googleMapLink ={item.googleMapsUrl}
          location ={item.title}
          fromDate = {item.startDate}
          toDate ={item.endDate}
          information ={item.description}
        />
    )
    
  })

  console.log(cards)

  return (
    <div className="App">
        <Header />
        {cards}
    </div>
  )
}
 
export default App
