import React from 'react';
import expect from 'expect';
import { shallow } from 'enzyme';
import Greetings from '../../client/components/home/Greetings';

describe('Component: Greetings', () => {

  it('renders without exploding', () => {
    expect(
      shallow(
        <Greetings />
      ).length
    ).toEqual(1);
  });

});