

  async function getData() {
    const url = "https://restcountries.com/v3.1/lang/spanish";
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`Response status: ${response.status}`);
      }
  
      const json = await response.json();
      console.log("List of all the country that speak spanish.")
      json.forEach(country => {
        var country = country.name['common']
        console.log(`${country}`)
      });
    } catch (error) {
      console.error(error.message);
    }
  }


  getData()