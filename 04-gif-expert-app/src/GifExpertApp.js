import React, { useState } from 'react';
import AddCategory from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

const GifExpertApp = ({ defaultCategories = [] }) => {

  const [categories, setCategories] = useState(defaultCategories);
  // const [categories, setCategories] = useState(['One Punch']);

  // const handleAdd = () => {
  //   //Metodo 1
  //   // const newCategories = categories.concat("Ranma 1/2");
  //   // setCategories(newCategories);
    
  //   //Metodo 2
  //   // setCategories( [...categories, 'HunterXHunter'] );
    
  //   //Metodo 3
  //   setCategories( cats => [...cats, 'HunterXHunter'] );
  // };

  return(
    <>
      <h2>GifExpertApp</h2>
      <AddCategory setCategories={ setCategories } />
      <hr/>

      <ol>
        {
          categories.map( category =>(
            <GifGrid
              key={ category }
              category={ category }
            />
          ))
        }
      </ol>
    </>
  )
}

export default GifExpertApp;