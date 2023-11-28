function fetchAlbums() {
    fetch('https://jsonplaceholder.typicode.com/users/1/albums')
    .then((response) => {
      if (!response.ok) {
        throw new Error(`Failed with status code: ${response.status}`);
      }
    
      return response.json();
    })
    .then((data) => {
      console.log("Result: ", data);
    })
    .catch((error) => {
      console.log("Request Error: ", error);
    });
   }
    
   //fetchAlbums();

let url1 = 'https://jsonplaceholder.typicode.com/users/1/albums';
let url2 = 'https://swapi.py4e.com/api/planets';

   async function f(url) {
    try {
      const response = await fetch(url);
    
      if (!response.ok) {
        throw new Error(`Failed with status code: ${response.status}`);
      } else {
        let res = await response.json();
        console.log("Result: ", res);
        return res;
      }

    } catch(error) {
      console.error('Error', error);
    }

  }
  //f(url2);

   async function getPlanets(url) {
    try {
      const response = await fetch(url);
    
      if (!response.ok) {
        throw new Error(`Failed with status code: ${response.status}`);
      } else {
        let res = await response.json();
        console.log("Result: ", res.results);
        return res.stringify;
      }

    } catch(error) {
      console.error('Error', error);
    }

  }
  //getPlanets(url2);


  async function getSkywalkers() {
    try {
        const response = await fetch('https://swapi.py4e.com/api/people/?search=Skywalker');
      
        if (!response.ok) {
          throw new Error(`Failed with status code: ${response.status}`);
        } else {
          let res = await response.json();
          console.log("Result: ", JSON.stringify(res.results));
          return res;
        }
  
      } catch(error) {
        console.error('Error', error);
      }
   }
   //getSkywalkers();

   async function fetchSWAPI(resource, throwError) {
    const rootUrl = 'https://swapi.py4e.com/api/';
    try {
        let link;
        if (!resource.includes("https:/")){
            link = (rootUrl+resource);
        }else{
            link = (resource);
        }
        console.log("link:"+link);
        const response = await fetch(link);
      
        if (!response.ok) {
          throw new Error(`Failed with status code: ${response.status}`);
        } else {
          let res = await response.json();
          //console.log("Result: ", res)
          return res;
        }
  
      } catch(error) {
        console.error(resource, ' Error', error);
      }
   }
    
   async function testFetchSWAPI() {
    try {
      const person = await fetchSWAPI("people/1/");
      console.log("person ", person);
    
      const film = await fetchSWAPI("https://swapi.py4e.com/api/films/1/");
      console.log("film ", film);
    
      const film1001Id = await fetchSWAPI("films/1001/");
      console.log("film1001Id ", film1001Id);
    
      // should throw error
      await fetchSWAPI("films/1101/", true);
    } catch (error) {
      console.log("testFetchSWAPI error ", error);
    }
   }
    
   testFetchSWAPI();