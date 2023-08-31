function getUniqueArrFromData(data, key) {
  return data.reduce((acc, item) => {
    const value = item[key].trim()
    if (!acc.includes(value)) {
      acc.push(value)
    }
    return acc
  }, [])
}

function getSortedSelectOptions(arr) {
  return arr
    .sort((a, b) => a.localeCompare(b))
    .map(item => {
      return {
        label: item,
        value: item,
      }
    })
}

function getRuDate(date) {
  const options = {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  }
  return new Date(date).toLocaleDateString('ru-RU', options)
}

console.log(getRuDate('2020-01-01'))

export { getUniqueArrFromData, getSortedSelectOptions, getRuDate }
