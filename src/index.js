import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import registerServiceWorker from './registerServiceWorker'
import { createStore, applyMiddleware } from 'redux'
import rootReducer from './store/reducers/rootReducer'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import {getFirestore} from 'redux-firestore'
import {getFirebase} from 'react-redux-firebase'

const globalFirebaseAccess = {
    getFirestore,
    getFirebase
}
const store = createStore(rootReducer, applyMiddleware(thunk.withExtraArgument(globalFirebaseAccess)))

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'))
registerServiceWorker()
