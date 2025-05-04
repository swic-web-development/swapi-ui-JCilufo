function createStore(initialState = {}) {
  let state = initialState
  const listeners = new Set()

  const getState = () => ({ ...state })

  const setState = (newState) => {
    state = typeof newState === 'function' ? newState(state) : { ...state, ...newState }

    listeners.forEach((listener) => listener(state))
  }
