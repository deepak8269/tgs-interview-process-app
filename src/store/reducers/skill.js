import { SET_SKILL_DATA } from "../actions/actionTypes";

const initialState = {
  skillData: []
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_SKILL_DATA:
      return {
        ...state,
        skillData: action.skillData
      };
    default:
      return state;
  }
};
