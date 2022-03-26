import React from 'react';

const Question = () => {
    return (
        <div>
            <h3 className='text-center pt-5'>How does React Work?</h3>
            <p className='px-5 py-2'><b>Answer: </b> React is a Javascript library to make the best user interface. React works in declarative code.   
when we write down a code in react as components, react creates a virtual dom and shows us the real dom.  And then when we change anything in the components, react get the changed and give us the changed interface. That's how react works. </p>
            <h3 className='text-center p-3' >What is the difference between Props vs state?</h3>
            <p className='px-5 py-2'> <b>Answer: </b> Props and State are two different things in React js.
The main difference between props and state is that props are controlled by whatever renders the component while state is controlled by the components itself. Props are read-only, on the other hand State changes can be asynchronous. Props cannot be modified, but state can be modified using this.setState   </p>
        </div>
    );
};

export default Question;