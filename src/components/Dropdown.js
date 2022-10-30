import React from 'react';

export default function Dropdown({options, label, selected, onSelectedChange}) {
    const renderedOptions = options.map(option => {
        if(option.value === selected.value) {
            return null;
        }
        return (
            <div key={option.value} onClick={() => onOptionClick(option)} className='item'>
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
                <div className='ui selection dropdown'>
                    <i className='dropdown icon'></i>
                    <div className='text'>{selected.label}</div>
                    <div className='menu'>
                        {renderedOptions}
                    </div>
                </div>
            </div>
        </div>
    )
}