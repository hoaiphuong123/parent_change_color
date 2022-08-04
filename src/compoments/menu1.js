import React from 'react';
import './menu.css';
import PropTypes from 'prop-types';

Menu1.propTypes = {
  onSetColor: PropTypes.func.isRequired,
  color: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
};

export default function Menu1({ color, label, onSetColor }) {
  return (
    <div className="Boxmenu1">
      <text>{label}</text>
      <form>
        <label>
          <select onChange={onSetColor}>
            <text>{color}</text>
            <option value="grey" style={{ color: 'grey' }}>
              grey
            </option>
            <option value="black" style={{ color: 'black' }}>
              black
            </option>
            <option value="blue" style={{ color: 'blue' }}>
              blue
            </option>
          </select>
        </label>
      </form>
    </div>
  );
}
