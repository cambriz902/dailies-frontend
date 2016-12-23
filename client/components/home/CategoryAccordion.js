import React, { Component} from 'react';
import DailyAccordion from './DailyAccordion';

const styles = {
  active: {
    display: 'inherit'
  },
  inactive: {
    display: 'none'
  }
};

class CategoryAccordion extends Component {
  constructor(props) {
    super(props);
    this.state = {
      active: false
    };

    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState({
      active: !this.state.active
    });
  }

  render() {
    const { category, details, categoryDailies } = this.props;
    const stateStyle = this.state.active ? styles.active : styles.inactive;
    const dailies = categoryDailies.map(daily =>
      <DailyAccordion
        key={daily.id}
        daily={daily}
      />
    );
    return (
      <div>
        <button 
          className="btn btn-primary btn-lg btn-block" 
          onClick={this.toggle}>
            Kind: {category.kind} Points: {category.total_points}
        </button>
        <div style={stateStyle}>
          {dailies}
        </div>

      </div>
    )
  }
}

CategoryAccordion.propTypes = {
  category: React.PropTypes.object.isRequired,
  details: React.PropTypes.string.isRequired,
  categoryDailies: React.PropTypes.array.isRequired
}

export default CategoryAccordion;
