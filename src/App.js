import React, { useState } from 'react';
import './App.css';
import './compoments/menu.css';
import DialogParent from './compoments/Dialog';
import { Menu1, Menu2 } from './compoments/menuMain';

function App() {
  const [color1, setColor1] = useState('grey');
  const [color2, setColor2] = useState('Pink');
  const [open, setOpen] = useState(false);
  const [send, setSend] = useState('');

  const handleSend = (e) => {
    setSend(e.target.value);
    console.log('handleSend', e.target.value);
  };

  const HandClickOpen = () => {
    setOpen(true);
  };

  const HandClickClose = () => {
    setOpen(false);
  };

  const handleChangeColor1 = (e) => {
    console.log('handleChangeColor1: ', e);
    setColor1(e.target.value);
  };

  const handleChangeColor2 = (e) => {
    setColor2(e.target.value);
  };

  const changeHandleMenu = (e) => {
    e.preventDefault();
    console.log({ color1 });
    console.log({ color2 });
  };

  return (
    <div className="Box">
      <div className="MenuBox" onChange={changeHandleMenu}>
        <button type="button" className="setting" onClick={HandClickOpen}>
          Show Setting
        </button>
        <DialogParent open={open} onClose={HandClickClose} onSend={handleSend} />
        <div className="lablesize">
          <label htmlFor="lable3">kích cỡ mà hình</label>
          <div className="boxlable"> </div>
        </div>

        <h3 className="parent">Parent</h3>
        <div className="Boxmenu">
          <div className="color1">
            <div className="rowlable1">
              <label htmlFor="lable1"> Màu của child 1</label>
            </div>
            <div className="square1">{color1}</div>
          </div>
        </div>
        <div className="Boxmenu">
          <div className="color2 Boxmenu">
            <div className="rowlable2">
              <label htmlFor="lable2">Màu của child 2</label>
            </div>
            <div className="square2">{color2}</div>
          </div>
        </div>
        <div className="Boxmenu">
          <Menu1 onSetColor={handleChangeColor1} color={color1} label={'Child 1'} />
          <Menu2 onSetColor1={handleChangeColor2} color1={color2} label2={'Child 2'} />
        </div>
      </div>
    </div>
  );
}
export default App;
