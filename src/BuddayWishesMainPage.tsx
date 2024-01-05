import React, { useState, useEffect } from "react";
import "./App.css";
import useWindowSize from "./hooks/useWindowSize";
import Confetti from "react-confetti";
import image from "./sky-picture.jpeg";

function BuddayWishesMainPage() {
  const name = "Arya";
  const { width, height } = useWindowSize();
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    document.title = `Happy birthday ${name}!`;
    // Update the count down every 1 second
    var x = setInterval(function () {
      var countDownDate = new Date("Jan 7, 2024 00:00:0").getTime();
      // Get today's date and time
      var now = new Date().getTime();

      // Find the distance between now and the count down date
      var distance = countDownDate - now;

      // Time calculations for days, hours, minutes and seconds
      var days = Math.floor(distance / (1000 * 60 * 60 * 24));
      var hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      var seconds = Math.floor((distance % (1000 * 60)) / 1000);

      // If the count down is over, write some text
      var countDownElement = document.getElementById(
        "countdown-timer"
      ) as HTMLHeadingElement;

      if (countDownElement != null) {
        if (distance < 0) {
          clearInterval(x);
          document.getElementById("countdown-timer")!.innerHTML = "Woohooo!";
          setVisible(false);
        } else {
          // Output the result in an element with id="demo"
          document.getElementById("countdown-timer")!.innerHTML =
            days + "d " + hours + "h " + minutes + "m " + seconds + "s ";
        }
      }
    }, 1000);
  });

  const text = visible ? (
    <div className="countdown-div">
      <Confetti width={width} height={height} />
      <h1 className="countdown-text"> Countdown to {name}'s birthday!</h1>
      <h1 className="countdown-timer" id="countdown-timer">
        {" "}
        Wait for it{" "}
      </h1>
    </div>
  ) : (
    <div className="wish-div">
      <Confetti width={width} height={height} />
      <h1 className="wish-text"> Happy birthday {name}!</h1>
      <p id="countdown-timer"></p>
      <h2>
        YOU JUST TURNED 18 <span className="ahem-sec">(ahem)</span> QUEEN!
      </h2>

      <div>
        <h3>
          THE Irrfan Khan is privileged to be sharing his birthday with YOU,
          Begum Rua Khanum!
        </h3>
        <h4>
          Now how about I order an amaaaaazing cheesecake to celebrate you
          getting older?
        </h4>
      </div>
    </div>
  );

  return <div className="main-container">{text}</div>;
}

export default BuddayWishesMainPage;
