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

export { getUniqueArrFromData, getSortedSelectOptions }
