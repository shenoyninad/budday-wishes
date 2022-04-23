import React, { useState, useEffect } from 'react';
import './App.css';
import useWindowSize from './hooks/useWindowSize';
import Confetti from 'react-confetti';
import image from './image-meenakshi.jpeg';

function BuddayWishesMainPage() {
  const name = "Meenu";
  const { width, height } = useWindowSize();
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    document.title = `Happy birthday ${name}!`
    // Update the count down every 1 second
    var x = setInterval(function () {

      var countDownDate = new Date("Apr 27, 2022 00:00:0").getTime();
      // Get today's date and time
      var now = new Date().getTime();

      // Find the distance between now and the count down date
      var distance = countDownDate - now;

      // Time calculations for days, hours, minutes and seconds
      var days = Math.floor(distance / (1000 * 60 * 60 * 24));
      var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      var seconds = Math.floor((distance % (1000 * 60)) / 1000);

      // Output the result in an element with id="demo"
      document.getElementById("countdown-timer")!.innerHTML = days + "d " + hours + "h "
        + minutes + "m " + seconds + "s ";

      // If the count down is over, write some text 
      if (distance < 0) {
        clearInterval(x);
        document.getElementById("countdown-timer")!.innerHTML = "Woohooo!"
        setVisible(false);
      }
    }, 1000);
  });

  const text = visible ? (
    <div className="countdown-div" >
      <h1 className="countdown-text" > Countdown to {name}'s budday</h1>
      <h1 className="countdown-timer" id="countdown-timer" > Wait for it </h1>
      <h3>#CSKColours</h3>
    </div>) :
    (<div className="wish-div">
      <Confetti
        width={width}
        height={height}
      />
      <h1 className="wish-text"> Happy budday {name}!</h1>
      <div className='image-div'>
        <img className='image-element' alt="birthday girl ugly" src={image} />
      </div>
      <h1>IT IS YOUR BIRTHDAY!!</h1>
      <h3>And, you haven't aged at all, congratulations!</h3>
      <h3>#forever21</h3>
    </div>)

  return (
    <div className="main-container" >
      {text}
    </div>
  );
}

export default BuddayWishesMainPage;
