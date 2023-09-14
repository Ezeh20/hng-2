import React from 'react'

const Details = ({ params }) => {
    const { id } = params
    return (
        <div>{id}</div>
    )
}

export default Details