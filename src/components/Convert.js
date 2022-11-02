import React, {useState, useEffect} from "react";

export default function Convert({language, text}) {

    useEffect(() => {
        console.log('chuj');
    }, [language, text]);

    return <div>Test</div>
}