import React, {useState} from 'react';

export default function Dropdown({options, label, selected, onSelectedChange}) {
    const [isOpen, setIsOpen] = useState(false);

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
                <div onClick={() => setIsOpen(!isOpen)} className={`ui selection dropdown ${isOpen ? 'visible active' : ''}`}>
                    <i className='dropdown icon'></i>
                    <div className='text'>{selected.label}</div>
                    <div className={`menu ${isOpen ? 'visible transition' : ''}`}>
                        {renderedOptions}
                    </div>
                </div>
            </div>
        </div>
    )
}