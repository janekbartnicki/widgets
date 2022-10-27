import React, {useState, useEffect} from 'react';
import axios from 'axios';

export default function Search() {
    const [searchTerm, setSearchTerm] = useState('Programming');
    const [results, setResults] = useState([]);
    const [debouncedSearchTerm, setDebounceSearchTerm] = useState(searchTerm);

    useEffect(() => {
        const timeoutId = setTimeout(() => {
            setDebounceSearchTerm(searchTerm)
        }, 500);

        return () => clearTimeout(timeoutId);
    }, [searchTerm]);

    useEffect(() => {
        (async () => {
            const {data} = await axios.get('https://en.wikipedia.org/w/api.php', {
                params: {
                    action: 'query',
                    list: 'search',
                    format: 'json',
                    origin: '*',
                    srsearch: debouncedSearchTerm
                }
            });
            setResults(data.query.search);
        })();
    }, [debouncedSearchTerm])

    const onInputChange = term => setSearchTerm(term);

    const renderedResults = results.map(result => {
        return (
            <div className='item' key={result.pageid}>
                <div className='right floated content'>
                    <a className='ui button' href={`https://en.wikipedia.org?curid=${result.pageid}`}>Go</a>
                </div>
                <div className='content'>
                    <div className='header'>
                        {result.title}
                    </div>
                    <span dangerouslySetInnerHTML={{__html: result.snippet}}></span>
                </div>
            </div>
        )
    })

    return (
        <div>
            <div className='ui form'>
                <div className='field'>
                    <input type="text" placeholder='Enter search term...' value={searchTerm} onChange={event => onInputChange(event.target.value)}/>
                </div>
            </div>
            <div className='ui celled list'>{renderedResults}</div>
        </div>
    );
}