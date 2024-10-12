import { useState } from "react";
import { AddCategory, GifGrid } from "../../reusable-components";
import '../styles/GifsHeroes.css';

export const GifsHeroes = () => {

  const [categories, setCategories] = useState(['Spider Man']);

  const onAddCategory = (NewCategory) => {

    if (categories.includes(NewCategory)) return;
    setCategories([NewCategory, ...categories]);
  }

  return (
    <>

      <AddCategory
        onNewCategory={onAddCategory}
      />

      {
        categories.map((category) => (
          <GifGrid
            key={category}
            category={category}
          />
        ))
      }
    </>
  )
}
