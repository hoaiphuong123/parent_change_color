import React, { useState } from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import './menu.css';
import PropTypes from 'prop-types';

Menu1.propTypes = {
  onSetColor: PropTypes.func.isRequired,
  color: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
};

export default function Menu1({ color, label, onSetColor }) {
  const [ColorMenu1, setColorMenu1] = useState('');
  const handleColorMenu1 = (e) => {
    setColorMenu1(e.target.value);
  };
  const changeHandleName = (e) => {
    e.preventDefault();
    console.log({ ColorMenu1 });
  };
  return (
    <div className="Boxmenu1">
      <text>{label}</text>
      <Dropdown onSubmit={changeHandleName}>
        <Dropdown.Toggle variant="success" id="dropdown-basic">
          {color}
        </Dropdown.Toggle>
        <Dropdown.Menu>
          <Dropdown.Item className=" list" style={{ color: 'grey' }} onChange={onSetColor}>
            <text>grey</text>
          </Dropdown.Item>
          <Dropdown.Item className="list" style={{ color: 'Red' }} onChange={onSetColor}>
            <text>Red</text>
          </Dropdown.Item>
          <Dropdown.Item className="list" style={{ color: 'Yellow' }} onChange={onSetColor}>
            <text>Yellow</text>
          </Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </div>
  );
}
