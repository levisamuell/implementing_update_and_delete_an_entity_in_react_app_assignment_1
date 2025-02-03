import { useEffect, useState } from 'react';
import axios from 'axios';
import UpdateItem from "./components/UpdateItem";

// use the following link to get the data
// `/doors` will give you all the doors, to get a specific door use `/doors/1`.
const API_URI = `http://${import.meta.env.VITE_API_URI}/doors`;

function App() {
  // Get the existing item from the server
  // const [item, setItem] = useState(null);
  // pass the item to UpdateItem as a prop

  const [item, setItem] = useState(null);
  const[loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try{
        const response = await axios.get(`${API_URI}/1`);
        setItem(response.data);
        setLoading(false);
      }
      catch(err){
        console.log("Error fetching teh data", err);
      }
    };

    fetchData();
  },[])

  
  if (loading) {
    return <div>Loading...</div>; // show loading state
  }

  return <UpdateItem item={item} />;
}

export default App;
