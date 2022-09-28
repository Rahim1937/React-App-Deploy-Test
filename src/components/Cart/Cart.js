import React, { useEffect, useState } from 'react';

const Cart = (props) => {
    const [detail, setDetail] = useState([]);
    const [mid, setMId] = useState(52768)
    console.log(mid)
    useEffect(() =>{
        fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mid}`)
        .then(res => res.json())
        .then(data => setDetail(data.meals))
    }, [mid]);

    setMId(props.id);
    // console.log(detail)
    // const meal = detail.meals[0];
    // // console.log(meal)
    // setLoclaStorage(meal)
    // const setLoclaStorage = ()=> {
    //     console.log(meal)
    // }
    return (
        <div>
            <h1>Thi is cart</h1>
            <p>{detail[0]}</p>
            
        </div>
    );
};

export default Cart;