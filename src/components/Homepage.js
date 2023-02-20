import React from 'react'
import food from 'D:/Little-lemon/src/assets/food.jpg'

function Homepage() {
  return (
    <>

        <section className='intro'>
            <div className='intro-text'>
                    <h2 className='text-name'>Little Lemon</h2>
                    <h3 className='text-loc'>Chicago</h3>
                    <p className='text-desc'>Based in Chicago, Illinois, Little Lemon is a family-owned Mediterranean restaurant, focused on traditional recipes served with a modern twist. The chefs draw inspiration from Italian, Greek, and Turkish culture and have a menu of 12 to 15 items that they rotate seasonally. The restaurant has a rustic and relaxed atmosphere with moderate prices, making it a popular place for a meal any time of the day.</p>
                    <button className='tablebtn'> Reserve a Table</button>
            </div>
            <div className='intro-image'>
                    <img
                    src={food}
                    alt="Food"
                    width="300px"
                    height="350px"
                    />
            </div>

        </section>
    </>
  )
}

export default Homepage