import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const CurrencyDropdown = () => {
    const { dispatch, currency } = useContext(AppContext);

    const handleCurrencyChange = (event) => {
        const newCurrency = event.target.value;
        dispatch({ type: 'CHG_CURRENCY', payload: newCurrency });
    };

    return (
        <div className="mb-3" style={{ maxWidth: '200px' }}>
            <label htmlFor="currency" className="form-label">Select Currency:</label>
            <select id="currency" value={currency} onChange={handleCurrencyChange} className="form-select bg-success text-white" style={{ borderRadius: '8px' }}>
                <option value="£">Pound (£)</option>
                <option value="$">Dollar ($)</option>
                <option value="€">Euro (€)</option>
            </select>
        </div>
        // <div className="dropdown">
        //     <button
        //         className="btn btn-success dropdown-toggle"
        //         type="button"
        //         id="currencyDropdown"
        //         data-bs-toggle="dropdown"
        //         aria-haspopup="true"
        //         aria-expanded="false"
        //     >
        //         Select Currency
        //     </button>
        //     <ul className="dropdown-menu" aria-labelledby="currencyDropdown">
        //         <li className={`dropdown-item ${currency === '£' && 'active'}`} onClick={() => handleCurrencyChange('£')}>
        //             Pound (£)
        //         </li>
        //         <li className={`dropdown-item ${currency === '$' && 'active'}`} onClick={() => handleCurrencyChange('$')}>
        //             Dollar ($)
        //         </li>
        //         <li className={`dropdown-item ${currency === '€' && 'active'}`} onClick={() => handleCurrencyChange('€')}>
        //             Euro (€)
        //         </li>
        //         {/* Add other currency options as needed */}
        //     </ul>
        // </div>
    );
};

export default CurrencyDropdown;