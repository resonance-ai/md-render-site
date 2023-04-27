import React from 'react';
import { Link as GatsbyLink } from "gatsby";
import PropTypes from 'prop-types';
// import classnames from 'classnames';
// import styles from './style.module.scss';

const Button = ({ children, url, activeClassName, partiallyActive, buttonType, ...rest }) => {
  const chooseButtonStyle = (buttonType) => {
    return (buttonType === 'primary')
      ? {[styles.primary]: true}
      : {[styles.secondary]: true};
  };
//   const buttonClass = classnames(styles.Button, chooseButtonStyle(buttonType));
  return (
    <>
      {url ? (
        <GatsbyLink
          to={url}
          activeClassName={activeClassName}
          partiallyActive={partiallyActive}
          className={buttonClass} {...rest}
        >
          {children}
        </GatsbyLink>
      ):(
        <button className={buttonClass} {...rest}>
          {children}
        </button>
      )}
    </>
  );
};

export default Button;

Button.propTypes = {
  buttonType: PropTypes.oneOf(['primary', 'secondary', '']),
  children: PropTypes.string
};
