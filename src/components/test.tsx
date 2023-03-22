// Step 1: Import React. This lets you use JSX inside your .tsx file.
import * as React from 'react';

/* Step 2: Define your component. Note that your
component name should start with a capital letter. */
const MyComponent: React.FC = () => {
    return (
        <h1>Hi, welcome to my site!</h1>
    );
}

/* Step 3: Export your component so it
can be used by other parts of your app. */
export default MyComponent;