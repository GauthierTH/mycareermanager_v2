export const longNameHelper = (name, charLimit) => {
  return name.length > charLimit ? name.slice(0, charLimit - 3) + '...' : name
}
