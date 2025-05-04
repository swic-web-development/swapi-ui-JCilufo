import './styles.css'
import { fetchStarships } from './actions'
import { Header } from './components/header'
import { StarshipList } from './components/starshiplist'
import store from './store'

const APP_CLASS_NAME =
  'bg-gray-900 text-white min-h-screen flex flex-col items-center justify-center'

const Main = (state) => {
  return StarshipList(state.starships)
}
function App() {
  const render = (state) => {
    state.appElement.className = APP_CLASS_NAME

    let content = ''

    if (state.error) content = `<p class="text-red-500 text-center p-4">${state.error}</p>`
    else if (state.isLoading) content = `<p class="text-center p-4">Loading starships...</p>`
    else if (!state.starships.length) content = `<p class="text-center p-4">No starships found</p>`
    else content = Main(state)

    state.appElement.innerHTML = `
      ${Header()}
      <main class="container mx-auto p-4 max-w-6xl">
        ${content}
      </main>
    `
  }
