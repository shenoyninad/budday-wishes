import React, { useState, useEffect } from 'react';
import './App.css';
import useWindowSize from './hooks/useWindowSize';
import Confetti from 'react-confetti';

function BuddayWishesMainPage() {
  const name = "Ninad";
  const { width, height } = useWindowSize();
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    document.title = `Happy birthday ${name}!`
    // Update the count down every 1 second
    var x = setInterval(function () {

      var countDownDate = new Date("Jul 14, 2022 00:00:0").getTime();
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
      <h4>Wishing myself, because nobody else will</h4>
      <h1 className="countdown-timer" id="countdown-timer" > Wait for it </h1>
    </div>) :
    (<div className="wish-div">
      <Confetti
        width={width}
        height={height}
      />
      <h1 className="wish-text"> Happy budday {name}!</h1>
      <h1>IT IS MY BIRTHDAY!!</h1>
    </div>)

  return (
    <div className="main-container" >
      {text}
    </div>
  );
}

export default BuddayWishesMainPage;
