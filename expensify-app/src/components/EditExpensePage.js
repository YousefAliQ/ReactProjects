import React from 'react';

const EditExpensePage = (props) => {
    console.log(props);
    return (
        <div>
            you are editing {props.match.params.id}!
        </div>
    )
}

export default EditExpensePage;