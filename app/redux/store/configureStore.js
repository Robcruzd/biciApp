import { createStore, applyMiddleware, compose } from 'redux';
import reducers from '../reducers/index';
import { createLogger } from 'redux-logger';
import thunk from 'redux-thunk';

const loggerMiddleware = createLogger({ predicate: (getState, action) => __DEV__ })

export default function configureStore () {
  const enhancer = compose(
    applyMiddleware(
      loggerMiddleware
    )
  )
  const store = createStore(reducers, applyMiddleware(thunk))

  if (module.hot) {
    module.hot.accept(() => {
      const nextRootReducer = require('../reducers/auth').default
      store.replaceReducer(nextRootReducer)
    })
  }
  return store
}

