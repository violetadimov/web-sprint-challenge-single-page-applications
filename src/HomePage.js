import React from 'react'
import { useHistory } from 'react-router-dom' 

const HomePage = props => {
    const history = useHistory()
    const routeToShop = () => {
        console.log(history)
        history.push('/pizza')
      }
    return (
        <div className='homepage'>
            <img
                className='home-image'
                src='https://thewebminer.com/blog/wp-content/uploads/2015/08/pizza-1.jpg'
                alt='pizza'
            />
            <button
                onClick={routeToShop}
                className='order-button'
            >
                Build your Pizza
            </button>
        </div>
    );
};


export default HomePage;