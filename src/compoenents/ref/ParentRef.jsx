import React, { useRef } from 'react';
import ChildRef from './ChildRef';

function ParentRef() {
    const myRef = useRef();

    const onClick = () => {
        myRef.current.focus();
        myRef.current.placeholder = "Button Clicked!";
    }

    return (
        <div>
            <div style={{ border: "1px solid green" }}>
                <h4>Parent Ref:</h4>
                <ChildRef ref={myRef} />
                <button onClick={onClick}>Click</button>
            </div>
        </div>
    )
}

export default ParentRef;