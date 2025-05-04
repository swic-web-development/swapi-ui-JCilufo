import store from './store'

export async function fetchStarships() {
  store.setState({ isLoading: true, error: null })
