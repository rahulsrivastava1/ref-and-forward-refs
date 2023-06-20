import React from 'react';

const ChildRef = React.forwardRef((props, ref) => {
    console.log(props);
    return (
        <div style={{ border: "1px solid red" }}>
            <h3>ChildRef : </h3>
            <input ref={ref} type="text" />
        </div>
    )
});

export default ChildRef