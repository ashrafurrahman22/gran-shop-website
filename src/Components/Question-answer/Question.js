import React from 'react';
import './Question.css'

const Question = () => {
    return (
        <div>
            <h3 className='question'>How does React Work?</h3>
            <p className='answer'><b>Answer: </b> React is a Javascript library to make the best user interface. React works in declarative code.   
when we write down a code in react as components, react creates a virtual dom and shows us the real dom.  And then when we change anything in the components, react get the changed and give us the changed interface. That's how react works. </p>
            <h3 className='question' >What is the difference between Props and state?</h3>
            <p className='answer'> <b>Answer: </b> Props and State are two different things in React js.
The main difference between props and state is that props are controlled by whatever renders the component while state is controlled by the components itself. Props are read-only, on the other hand State changes can be asynchronous. Props cannot be modified, but state can be modified using this.setState   </p>
        </div>
    );
};

export default Question;