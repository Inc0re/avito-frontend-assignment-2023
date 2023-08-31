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

function filterByMatch(arr, key, values) {
  return arr.filter(item => values.includes(item[key]))
}

function sortByTitle(arr, order = 'asc') {
  return arr.sort((a, b) => {
    if (order === 'asc') {
      return a.title.localeCompare(b.title)
    } else {
      return b.title.localeCompare(a.title)
    }
  })
}

function sortByDate(arr, key, order = 'asc') {
  return arr.sort((a, b) => {
    const dateA = new Date(a[key])
    const dateB = new Date(b[key])
    if (order === 'asc') {
      return dateA - dateB
    } else {
      return dateB - dateA
    }
  })
}

export {
  getUniqueArrFromData,
  getSortedSelectOptions,
  getRuDate,
  filterByMatch,
  sortByTitle,
  sortByDate,
}
