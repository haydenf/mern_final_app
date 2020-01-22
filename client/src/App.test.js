import * as actions from './actions/listingAction'
import * as types from './actions/types'

import reducer from './reducers/reducer'

// import React from 'react';
// import App from './App';
// import { configure, shallow } from 'enzyme';
// import Adapter from 'enzyme-adapter-react-16';

//-------------------------------------
// Testing backend redux action creators
//-------------------------------------

  describe('listings actions', () => {
    it('should create a new listing', () => {
      const listings = 'A new product'
      const expectedAction = {
        type: types.NEW_LISTING,
        val: listings
      }
      expect(actions.newListingHandler(listings)).toEqual(expectedAction)
    })

    it('should set listings', () => {
      const listings = 'A set product'
      const expectedAction = {
        type: types.SET_LISTINGS,
        val: listings
      }
      expect(actions.listingHandler(listings)).toEqual(expectedAction)
    })

    it('should delete listings', () => {
      const id = '1'
      const expectedAction = {
        type: types.DELETE_LISTING,
        val: id
      }
      expect(actions.deletedListingHandler(id)).toEqual(expectedAction)
    })
  })

//-------------------------------------
// Testing backend redux reducers
//-------------------------------------

describe('listings reducer', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual({"listings": []})
  })

  it('should handle NEW_LISTING', () => {
    expect(
      reducer([], {
        type: types.NEW_LISTING,
        text: 'New listing handled'
      })
    ).toEqual([
      {
        text: 'New listing handled',
        id: 0
      }
    ])
    expect(
      reducer(
        [
          {
            text: 'Pre-existing listing',
            id: 0
          }
        ],
        {
          type: types.NEW_LISTING,
          text: 'Additional listing'
        }
      )
    ).toEqual([
      {
        text: 'Additional listing',
        id: 1
      },
      {
        text: 'Pre-existing listing',
        id: 0
      }
    ])
  })

  it('should handle SET_LISTINGS', () => {
    expect(
      reducer([], {
        type: types.SET_LISTINGS,
        text: 'Listing set'
      })
    ).toEqual([
      {
        text: 'Listing set',
        id: 0
      }
    ])
    expect(
      reducer([
        {
          text: 'Pre-existing listing',
          id: 0
        }
      ], {
        type: types.SET_LISTINGS,
        text: 'Set listing'
      })
    ).toEqual([
      {
        text: 'Set listing',
        id: 0
      }
    ])
    expect(
      reducer([
        {
          text: 'Pre-existing listing',
          id: 0
        }
      ], {
        type: types.SET_LISTINGS,
        text: ''
      })
    ).toEqual([
      {
        text: '',
        id: 0
      }
    ])
  })

  it('should handle DELETE_LISTING', () => {
    expect(
      reducer([], {
        type: types.DELETE_LISTING,
        text: 'Listing set'
      })
    ).toEqual([
      {
        text: 'Listing set',
        id: 0
      }
    ])
  })
})

//-------------------------------------
// Testing frontend component rendering
//-------------------------------------

// configure({ adapter: new Adapter() });

// const setup = (props={}, state=null) => {
//       return shallow(<App {...props} /> )
//   }
  
//   const findByTestAttr = (wrapper, val) => {
//       return wrapper.find(`[data-test="${val}"]`);
//   }

  // test('renders without crashing', () => {
  //   //   const wrapper = shallow(<App />);
  //   //   console.log(wrapper.debug())
  //   //   expect(wrapper).toBeTruthy()
  //       const wrapper = setup();
  //       const appComponent = findByTestAttr(wrapper, 'component-app')
  //       expect(appComponent.length).toBe(1)
  //   });
