import React, {useState, useEffect} from 'react';

export default function Search() {
    const [searchTerm, setSearchTerm] = useState('');

    useEffect(() => {
        console.log('Hook fired!');
    }, [searchTerm]);

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