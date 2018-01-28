import React from 'react'

export const NoMatch = ({ location }) => (
    <div className="w3-content w3-justify w3-text-grey w3-padding-64">
        <h3>No match for <code>{location.pathname}</code></h3>
    </div>
)
