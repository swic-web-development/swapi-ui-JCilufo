export function StarshipCard(starship) {
  return `
      <div class="bg-gray-800 rounded-lg p-6 mb-4 hover:bg-gray-700 transition-colors">
        <h2 class="text-xl font-bold mb-2">${starship.name}</h2>
        <div class="grid grid-cols-2 gap-4">
          <div>
            <p><span class="font-semibold">Model:</span> ${starship.model}</p>
            <p><span class="font-semibold">Manufacturer:</span> ${starship.manufacturer}</p>
            <p><span class="font-semibold">Cost:</span> ${starship.cost_in_credits} credits</p>
          </div>
          <div>
            <p><span class="font-semibold">Length:</span> ${starship.length}m</p>
            <p><span class="font-semibold">Crew:</span> ${starship.crew}</p>
            <p><span class="font-semibold">Passengers:</span> ${starship.passengers}</p>
          </div>
        </div>
      </div>
    `
}
