import React from 'react'


export default function Screen({val}) {
    return (
        <div className="bg-white rounded-lg p-3 overflow-hidden">
            <span>{val}</span>
            <span className='block'>update at input</span>
        </div>
    )
}