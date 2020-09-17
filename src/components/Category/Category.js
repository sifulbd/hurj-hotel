import React, { useContext } from 'react';
import CategoryDetails from '../CategoryDetails/CategoryDetails';
import { CatergoryContent } from '../../App';

const Category = () => {
    const [category, setCategory] = useContext(CatergoryContent);
    return (
        <div>
            <button onClick={ ()=> setCategory('single')}> Power </button>
            <button onClick={ ()=> setCategory('double')} >nonPower</button>
            <button onClick={ ()=> setCategory('family')} >anotherPower</button>
            
        </div>
    );
};

export default Category;