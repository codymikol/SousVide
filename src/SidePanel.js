import React, { Component } from 'react';
import './SidePanel.css';

class SidePanel extends Component {
  render() {
    return (
      <div className="SidePanel">
        <header className="SidePanel-header">
          <h1 className="SidePanel-title">Side Panel:</h1>
        </header>
        <p className="SidePanel-intro">
         SidePanel text.
        </p>
      </div>  
	);
  }
}

export default SidePanel;
