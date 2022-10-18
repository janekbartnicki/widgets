import React, {useState} from 'react';

export default function Search() {
    const [searchTerm, setSearchTerm] = useState('');

    const onInputChange = term => {
        setSearchTerm(term);
        console.log(term);
    }

    return (
        <div>
            <div className='ui form'>
                <div className='field'>
                    <input type="text" placeholder='Enter search term...' value={searchTerm} onChange={event => onInputChange(event.target.value)}/>
                </div>
            </div>
        </div>
    );
}