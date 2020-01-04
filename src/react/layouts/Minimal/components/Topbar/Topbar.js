import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
// import clsx from 'clsx';
import PropTypes from 'prop-types';
// import { makeStyles } from '@material-ui/styles';
// import { AppBar, Toolbar } from '@material-ui/core';

// const useStyles = makeStyles(() => ({
  // root: {
    // boxShadow: 'none'
  // }
// }));

const Topbar = props => {
  const { className, ...rest } = props;

  // const classes = useStyles();

  return (
    <div
      {...rest}      
    >
      Topbar      
    </div>
  );
};

Topbar.propTypes = {
  className: PropTypes.string
};

export default Topbar;
