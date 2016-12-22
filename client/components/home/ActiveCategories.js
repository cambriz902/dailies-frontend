import React, { Component } from 'react';


class ActiveCategories extends Component {
  render () {
    const { dailyCategories } = this.props;
    return(
      <div>hello world
      </div>
    )
  }
}

ActiveCategories.propTypes = {
  dailyCategories: React.PropTypes.array.isRequired
}

export default ActiveCategories;