function showSelection() {
  const type = document.getElementById('furnitureType').value;
  const material = document.getElementById('material').value;
  const wood = document.getElementById('woodType').value;
  const finish = document.getElementById('finish').value;
  const primary = document.getElementById('primaryColour').value;
  const secondary = document.getElementById('secondaryColour').value;
  const pattern = document.getElementById('pattern').value;

  let result = `<h3>Your Selection Summary:</h3>`;
  result += `<p><strong>Furniture:</strong> ${capitalize(type)}</p>`;
  result += `<p><strong>Material:</strong> ${capitalize(material)}</p>`;
  
  if (material === 'wood' && wood !== 'none') {
    result += `<p><strong>Wood Type:</strong> ${capitalize(wood)}</p>`;
  }

  result += `<p><strong>Finish:</strong> ${capitalize(finish)}</p>`;
  result += `<p><strong>Primary Colour:</strong> <span style="background:${primary}; padding:5px 15px; border-radius:3px;">${primary}</span></p>`;
  result += `<p><strong>Secondary Colour:</strong> <span style="background:${secondary}; padding:5px 15px; border-radius:3px;">${secondary}</span></p>`;
  result += `<p><strong>Pattern:</strong> ${capitalize(pattern)}</p>`;

  document.getElementById('selection-result').innerHTML = result;
}

function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}
