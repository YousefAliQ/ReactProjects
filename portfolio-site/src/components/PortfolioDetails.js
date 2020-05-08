import React from 'react';

const PortfolioDetails = (props) => (
    <div>
        <p>Id of : {props.match.params.id}</p>
    </div>
);

export default PortfolioDetails;