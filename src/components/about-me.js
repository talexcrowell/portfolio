import React from 'react';

export default class AboutMe extends React.Component{
  render(){
    return(
      <section className='about' id='about'>
        <h2>About Me</h2> 
        <p className='about-description'>
        My name is Alex Crowell and I'm a software engineer and security nerd. 
        I'm always looking for opportunities to learn and to share my knowledge. 
        I hope to continually improve my skills and help others to become better developers.
        </p>
        <p className='about-description'>
        I was born and raised in Albuquerque, New Mexico and attended University of New Mexico where I graduated with my Bachelor's of Science in Biology. 
        After a few years of different jobs, I felt the need to discover more about myself and how I can use technology to help others.
        I am passionate about innovation and protecting people in their everyday use of digital resources.
        </p>
        <p className='about-description'>
        This led me to enter the world of software development and cyber security.
        The key to achieving these goals is to work with others and build a quality project. 
        Working with a team brings an opportunity to learn new techniques, understand different approaches to a problem, and potentially teach others some personal tricks to add to their engineering toolbox.
        </p>
        <p className='about-description'>
        Thank you for visiting my portfolio and please feel free to contact me if you have any questions :)  
        </p>

      </section>
    )
  }
}