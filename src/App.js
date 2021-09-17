import React, { useState, useEffect } from 'react'
import { Route, Link, Switch } from "react-router-dom";
import Home from './Home';
import PizzaForm from './pizza';
import schema from './formSchema';
import axios from 'axios';
import * as yup from 'yup';


const initialFormValues = {
  name: '',
  size: '',
  sauce: '',
  spIns: '',
  beef: false,
  bacon: false,
  chicken: false,
  sausage: false,
  pepperoni: false,
  meatball: false,
  salami: false,
  steak: false,
  onions: false,
  peppers: false,
  olives: false,
}

const initialFormErrors = {
  name: '',
  size: '',
  sauce: '',
}
const initialOrders = [];
const initialDisabled = true;

export default function App() {
  const [orders, setOrders] = useState(initialOrders)
  const [formValues, setFormValues] = useState(initialFormValues)
  const [formErrors, setFormErrors] = useState(initialFormErrors)
  const [disabled, setDisabled] = useState(initialDisabled)

  const getOrders = () => {
    axios.get('https://reqres.in/api/orders')
      .then(res => {
        setOrders(res.data);
      }).catch(err => console.error(err))
  }

  const postNewOrder = newOrder => {
    axios.post('https://reqres.in/api/orders', newOrder)
      .then(res => {
        setOrders([res.data, ...orders]);
        setFormValues(initialFormValues);
      }).catch(err => {
        console.error(err);
        setFormValues(initialFormValues);
      })
  }

  const validate = (name, value) => {
    yup.reach(schema, name)
      .validate(value)
      .then(() => setFormErrors({...formErrors, [name]: ''}))
      .catch(err => setFormErrors({ ...formErrors, [name]: err.errors[0]}))
  }

  const inputChange = (name, value) => {
    validate(name, value);
    setFormValues({
      ...formValues,
      [name]: value
    })
  }

  const formSubmit = () => {
    const newOrder = {
      name: formValues.name.trim(),
      size: formValues.size.trim(),
      sauce: formValues.sauce.trim(),
      spIns: formValues.spIns.trim(),     
      sides: ['beef', 'bacon', 'chicken', 'sausage', 'pepperoni', 'meatball', 'salami', 'steak', 'onions', 'peppers', 'olives'].filter(sides => !!formValues[sides])
    }
    postNewOrder(newOrder);
  }

  useEffect(() => {
    schema.isValid(formValues).then(valid => setDisabled(!valid))
  }, [formValues])
 
  return (
    <div className='App'>
      <nav>
        <h1 className='store-header'>Lambda Eats</h1>
        <div className='nav-links'>
          <Link to="/">Home</Link>
          <Link to="/pizza">Order Pizza</Link>
        </div>
      </nav>
      <Switch>
        <Route path="/pizza">
          <PizzaForm
            values={formValues}
            change={inputChange}
            submit={formSubmit}
            disabled={disabled}
            errors={formErrors}
          />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </div>
  );
};
