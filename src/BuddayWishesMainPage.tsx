import React, { useState, useEffect } from 'react';
import './App.css';
import useWindowSize from './hooks/useWindowSize';
import Confetti from 'react-confetti';
import image from './sky-picture.jpeg';

function BuddayWishesMainPage() {
  const name = 'Anna';
  const { width, height } = useWindowSize();
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    document.title = `Happy birthday ${name}!`;
    // Update the count down every 1 second
    var x = setInterval(function () {
      var countDownDate = new Date('Nov 5, 2022 00:00:0').getTime();
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
        'countdown-timer'
      ) as HTMLHeadingElement;

      if (countDownElement != null) {
        if (distance < 0) {
          clearInterval(x);
          document.getElementById('countdown-timer')!.innerHTML = 'Woohooo!';
          setVisible(false);
        } else {
          // Output the result in an element with id="demo"
          document.getElementById('countdown-timer')!.innerHTML =
            days + 'd ' + hours + 'h ' + minutes + 'm ' + seconds + 's ';
        }
      }
    }, 1000);
  });

  const text = visible ? (
    <div className='countdown-div'>
      <Confetti
        width={width}
        height={height}
      />
      <h1 className='countdown-text'> Countdown to {name}'s birthday!</h1>
      <h1
        className='countdown-timer'
        id='countdown-timer'
      >
        {' '}
        Wait for it{' '}
      </h1>
    </div>
  ) : (
    <div className='wish-div'>
      <Confetti
        width={width}
        height={height}
      />
      <h1 className='wish-text'> Happy birthday {name}!</h1>
      <p id='countdown-timer'></p>
      <h1>
        YOU JUST TURNED 18 <span className='ahem-sec'>(ahem)</span> QUEEN!
      </h1>

      <div className='text-content'>
        <h3>
          Virat Kohli, Bryan Adams, Kris Jenner, these people are privileged to
          be sharing their birthdays with YOU!
        </h3>

        <h3>
          You know how we discussed about my year turning out bad, and you asked
          me if no good things happened to me?
        </h3>
        <h3>
          Well, meeting you and getting to know you is certainly at the top of
          the good things that has happened to me this year.
        </h3>
        <h3>
          And as a thank you, I'd like to offer you an experience of a lifetime,
          one last time before you leave Manipal, here are your options, you get
          to choose one.
          <ol>
            <li>
              I know a temple, that is on top of a very scenic hill, we go there
              early in the morning to watch the sunrise. To top it off, we can
              sit on the top and drink tea/coffee and watch the lush greenary
              come to life. Don't worry we don't have to trek.
            </li>
            <li>
              We go to the beach in the evening, eat cheesy pizzas and sip wine,
              watching the sky transition through multiple color when the sun
              goes down, as the fishing boats come back with their catch.
            </li>
            <li>Do both of these on the same day!</li>
          </ol>
        </h3>
        <h3>
          I'll promise to fulfill any option you choose, that is my birthday
          gift to you.
        </h3>
        <h5>Here is a pretty sky picture with PINK flowers, from my garden.</h5>
      </div>

      <img
        className='image-div'
        src={image}
      />
      <br />
      <div className='rick-roll-div'>
        <a
          className='rick-roll'
          href='https://www.youtube.com/watch?v=BBJa32lCaaY'
          target='_blank'
        >
          Don't click this! Trust me
        </a>
      </div>
    </div>
  );

  return <div className='main-container'>{text}</div>;
}

export default BuddayWishesMainPage;
