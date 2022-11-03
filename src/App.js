import React, {useState} from "react";
import Accordion from "./components/Accordion";
import Search from "./components/Search";
import Dropdown from "./components/Dropdown";
import Translate from "./components/Translate";
import Route from "./components/Route";
import Header from "./components/Header";

const items = [
    {
        title: 'What is React?',
        content: 'React is a front-end JS library.'
    },
    {
        title: 'Why use React?',
        content: 'React is a most popular JS library.'
    },
    {
        title: 'How do you use React?',
        content: 'You can use React by creating components.'
    }
];

const options = [
    {
        label: 'The color red',
        value: 'red'
    },
    {
        label: 'The color green',
        value: 'green'
    },
    {
        label: 'The color blue',
        value: 'blue'
    }
]

export default function App() {
    const [selected, setSelected] = useState(options[0]);

    return (
        <div>   
            <Header/>   
            <Route path='/'>
                <Accordion items={items}/>
            </Route>
            <Route path='/list'>
                <Search/>
            </Route>
            <Route path='/dropdown'>
                <Dropdown options={options} label='Select color' selected={selected} onSelectedChange={setSelected}/>
            </Route>
            <Route path='/translate'>
                <Translate/>
            </Route>
        </div>
    )
};