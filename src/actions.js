import store from './store'

export async function fetchStarships() {
  store.setState({ isLoading: true, error: null })

  try {
    const response = await fetch('https://swapi.tech/api/starships/')
    const data = await response.json()

    // Fetch detailed data for each starship
    const starshipPromises = data.results.map(async (starship) => {
      const detailResponse = await fetch(starship.url)
      const detailData = await detailResponse.json()
      return detailData.result.properties
    })

    const starshipsDetailed = await Promise.all(starshipPromises)

    store.setState({
      ...store.getState(),
      starships: starshipsDetailed,
      isLoading: false,
    })
  } catch (error) {
    console.error('Error fetching starships:', error)
    store.setState({
      ...store.getState(),
      error: error.message,
      isLoading: false,
      starships: [],
    })
  }
}
