import React, { useContext, useState, useEffect } from 'react';
import { AppContext } from '../context/AppContext';

const Budget = () => {
    const { budget, dispatch, remaining, currency } = useContext(AppContext);
    const [newBudget, setNewBudget] = useState(budget);

    // Use useEffect to update newBudget when the budget from context changes
    useEffect(() => {
        setNewBudget(budget);
    }, [budget]);

    const handleBudgetChange = (event) => {
        setNewBudget(event.target.value);
    }

    const handleSaveBudget = () => {
        if (newBudget < remaining) {
            alert("Cannot set a budget lower than the total expenses!");
        } else {
            dispatch({ type: 'SET_BUDGET', payload: newBudget });
        }
    }

    return (
        <div className='alert alert-secondary'>
            <span>Budget: {currency}</span>
            <input type="number" step="10" value={newBudget} onChange={handleBudgetChange} />
            <button onClick={handleSaveBudget}>Save</button>
        </div>
    );
};

export default Budget;
