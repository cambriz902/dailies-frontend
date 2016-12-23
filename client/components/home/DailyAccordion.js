import React, { Component } from 'react';

const styles = {
  active: {
    display: 'inherit'
  },
  inactive: {
    display: 'none'
  }
};

class DailyAccordion extends Component {
  constructor(props){
    super(props);
    this.state = {
      active: false
    };

    this.toggle = this.toggle.bind(this);
    this.processDaily = this.processDaily.bind(this);    
  }

  processDaily(event){
    console.log(event.target.id)
  }

  toggle() {
    this.setState({
      active: !this.state.active
    });
  }

  render() {
    const { daily } = this.props;
    const stateStyle = this.state.active? styles.active :styles.inactive;

    return (
      <div>
        <button 
          className="btn btn-info btn-lg btn-block" 
          onClick={this.toggle}>
            Title: {daily.title}
        </button>
        <div style={stateStyle}>
          <p>Description: {daily.description}</p>
          <button id={daily.id} onClick={this.processDaily}>Complete</button>
        </div>
      </div>
    )
  }
}

DailyAccordion.propTypes = {
  daily: React.PropTypes.object.isRequired,
  completeDaily: React.PropTypes.func
}

export default DailyAccordion;