import React from 'react';
import './menu.css';
import PropTypes from 'prop-types';

Menu.propTypes = {
  onSetColor: PropTypes.func.isRequired,
  color: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  colorOptions: PropTypes.array,
};
export default function Menu({ color, label, onSetColor, colorOptions }) {
  return (
    <div className="Boxmenu1" style={{ backgroundColor: color }}>
      {label}
      <form>
        <label>
          <select onChange={onSetColor}>
            {color}
            {colorOptions.map((op, idx) => (
              <option key={idx} value={op} style={{ color: op }}>
                {op}
              </option>
            ))}
          </select>
        </label>
      </form>
    </div>
  );
}
