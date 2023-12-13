const conversionGuide = {
  distance: {
    metricUnit: "meters",
    imperialUnit: "feet",
    coversionRate: 0.3048 // conversion rate from metric to imperial
  },
  volume: {
    metricUnit: "liters",
    imperialUnit: "gallons",
    coversionRate: 3.78541 // conversion rate from metric to imperial
  },
  mass: {
    metricUnit: "kilograms",
    imperialUnit: "pounds",
    coversionRate: 0.453592 // conversion rate from metric to imperial
  }
}

function generateCardHTML(value, measurement) {
  const metricUnit = conversionGuide[measurement].metricUnit
  const imperialUnit = conversionGuide[measurement].imperialUnit
  
  const toMetricConversionRate = conversionGuide[measurement].coversionRate
  const toImperialConversionRate = 1 / toMetricConversionRate
  
  const metricValue = Math.round(1000 * value * toMetricConversionRate) / 1000
  const imperialValue = Math.round(1000 * value * toImperialConversionRate) / 1000
  
  htmlString = `<h2 class="no-margin">${measurement} (${metricUnit}/${imperialUnit})</h2>`
  htmlString +=
    `<p class="no-margin">
      ${value} ${metricUnit} =  ${imperialValue} ${imperialUnit} | ${value} ${imperialUnit} = ${metricValue} ${metricUnit}
    </p>`

  return(htmlString)
}

document.addEventListener("DOMContentLoaded", () => {
  // DOM ELEMENTS
  const amtInput = document.getElementById("amt-input")
  const convertBtn = document.getElementById("convert-btn")
  const cardsContainer = document.getElementById("cards-container")

  // EVENT LISTENERS
  convertBtn.addEventListener("click", () => {
    // remove HTML from the container
    cardsContainer.innertHTML = ""

    // collect the input value to be converted
    const inputValue = amtInput.value

    for (const m in conversionGuide) {
      // create a new element for displaying units and values
      const cardElement = document.createElement("section")

      // generate HTML content to be displayed
      const cardHTML = generateCardHTML(inputValue, m)
      cardElement.innerHTML = cardHTML

      // assign classes for styling
      cardElement.classList.add("centered-content")

      // append the new card to the container
      cardsContainer.appendChild(cardElement)
    }
  })
})