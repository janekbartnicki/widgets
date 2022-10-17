import React from "react";
import Accordion from "./components/Accordion";

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
]

export default function App() {
    return (
        <div>
            <Accordion items={items}/>
        </div>
    )
};