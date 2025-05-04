import { StarshipCard } from './starshipcard'

export function StarshipList(starships) {
  return `
    <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
      ${starships.map((starship) => StarshipCard(starship)).join('')}
    </div>
  `
}
