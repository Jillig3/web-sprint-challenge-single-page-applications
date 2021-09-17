import React from 'react'

export default function PizzaForm(props) {
    const {
        values,
        submit,
        change,
        disabled,
        errors,
    } = props

const onSubmit = evt => {
    evt.preventDefault()
    submit()
}

const onChange = evt => {
    const { name, value, checked, type } = evt.target;
    const valueToUse = type === 'checkbox' ? checked : value;
    change(name, valueToUse);
}

return (
    <form className='pizza-form' onSubmit={onSubmit}>
        <div className='pizza-creation'>
            <h2>Create Your Masterpiece</h2>
            <button disabled={disabled}>Submit</button>
            <div className='errors'>
               <div>{errors.name}</div>
               <div>{errors.size}</div>
               <div>{errors.sauce}</div>
            </div>
        </div>
        <div>
            <h2>Name for your order</h2>  
            <label>Name
                <input
                    value={values.name}
                    onChange={onChange}
                    name='name-input'
                    type='text'
                />    
            </label>
            <h2>Pizza Size</h2> 
            <label>Pizza Size
                <select
                    onChange={onChange}
                    value={values.size}
                    name='size-dropdown'
                >
                    <option value=''>-- Select Pizza Size --</option>
                    <option value='small'>Little Guy</option>
                    <option value='medium'>Not Little Guy</option>    
                    <option value='large'>Guy</option>
                    <option value='xlarge'>Big Boi</option>
                    <option value='xxlarge'>Bigger Boi</option> 
                    <option value='largest'>Thiccc Pizza</option>  
                </select>    
            </label>
            <h2>Pizza Sauce</h2> 
            <label>Red
                <input
                    type="radio"
                    name="sauce"
                    value="red"
                    onChange={onChange}
                    checked={values.sauce === 'red'}
                />    
            </label>
            <label>BBQ
                <input
                    type="radio"
                    name="sauce"
                    value="bbq"
                    onChange={onChange}
                    checked={values.sauce === 'bbq'}
                />    
            </label>
            <label>Alfredo
                <input
                    type="radio"
                    name="sauce"
                    value="alfredo"
                    onChange={onChange}
                    checked={values.sauce === 'alfredo'}
                />    
            </label>
        </div>
        <div className='checkboxes'>
            <h2>sides</h2>
            <label>Beef
                <input
                type="checkbox"
                name="beef"
                checked={values.beef}
                onChange={onChange}
                />
            </label>
            <label>Bacon
            <input
                type="checkbox"
                name="bacon"
                checked={values.bacon}
                onChange={onChange}
                />
            </label>
            <label>chicken
            <input
                type="checkbox"
                name="chicken"
                checked={values.chicken}
                onChange={onChange}
                />
            </label>
            <label>sausage
            <input
                type="checkbox"
                name="sausage"
                checked={values.sausage}
                onChange={onChange}
                />
            </label>
            <label>pepperoni
            <input
                type="checkbox"
                name="pepperoni"
                checked={values.pepperoni}
                onChange={onChange}
                />
            </label>
            <label>meatball
            <input
                type="checkbox"
                name="meatball"
                checked={values.meatball}
                onChange={onChange}
                />
            </label>
            <label>salami
            <input
                type="checkbox"
                name="salami"
                checked={values.salami}
                onChange={onChange}
                />
            </label>
            <label>steak
            <input
                type="checkbox"
                name="steak"
                checked={values.steak}
                onChange={onChange}
                />
            </label>
            <label>onions
            <input
                type="checkbox"
                name="onions"
                checked={values.onions}
                onChange={onChange}
                />
            </label>
            <label>peppers
            <input
                type="checkbox"
                name="peppers"
                checked={values.peppers}
                onChange={onChange}
                />
            </label>
            <label>olives
            <input
                type="checkbox"
                name="olives"
                checked={values.olives}
                onChange={onChange}
                />
            </label>
        </div>
    </form>
)

}
