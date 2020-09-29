import React, { useContext, useState, useEffect, useLayoutEffect } from 'react';
import Room from '../Room/Room';
import { CatergoryContent } from '../../App';
import CategoryDetails from '../CategoryDetails/CategoryDetails';

const Home = () => {
    const [category, setCategory] = useContext(CatergoryContent);
    
    const [products, setProducts] = useState([]);

    useEffect(() =>{
        const matchProducts = rooms.filter(pd => pd.bedType === category && category.toLowerCase());
        setProducts(matchProducts);
    }, [category]);

    const style = {
        display: 'flex',
        margin: '40px',
        justifyContent: 'space-between'
    }
    const rooms = [
        {
            title: 'Standard Single Room',
            description: 'Standard Single Rooms are designed in open -concept living area and have many facilities.',
            imgUrl: 'https://cdn.jumeirah.com/-/mediadh/dh/hospitality/jumeirah/offers/offer-images/burj-al-arab-presidential-suite-living-room-4-hero.jpg',
            bed: 1,
            capacity: 1,
            bedType: 'single',
            avatar: 'S',
            price: 119
        },
        {
            title: 'Couple Power Room',
            description: 'Superior Double Rooms are perfectly equipped for traveling couples or friends.',
            imgUrl: 'https://cdn.jumeirah.com/-/mediadh/dh/hospitality/jumeirah/offers/offer-images/burj-al-arab-royal-suite-staircase-5-hero.jpg',
            bed: 1,
            capacity: 2,
            bedType: 'double',
            avatar: 'D',
            price: 149
        },
        {
            title: 'Family Capacity Room',
            description: ' Have lots of in-room facilities and are designed in open-concept living area.',
            imgUrl: 'https://cdn.jumeirah.com/-/mediadh/dh/hospitality/jumeirah/hotels/dubai/burj-al-arab-jumeirah/room/presidential-two-bedroom-suite/burj-al-arab-presidential-suite-guest-bedroom_6-4_landscape/burj-al-arab-presidential-suite-guest-bedroom_16-9_landscape.jpg?w=2080',
            bed: 2,
            capacity: 4,
            bedType: 'family',
            avatar: 'F',
            price: 199
        }
    ]
    return (
        <div style={style}>
            <h3>This is shwowing from home {category} {products.map(pd => <CategoryDetails pd={pd}></CategoryDetails>)}</h3>
            {
                products.map(room => <Room key={room.bedType} room={room}></Room>)
            }
        </div>
    );
};

export default Home;