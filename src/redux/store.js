import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import rootReducer from './reducer';

const customeEnhencer = composeWithDevTools(applyMiddleware(thunk));

const store = createStore(rootReducer, customeEnhencer);

export default store;
