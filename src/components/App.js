// create your App component here
import React, { useState, useEffect } from "react";

function App() {
const [dogPic, setDogPic] = useState('');
const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    fetch("https://dog.ceo/api/breeds/image/random")
      .then((response) => response.json())
      .then((data) => {
        setDogPic(data.message);
        setIsLoaded(true);
      });
      console.log(dogPic)
  }, []);
  // use an empty dependencies array, so we only run the fetch request ONCE
  // if the data hasn't been loaded, show a loading indicator
if(!isLoaded) return <p>Loading...</p>;
  return (
  <div>
  <img src= {dogPic} alt = "A Random Dog" />;
</div>
  )
}


export default App;

// {dogPic.map((dog) =>message.src)

//<div>
  //<img src={message} alt = "A Random Dog" />;
  //</div>