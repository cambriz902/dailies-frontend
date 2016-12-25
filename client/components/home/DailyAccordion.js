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
  }

  processDaily(daily){
    this.props.completeDaily(daily.id)
      .then(response => {
        this.props.incrementDailyCategoryTotalPoints(daily.daily_category_id);
        this.props.removeDaily(daily.id);
      });
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
            {daily.title}
        </button>
        <div style={stateStyle}>
          <p>Description: {daily.description}</p>
          <button onClick={this.processDaily.bind(this, daily)}>Complete</button>
        </div>
      </div>
    )
  }
}

DailyAccordion.propTypes = {
  daily: React.PropTypes.object.isRequired,
  completeDaily: React.PropTypes.func.isRequired,
  removeDaily: React.PropTypes.func.isRequired,
  incrementDailyCategoryTotalPoints: React.PropTypes.func.isRequired
}

export default DailyAccordion;