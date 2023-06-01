import React, { useState } from 'react';
import Card from './Card';

function Form() {
    const [name, setName] = useState('');
    const [color, setColor] = useState('');
    const [showCard, setShowCard] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        const enteredName = event.target.name.value.trim();
        const enteredColor = event.target.color.value.trim();

        if (enteredName.length < 3){
            setErrorMessage('Por favor chequea que la información sea correcta');
            return;
        }

        if (enteredColor.length < 6) {
            setErrorMessage('Por favor chequea que la información sea correcta');
            return;
        }

        setName(enteredName);
        setColor(enteredColor);
        setShowCard(true);
        setErrorMessage('');
    };

    return (
        <div className='form-container'>
            <h2>Bienvenido al formulario</h2>
            <form onSubmit={handleSubmit}>
                <input type='text' name='name' autoComplete='off' placeholder="Ingrese su nombre"/>
                <input type='text' name='color' autoComplete='off' placeholder="Elija un color" />
                <button type='submit'>Enviar</button>
            </form>
            {errorMessage && <p className='error-message'>{errorMessage}</p>}
            {showCard && <Card name={name} color={color} />}
        </div>
    )
}

export default Form;
