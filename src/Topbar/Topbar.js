import React from "react";
import classes from './Topbar.module.css'

const Topbar = () => {
  return(
    <header>
        <nav className={classes.Topbar}>
          <img src="../amazon-logo.png" alt="amazon-logo" />
        </nav>
    </header>
  );
}

export default Topbar;