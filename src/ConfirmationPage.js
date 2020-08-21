import React from 'react';
import { Link } from 'react-router-dom'

const ConfirmationPage = props => {
  return(
    <div>
        <h2>We received your Order!</h2>
        <Link to='/'><button>Home</button></Link>
        <Link to='/orders'><button>Placed Orders</button></Link>
    </div>
  )
};

export default ConfirmationPage;