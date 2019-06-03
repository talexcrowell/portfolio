import React from 'react';

export default class Portfolio extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      modal: ''
    };
  }
  handleClick(val){
    this.setState({
      modal: val
    });
  }

closeDetails(){
  this.setState({
    modal: ''
  });
}

  render(){

    let modal;
    if(this.state.modal === 'nh'){
      modal= (<div className='details-modal'>
      <div className='details-modal-content'>
      <span className="details-close" onClick={() => this.closeDetails()}>&times;</span>
      <h3>NeighborHound</h3>
      <p className='project-details'>NeighborHound is an application composed of two projects.</p>
            <p className='project-details'>Fetch collects news and community content, and allows users to save content and build custom feeds.</p> 
            <p className='project-details'>Rex helps users to find recommendations for different media and keep track of interested media.</p>
            <p className='project-details'>P.S. I designed the NeighborHound logo too :)</p>
      <h4 className='tech-title'>Tech Stack</h4>
      <h4>Front-End:</h4>
      <p className='tech'>React</p>
      <p className='tech'>Redux</p>
      <p className='tech'>CSS</p>
      <h4>Back-End:</h4>
      <p className='tech'>Node.js</p>
      <p className='tech'>Express.js</p>
      <p className='tech'>PostgreSQL</p>
      <p className='tech'>Knex.js</p>
      <p className='tech'>Passport</p>
      <p className='tech'>Express</p>
      <p className='tech'>JWT</p>
      </div>
    </div>);
    }
    else if(this.state.modal === 'pm'){
      modal = (<div className='details-modal'>
      <div className='details-modal-content'>
      <span className="details-close" onClick={() => this.closeDetails()}>&times;</span>
      <h3>PhotonMetrics</h3>  
        <p className='project-details'>This is a website for PhotonMetrics, a startup that focuses on "solar data services for a new age of carbon-free energy systems".</p> 
        <p className='project-details'>The website is continuously being developed to serve end-user and the startup's needs.</p>
          <h4 className='tech-title'>Tech Stack</h4>
           <h4>Front-End:</h4>
          <p className='tech'>React</p>
          <p className='tech'>Redux</p>
          <p className='tech'>CSS</p>
          <h4>Back-End:</h4>
          <p className='tech'>Node</p>
          <p className='tech'>Express</p>
          <p className='tech'>MongoDB</p>
          <p className='tech'>Mongoose</p>
          <p className='tech'>Passport</p>
          <p className='tech'>Express</p>
          <p className='tech'>JWT</p>
          <p className='tech'>Mocha</p>
          <p className='tech'>Chai</p>
        </div>
        </div>);
    }
    else if(this.state.modal === 'tfz'){
      modal = (<div className='details-modal'>
      <div className='details-modal-content'>
      <span className="details-close" onClick={() => this.closeDetails()}>&times;</span>
      <h3>The Friend Zone</h3>  
        <p className='project-details'>The Friend Zone is an approach to social media to help people build platonic friendships through the comfort of basic anonymity.</p>
          <p className='project-details'>It was created with a team of developers where I took the role of Project Manager. Each member developed a separate feature that was reviewed and refactored with the developer team's decisions and criticisms throughout the project.</p>
            <h4 className='tech-title'>Tech Stack</h4>
            <h4>Front-End:</h4>
            <p className='tech'>React</p>
            <p className='tech'>Redux</p>
            <p className='tech'>CSS</p>
            <p className='tech'>socket.io</p>
            <p className='tech'>Enzyme</p>
            <p className='tech'>Jest</p>
            <h4>Back-End:</h4>
            <p className='tech'>Node</p>
            <p className='tech'>Express</p>
            <p className='tech'>MongoDB</p>
            <p className='tech'>Mongoose</p>
            <p className='tech'>Passport</p>
            <p className='tech'>Express</p>
            <p className='tech'>JWT</p>
            <p className='tech'>Mocha</p>
            <p className='tech'>Chai</p>
          </div>
          </div>);
    }
    else if(this.state.modal === 'owb'){
      modal = (<div className='details-modal'>
      <div className='details-modal-content'>
      <span className="details-close" onClick={() => this.closeDetails()}>&times;</span>
      <h3>Overwatch Buddy</h3>  
        <p className='project-details'>Overwatch Buddy is an application that allows users to customize, build, and save teams using heroes from Blizzard's Overwatch.</p> 
        <p className='project-details'>It is a tool to help users get further insight into the mechanics of Overwatch team builds by providing firm number statistics for each team and allowing users to add notes to give personal opinions and plans for future builds.</p>
          <h4 className='tech-title'>Tech Stack</h4>
           <h4>Front-End:</h4>
          <p className='tech'>React</p>
          <p className='tech'>Redux</p>
          <p className='tech'>CSS</p>
          <h4>Back-End:</h4>
          <p className='tech'>Node</p>
          <p className='tech'>Express</p>
          <p className='tech'>MongoDB</p>
          <p className='tech'>Mongoose</p>
          <p className='tech'>Passport</p>
          <p className='tech'>Express</p>
          <p className='tech'>JWT</p>
          <p className='tech'>Mocha</p>
          <p className='tech'>Chai</p>
        </div>
        </div>);
    }
    return(
      <section className='portfolio' id='portfolio'>
        <h2>Projects</h2>
        <p>Click on the project's image to learn more details</p>
        <section className='projects-container'>
        <h4>Current</h4>
        <div className='project'>
        <div className='project-description'>
          <a className='live-link' href='http://www.photonmetrics.com' target='_blank' rel='noopener noreferrer'><h3>PhotonMetrics</h3></a>
          <a className='live-link-direct' href='http://www.photonmetrics.com' target='_blank' rel='noopener noreferrer'><h5>(Link)</h5></a>
          <div className='private-repo'><i className='private'/></div>
          <div className='img-container' onClick={()=> this.handleClick('pm')}>
            <div className='img-background'>
            <img className='logo-img' src={process.env.PUBLIC_URL+'/resources/pm-logo.png'} alt='NeighborHound' ></img>
            </div>
          </div>
        </div>
        </div>
        <div className='project'>
        <div className='project-description'>
          <a className='live-link' href='https://github.com/talexcrowell/NeighbourHound' target='_blank' rel='noopener noreferrer'><h3>NeighborHound</h3></a>
          <h5>Not live yet :(</h5>
          <a className='github-repo' href='https://github.com/talexcrowell/NeighbourHound' target='_blank' rel='noopener noreferrer'><i className='github'/></a>
          <div className='img-container' onClick={()=> this.handleClick('nh')}>
            <img className='project-img' src='https://i.imgur.com/oCVzDSC.png' alt='NeighborHound' ></img>
          </div>
        </div>
        </div>
        </section>
        <section className='projects-container'>
        {modal}
        <h4>Past</h4>
        <div className='project'>
          <div className='project-description'>
            <a className='live-link' href='https://the-friend-zone-app.herokuapp.com' target='_blank' rel='noopener noreferrer'><h3>The Friend Zone</h3></a>
            <a className='live-link' href='https://the-friend-zone-app.herokuapp.com' target='_blank' rel='noopener noreferrer'><h5>Link</h5></a>
            <a className='github-repo' href='https://github.com/the-friendzone-app' target='_blank' rel='noopener noreferrer'><i className='github'/></a>
            <div className='img-background' onClick={()=> this.handleClick('tfz')}>
            <img className='logo-img' src='https://i.imgur.com/mTl1PZX.png' alt='The Friend Zone' ></img>
            </div>
          </div>
        </div>  
          <div className='project'>
            <div className='project-description'>
              <a className='live-link' href='https://overwatch-buddy.herokuapp.com/'  target='_blank' rel='noopener noreferrer'><h3>Overwatch Buddy</h3></a>
              <a className='live-link-direct' href='https://overwatch-buddy.herokuapp.com/'  target='_blank' rel='noopener noreferrer'><h5>(Link)</h5></a>
              <a className='github-repo' href='https://github.com/talexcrowell/ow-team-app-client' target='_blank' rel='noopener noreferrer'><i className='github'/></a>
              <div className='img-container' onClick={()=> this.handleClick('owb')}>
              <div className='img-background'>
              <img className='project-img' src='https://i.imgur.com/HXeh6wo.png' alt='Overwatch Buddy' ></img>
              </div>
              </div>
            </div>
          </div>
        </section>
      </section>
    )
  }
}