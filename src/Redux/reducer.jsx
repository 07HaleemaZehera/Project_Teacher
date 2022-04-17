import { HANDLE_ISLOADING, TEACHER_DETAIL } from "./actionTypes";

const initState = {
  data: [],
  isLoading: false,
};

const detail_reducer = (state = initState, action) => {
  switch (action.type) {
    case TEACHER_DETAIL:
      return { ...state, data: [action.payload], isLoading: false };

      case HANDLE_ISLOADING:
          return{...state,isLoading:true}

    default:
      return state;
  }
};

export default detail_reducer;
