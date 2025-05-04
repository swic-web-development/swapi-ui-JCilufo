import './styles.css'
import { fetchStarships } from './actions'
import { Header } from './components/header'
import { StarshipList } from './components/starshiplist'
import store from './store'

const APP_CLASS_NAME =
  'bg-gray-900 text-white min-h-screen flex flex-col items-center justify-center'
