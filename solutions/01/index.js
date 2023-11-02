function getSecretText (text) {
  const secretText = {}
  
  text.toLocaleLowerCase().split(" ").forEach(w => {
    if (!secretText[w]) secretText[w] = 1
    else secretText[w] += 1
  })
  
  return Object.entries(secretText).flat().join("")
}