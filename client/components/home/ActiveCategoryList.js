import React, { Component } from 'react';
import CategoryAccordion from './CategoryAccordion';

class ActiveCategoryList extends Component {
  
  categoryDailies(dailyCategory, dailies) {
    return dailies.filter(daily => {
      return daily.daily_category_id == dailyCategory.id;
    });
  }

  render () {
    const { dailyCategories, dailies, completeDaily, incrementDailyCategoryTotalPoints } = this.props;
    const categories = dailyCategories.map(dailyCategory =>
      <CategoryAccordion 
        key={dailyCategory.id} 
        category={dailyCategory} 
        categoryDailies={this.categoryDailies(dailyCategory, dailies)}
        completeDaily={completeDaily}
        incrementDailyCategoryTotalPoints={incrementDailyCategoryTotalPoints}
        />
    );
    
    return(
      <div>
        { categories }
      </div>
    );
  }
}

ActiveCategoryList.propTypes = {
  dailyCategories: React.PropTypes.array.isRequired,
  dailies: React.PropTypes.array.isRequired,
  completeDaily: React.PropTypes.func.isRequired,
  incrementDailyCategoryTotalPoints: React.PropTypes.func.isRequired
}

export default ActiveCategoryList;