// Import required  hooks
import { useEffect, useState } from "react";
import { DogFact } from "./components/DogFact";


export const App = () => {
  // Hint: Initialize state for storing the dog fact
  const [dog, setDog] = useState("")
  // Hint: Define the API endpoint
  const API = "https://dogapi.dog/api/v2/facts";

  // Hint: Create a function to fetch the dog fact
  const fetchDog = () => {

    fetch(API)
      .then(response => response.json())

      .then(json => setDog(json.data[0].attributes.body));
  };

  // Hint: Use the useEffect hook to fetch the dog fact when the component mounts
  useEffect(() => {
    fetchDog();
  }, []);

  return (
    <div className="App">
      <DogFact dog={dog} />
    </div>
  );
};









//   useEffect(() => {
//     fetch(API)
//       .then((response) => response.json()) // Konvertera till JSON

//       // .then(json => console.log(json.data[0].attributes.body));

//       .then(json => setDog(json.data[0].attributes.body));

//   }, []);


//   // Hint: Create a function to fetch the dog fact
//   // Hint: Use the useEffect hook to fetch the dog fact when the component mounts

//   return (
//     <div className="App">
//       <DogFact dog={dog} />
//     </div>
//   );
// };
