function createStore(initialState = {}) {
  let state = initialState
  const listeners = new Set()

  const getState = () => ({ ...state })
