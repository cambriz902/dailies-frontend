import React, { Component } from 'react';
import CategoryAccordion from './CategoryAccordion';

class ActiveCategoryList extends Component {
  
  categoryDailies(dailyCategory, dailies) {
    return dailies.filter(daily => {
      return daily.daily_category_id == dailyCategory.id;
    });
  }

  render () {
    const { 
      dailyCategories, 
      dailies, 
      completeDaily, 
      incrementDailyCategoryTotalPoints, 
      removeDaily 
    } = this.props;
    const categories = dailyCategories.map(dailyCategory =>
      <CategoryAccordion 
        key={dailyCategory.id} 
        category={dailyCategory} 
        categoryDailies={this.categoryDailies(dailyCategory, dailies)}
        completeDaily={completeDaily}
        incrementDailyCategoryTotalPoints={incrementDailyCategoryTotalPoints}
        removeDaily={removeDaily}
        />
    );
    const noCategories = (
      <p>You have no Categories at the moment. Go create one!</p>
    );

    return(
      <div>
        { categories.length == 0 ? noCategories : categories }
      </div>
    );
  }
}

ActiveCategoryList.propTypes = {
  dailyCategories: React.PropTypes.array.isRequired,
  dailies: React.PropTypes.array.isRequired,
  completeDaily: React.PropTypes.func.isRequired,
  removeDaily: React.PropTypes.func.isRequired,
  incrementDailyCategoryTotalPoints: React.PropTypes.func.isRequired
}

export default ActiveCategoryList;