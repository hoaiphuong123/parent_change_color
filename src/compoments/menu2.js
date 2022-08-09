import React from 'react';
import './menu.css';
import PropTypes from 'prop-types';

Menu2.propTypes = {
  onSetColor1: PropTypes.func.isRequired,
  color1: PropTypes.string.isRequired,
  label1: PropTypes.string.isRequired,
};

export default function Menupa({ onSetColor1, color1, label1 }) {
  return (
    <div className="Boxmenu2">
      <text> {label1}</text>
      <form>
        <label>
          <select onChange={onSetColor1}>
            {color1}
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
