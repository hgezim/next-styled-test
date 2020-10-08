import { Fragment } from 'react';
import react from "react";
import _JSXStyle from 'styled-jsx/style'

const ChildComponent = () => (
    <>
        <h1>I'm the child header</h1>
        <style jsx>{`
            h1 {
                color: green;
            }`
        }</style>
    </>
);

export default ChildComponent;
