import React from 'react'
import { useHistory } from 'react-router-dom'
//import ConfirmationPage from './ConfirmationPage';

const Form = props => {
  const { values, update, checkboxChange, submit, errors } = props

  const history = useHistory()
  const routeToConf = () => {
        //console.log(history)
        history.push('/pizza/confirmation')
  }

  const onSubmit = evt => {
    evt.preventDefault()
    submit()
  }

  const onCheckboxChange = evt => {
    const { name, checked } = evt.target
    checkboxChange(name, checked)
  }

  const onInputChange = evt => {
    const { name, value } = evt.target
    update(name, value)
  }

  return (
      <form onSubmit={onSubmit}>
          <div className='errors'>
            <div>{errors.name}</div>
            <div>{errors.size}</div>
            <div>{errors.sauce}</div>
          </div>
          <h3>Build your pizza</h3>
          <div>
            <div className='sizes'>
              <h4>Choice of size </h4>
              <label>
                <select name='size' value={values.size} onChange={onInputChange}>
                  <option value=''>Select</option>
                  <option value='Small'>Small</option>
                  <option value='Medium'>Medium</option>
                  <option value='Large'>Large</option>
                </select>
              </label>
            </div>
            <div className='sauce'>
              <h4>Choice of sauce</h4>
              <label>
                <input
                  type="radio"
                  name='sauce'
                  value='marinara'
                  checked={values.sauce === 'marinara'}
                  onChange={onInputChange}
                />&nbsp;
                marinara
              </label>
              <label>
                <input
                  type="radio"
                  name='sauce'
                  value='spinach alfredo'
                  checked={values.sauce === 'spinach alfredo'}
                  onChange={onInputChange}
                />&nbsp;
                Spinach alfredo
              </label>
              <label>
                <input
                  type="radio"
                  name='sauce'
                  value='no sauce'
                  checked={values.sauce === 'no sauce'}
                  onChange={onInputChange}
                />&nbsp;
                No sauce
              </label>
            </div>
            <div className='toppings'>
              <h4>Toppings</h4>
              <p>choose up to 4 toppings</p>
              <label>
                <input
                  type="checkbox"
                  name='pepperoni'
                  checked={values.toppings.pepperoni === true}
                  onChange={onCheckboxChange}
                />&nbsp;
                Pepperoni  
              </label>
              <label>
                <input
                  type="checkbox"
                  name='sausage'
                  checked={values.toppings.sausage === true}
                  onChange={onCheckboxChange}
                />&nbsp;
                Sausage  
              </label>
              <label>
                <input
                  type="checkbox"
                  name='chicken'
                  checked={values.toppings.chicken}
                  onChange={onCheckboxChange}
                />&nbsp;
                Grilled chicken  
              </label>
              <label>
                <input
                  type="checkbox"
                  name='onions'
                  checked={values.toppings.onions === true}
                  onChange={onCheckboxChange}
                />&nbsp;
                Onions  
              </label>
            </div>
            <div className='instructions'>
              <h4>Special instructions</h4>
              <label>
                <input
                  type="text"
                  name='instructions'
                  checked={values.instructions}
                  onChange={onInputChange}
                  placeholder="Anything else you'd like to add?"
                /> 
              </label>
            </div>
            <div className='name'>
              <h4>Customer Informations</h4>
              <label> Name &nbsp;
                <input
                  type="text"
                  name='name'
                  checked={values.name}
                  onChange={onInputChange}
                  placeholder="Enter your name"
                /> 
              </label>
            </div>
            <button onClick={routeToConf}>Submit order</button>
          </div>
    </form>
    
  );
};
  export default Form;