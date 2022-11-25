import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import rootReducers from "../RootReducers/RootReducers";


const { createStore, applyMiddleware } = require("redux");



const store = createStore(
    rootReducers,
    composeWithDevTools(applyMiddleware(thunk))
)

export default store;