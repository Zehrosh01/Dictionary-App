let form = document.querySelector(".my-form");

form.addEventListener("submit", function(e) {
  e.preventDefault() // This prevents the window from reloading

  let formdata = new FormData(this);
  let input = formdata.get("searchTxt");
  apiCall(input);
});





async function apiCall(text) {
  const url = 'https://urban-dictionary7.p.rapidapi.com/v0/define?term=' + text;
  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': 'ac99ed9900msh31094520177d4b2p141c4fjsnaf40410d1c68',
      'X-RapidAPI-Host': 'urban-dictionary7.p.rapidapi.com'
    }
  };

  try {
    const response = await fetch(url, options);
    const result = await response.text();
    const jsonResult = JSON.parse(result);
    const recordsList = jsonResult['list'];
    var index = 0;


    recordsList.forEach(element => {
      index++;
      document.getElementById('myData').innerHTML += "<p>";
      document.getElementById('myData').innerHTML += "<b>" + index + ".</b> " + element["definition"] + "<br>";
      document.getElementById('myData').innerHTML += "&nbsp;&nbsp;&nbsp;<a target='_blank' href=" + element["permalink"] + ">" + element["permalink"] + "</a><br><br>";
      document.getElementById('myData').innerHTML += "</p>";
    });

    // alert(jsonResult['list'][0]["definition"]);
  } catch (error) {
    console.error(error);
    alert(error);
  }
}