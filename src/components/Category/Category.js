import React, { useContext } from 'react';
import CategoryDetails from '../CategoryDetails/CategoryDetails';
import { CatergoryContent } from '../../App';

const Category = () => {
    const [category, setCategory] = useContext(CatergoryContent);
    return (
        <div>
            <button onClick={ ()=> setCategory('single')}> Single Room </button>
            <button onClick={ ()=> setCategory('double')} >Double Room</button>
            <button onClick={ ()=> setCategory('family')} >Family Room</button>
            
        </div>
    );
};

export default Category;