import { useState, useEffect } from 'react';
import axios from 'axios';
import { useDebounce } from './useDebounce';
import './styles.css';

const SearchComponent = () => {
  const [fruits, setFruits] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const debouncedSearchTerm = useDebounce(searchTerm, 1000);

  useEffect(() => {
    const fetchFruits = async (query) => {
      try {
        const response = await axios.get(`https://dummyjson.com/recipes/search?q=${query}`);
        //console.log(response.data.recipes);
        const fruitNames = response.data.recipes.map(fruit => fruit.name); // Adjust based on actual API response structure
        setFruits(fruitNames);
      } catch (error) {
        console.error("Error fetching the fruit data:", error);
      }
    };

    if (debouncedSearchTerm) {
      fetchFruits(debouncedSearchTerm);
    } else {
      setFruits([]);
    }
  }, [debouncedSearchTerm]);

  return (
    <div className='container'>
      <input 
        type="text" 
        value={searchTerm} 
        onChange={(e) => setSearchTerm(e.target.value)} 
        placeholder="Type Here ...." 
      />
      <ul className='suggestion-list'>
        {fruits.map((fruit, index) => (
          <li key={index}>{fruit}</li>
        ))}
      </ul>
    </div>
  );
};

export default SearchComponent;
