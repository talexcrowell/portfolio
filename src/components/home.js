import React from 'react';
import AboutMe from './about-me';
import Portfolio from './portfolio';

export default class Home extends React.Component{
  render(){
    return(
      <section className='home description'>
        <div className='contact' id='contact'>
          <img className='profile-pic' src="https://i.imgur.com/VXbvo7d.jpg" alt="Profile"/>
          <h1 className='home-introduction'>T. Alex Crowell, CEH</h1>
          <h3>Software Engineer | Security Nerd</h3>
          <section className='contact-info'>
            <a href='https://docs.google.com/document/d/1h5_sHImeKSV5LLLN5Pat8KDdU8bqAvYXHSJL7hCCiuU/edit?usp=sharing' target='_blank' rel="noopener noreferrer"><i className='resume'/></a>
            <a href='mailto:talexcrowell@gmail.com'><i className='email'/></a>
            <a href='https://www.linkedin.com/in/t-alexander-crowell-01885b162' target='_blank' rel='noopener noreferrer'><i className='linkedin'/></a>
            <a href='https://github.com/talexcrowell' target='_blank' rel='noopener noreferrer'><i className='github'/></a>
          </section>
        </div>
        <AboutMe />
        <Portfolio />
      </section>
    )
  }
}