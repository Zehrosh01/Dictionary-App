
const apiKey = 'ac99ed9900msh31094520177d4b2p141c4fjsnaf40410d1c68';

const searchForm = document.querySelector('.search-form');
const searchInput = document.getElementById('search-input');
const wordHeading = document.getElementById('word-heading');
const definition = document.getElementById('definition');

searchForm.addEventListener('submit', (event) => {
  event.preventDefault();
  const word = searchInput.value;
  if (word) {
    fetchDefinition(word);
  }
});

async function fetchDefinition(word) {
  const url = `https://urban-dictionary7.p.rapidapi.com/v0/define?term=${word}`;
  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': apiKey,
      'X-RapidAPI-Host': 'urban-dictionary7.p.rapidapi.com'
    }
  };

  try {
    const response = await fetch(url, options);
    const data = await response.json();
    const definitions = data.list;

    if (definitions.length > 0) {
      wordHeading.textContent = definitions[0].word;
      definition.textContent = definitions[0].definition;
    } else {
      wordHeading.textContent = 'Word not found';
      definition.textContent = '';
    }
  } catch (error) {
    console.error(error);
    wordHeading.textContent = 'Error fetching definition';
    definition.textContent = '';
  }
}
