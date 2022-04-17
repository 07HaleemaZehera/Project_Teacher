import { createStore,applyMiddleware} from "redux";
import thunk from "redux-thunk"

import detail_reducer from "./reducer";

export const store = createStore(detail_reducer,applyMiddleware(thunk));
