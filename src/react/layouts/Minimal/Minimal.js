import React from 'react';
import PropTypes from 'prop-types';

// import { Topbar } from './components';

const Minimal = props => {
  const { children } = props;
  return (
    <div >
      {/*<Topbar />*/}
      <main>{children}</main>
    </div>
  );
};

Minimal.propTypes = {
  children: PropTypes.node
};

export default Minimal;
