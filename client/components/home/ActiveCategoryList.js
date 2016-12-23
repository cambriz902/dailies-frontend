import React, { Component } from 'react';
import CategoryAccordion from './CategoryAccordion';


class ActiveCategoryList extends Component {
  
  categoryDailies(dailyCategory, dailies) {
    return dailies.filter(daily => {
      return daily.daily_category_id == dailyCategory.id;
    });
  }

  render () {
    const { dailyCategories, dailies } = this.props;
    const categories = dailyCategories.map(dailyCategory =>
      <CategoryAccordion 
        key={dailyCategory.id} 
        category={dailyCategory} 
        details="hi"
        categoryDailies={this.categoryDailies(dailyCategory, dailies)}
        />
    );
    
    return(
      <div>
        <h1>Categories</h1>
        { categories }
      </div>
    );
  }
}

ActiveCategoryList.propTypes = {
  dailyCategories: React.PropTypes.array.isRequired,
  dailies: React.PropTypes.array.isRequired
}

export default ActiveCategoryList;