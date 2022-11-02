import React, {useState} from 'react';
import Dropdown from './Dropdown';
import Convert from './Convert';

const options = [
    {
        label: 'Polish',
        value: 'pl'
    },
    {
        label: 'French',
        value: 'fr'
    },
    {
        label: 'German',
        value: 'de'
    }
]

export default function Translate() {
    const [language, setLanguage] = useState(options[0]);
    const [text, setText] = useState('');

    return (
        <div>
            <div className="ui form">
                <div className="field">
                    <label>Enter Text</label>
                    <input type="text" onChange={event => {
                        setText(event.target.value);
                    }}/>
                </div>
            </div>
            <Dropdown options={options} selected={language} onSelectedChange={setLanguage} label="Select language"/>
            <hr/>
            <h3 className='ui header'>Output: </h3>
            <Convert text={text} language={language}/>
        </div>
    )
}