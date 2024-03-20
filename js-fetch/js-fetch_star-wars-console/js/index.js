console.clear();

const url = "https://swapi.dev/api/people";

async function fetchData() {
  const response = await fetch(url);
  const data = await response.json();

  console.log(data);
  console.log(data.results[0].gender);
  console.log(data.results[2].eye_color);
}

fetchData();
