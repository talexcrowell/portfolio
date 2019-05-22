import React from 'react';

export default class NavBar extends React.Component{
  render(){
    return(
      <section className='nav-bar'>
        <ul className='nav-directionals'>
          <li className='nav-nameplate'>T. Alex Crowell</li>
          <li className='nav-direction-right'><a href='#portfolio'>Portfolio</a></li>
          <li className='nav-direction-right'><a href='#about'>About Me</a></li>
          <li className='nav-direction-right'><a href='#contact'>Contact</a></li>
          <li className='nav-direction-right hide'><a href='https://docs.google.com/document/d/1tvsq0Nxspdy9KWSLqVnAV7gKd_KKHxzIxxNLwo4rI-g/edit?usp=sharing' target='_blank' rel="noopener noreferrer"><p className='nav-resume-text'>Resume</p><i className='nav-resume'/></a></li>
        </ul>
      </section>
    )
  }
}