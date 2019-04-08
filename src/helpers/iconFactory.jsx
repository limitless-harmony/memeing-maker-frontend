import React from 'react';
import PropTypes from 'prop-types';

const iconFactory = iconConfig => {
  const Icon = props => {
    const { logoFillColor, round, size } = props;
    const baseStyle = {
      width: size,
      height: size,
    };

    return (
      <div style={baseStyle}>
        <svg viewBox="0 0 64 64" width={size} height={size}>
          <g>
            {!round ? (
              <rect width="64" height="64" fill={iconConfig.color} />
            ) : (
              <circle cx="32" cy="32" r="31" fill={iconConfig.color} />
            )}
          </g>

          <g>
            <path d={iconConfig.icon} fill={logoFillColor} />
          </g>
        </svg>
      </div>
    );
  };

  Icon.propTypes = {
    logoFillColor: PropTypes.string,
    round: PropTypes.bool,
    size: PropTypes.number,
  };

  Icon.defaultProps = {
    logoFillColor: 'white',
    size: 40,
    round: false,
  };

  return Icon;
};

export default iconFactory;
