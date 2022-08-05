import React from 'react';
import './menu.css';
import PropTypes from 'prop-types';

Menu1.propTypes = {
  onSetColor: PropTypes.func.isRequired,
  color: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
};
Menu2.propTypes = {
  onSetColor1: PropTypes.func.isRequired,
  color1: PropTypes.string.isRequired,
  label1: PropTypes.string.isRequired,
};

function Menu2({ onSetColor1, color1, label1 }) {
  return (
    <div className="Boxmenu2">
      <text> {label1}</text>
      <form>
        <label>
          <select onChange={onSetColor1}>
            <text>{color1}</text>
            <option value="Pink" style={{ color: 'Pink' }}>
              Pink
            </option>
            <option value="Orange" style={{ color: 'Orange' }}>
              Orange
            </option>
            <option value="Yellow" style={{ color: 'Yellow' }}>
              Yellow
            </option>
          </select>
        </label>
      </form>
    </div>
  );
}
function Menu1({ color, label, onSetColor }) {
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
export { Menu1, Menu2 };
