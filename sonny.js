app.get('/test1', (req, res) => {
   fetch('https://api.openweathermap.org/data/2.5/weather?zip=16046,us&appid=c1d6762082541f44755c18b65a390d11')
  .then(
    function(response) {
      if (response.status !== 200) {
        console.log('Looks like there was a problem. Status Code: ' +
          response.status);
        return;
      }

      // Examine the text in the response
      response.json().then(function(data) {
        console.log(JSON.stringify(data));
      });
    }
  )
  .catch(function(err) {
    console.log('Fetch Error :-S', err);
  });

});
console.log ('output!!!!');
return zip,data;
}
