import React from 'react';

export default function Dropdown({options, label, selected, onSelectedChange}) {
    const renderedOptions = options.map(option => {
        return (
            <div key={option.value} onClick={() => onOptionClick(option.value)} className='item'>
                {option.label}
            </div>
        );
    });

    const onOptionClick = (value) => {
        onSelectedChange(value);
    }

    return (
        <div className='ui form'>
            <div className='field'>
                <label className='label'>
                    {label}
                </label>
                <div className='ui selection dropdown visible active'>
                    <i className='dropdown icon'></i>
                    <div className='text'>{selected.label}</div>
                    <div className='menu visible transition'>
                        {renderedOptions}
                    </div>
                </div>
            </div>
        </div>
    )
}