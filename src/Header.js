import React from 'react';
import './Header.css'

const Header = function(propertie) {
    return ( 
        <div className = 'header' >
            {propertie.heading}
        </div>
    )
}

/*import  React, {Component} from 'react';
class Header extends Component {
    render() {
       return (
          <div className = 'header'>
             {this.props.heading}
          </div>
        )
    }
 }*/

export default Header;