import { useState } from 'react';
import './Main.css';
import img1 from './zarr1.png';
import img2 from './zarr2.svg';
import img3 from './zarr3.png';
import img4 from './dice4.svg';
import img5 from './zarr5.png';
import img6 from './zarr6.png';

const Main = () => {
  const [diceImage1, setDiceImage1] = useState(img1);
  const [diceImage2, setDiceImage2] = useState(img6);

  const changeDice1 = () => {
    const diceArr = [img1, img2, img3, img4, img5, img6];
    setDiceImage1(diceArr[Math.floor(Math.random() * diceArr.length)]);
  };

  const changeDice2 = () => {
    const diceArr = [img1, img2, img3, img4, img5, img6];
    setDiceImage2(diceArr[Math.floor(Math.random() * diceArr.length)]);
  };

  return (
    <div>
      <img src={diceImage1} alt="" onClick={changeDice1} className="img1"/>
      <img src={diceImage2} alt="" onClick={changeDice2} className="img2" />
    </div>
  );
};

export default Main;