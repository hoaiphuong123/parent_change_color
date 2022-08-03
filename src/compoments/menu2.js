import React, { useState } from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import './menu.css';
import PropTypes from 'prop-types';

Menu2.propTypes = {
  onSetColor1: PropTypes.func.isRequired,
  color1: PropTypes.string.isRequired,
  label1: PropTypes.string.isRequired,
};

export default function Menu2({ onSetColor1, color1, label1 }) {
  const [ColorMenu2, setColorMenu2] = useState('');
  const handleColorMenu2 = (e) => {
    setColorMenu2(e.target.value);
  };
  const changeHandleName2 = (e) => {
    e.preventDefault();
    console.log({ ColorMenu2 });
  };
  return (
    <div className="Boxmenu2">
      <text> {label1}</text>
      <Dropdown onSubmit={changeHandleName2}>
        <Dropdown.Toggle variant="success" id="dropdown-basic">
          {color1}
        </Dropdown.Toggle>
        <Dropdown.Menu>
          <Dropdown.Item className="list" style={{ color: 'Pink' }} onChange={onSetColor1}>
            <text>Pink</text>
          </Dropdown.Item>
          <Dropdown.Item className="list" style={{ color: 'Orange' }} onChange={onSetColor1}>
            <text>Orange</text>
          </Dropdown.Item>
          <Dropdown.Item className="list" style={{ color: 'Black' }} onChange={onSetColor1}>
            <text>Black</text>
          </Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </div>
  );
}
