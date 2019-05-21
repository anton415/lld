import React, { Component } from 'react';
import Video from './utils/video/video.mp4'

class App extends Component {
  render() {
    return (
      <div className="App">
        <video ref={this.setVideoRef} controls >
          <source src={Video} type="video/mp4" />
        </video>
      </div>
    );
  }
}

export default App;
