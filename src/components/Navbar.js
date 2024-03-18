import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom';

export default function Navbar(props) {
    let barStyle = {
        backgroundColor : '#f8f5f0',
    };
    switch (props.theme) {
        case 'bright':
            barStyle.backgroundColor = '#f8f5f0';
            break;
        case 'sunrise':
            barStyle.backgroundColor = '#9f2608';
            break;
        case 'ocean':
            barStyle.backgroundColor = '#305f8c';
            break;
        case 'forest':
            barStyle.backgroundColor = '#456135';
            break;
        default:
            break;
    }
    return (
        <nav className="navbar navbar-expand-lg border-bottom" style={{...props.style,backgroundColor:barStyle.backgroundColor}}>
        {/*<nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`} style={{...props.style,backgroundColor:barStyle.backgroundColor}}>*/}
            <div className="container-fluid">
                <Link className="navbar-brand" to="/" style={{...props.style,backgroundColor:barStyle.backgroundColor}}>{props.title}</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className="nav-link" aria-current="page" to="/" style={{...props.style,backgroundColor:barStyle.backgroundColor}}>Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/about" style={{...props.style,backgroundColor:barStyle.backgroundColor}}>{props.aboutInfo}</Link>
                        </li>
                    </ul>
                {/*<form className="d-flex" role="search">
                    <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                    <button className="btn btn-primary" type="submit">Search</button>
                </form>*/}
                {/*Dark mode below*/}
                    {/*<div className={`form-check form-switch text-${props.mode === "light"?"dark":"light"}`}>
                        <input className="form-check-input" type="checkbox" onClick={props.toggleMode} role="switch" id="flexSwitchCheckDefault" />
                        {props.mode === "light"?<label className="form-check-label" htmlFor="flexSwitchCheckDefault">Enable Dark Mode</label>:<label className="form-check-label" htmlFor="flexSwitchCheckDefault">Disable Dark Mode</label>}
                    </div>*/}
                    <div className="dropdown">
                        <button className="btn btn-secondary dropdown-toggle btn-outline-light" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Themes
                        </button>
                        <ul className="dropdown-menu">
                            <li><button className="dropdown-item" type="button" value="bright" onClick={props.changeTheme}>Bright</button></li>
                            <li><button className="dropdown-item" type="button" value="sunrise" onClick={props.changeTheme}>Sunrise</button></li>
                            <li><button className="dropdown-item" type="button" value="ocean" onClick={props.changeTheme}>Ocean</button></li>
                            <li><button className="dropdown-item" type="button" value="forest" onClick={props.changeTheme}>Forest</button></li>
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    )
}
Navbar.propTypes = {
    title:PropTypes.string.isRequired,
    aboutInfo:PropTypes.string.isRequired
};

Navbar.defaultProps ={
    title :'The title',
    aboutInfo: 'About'
}