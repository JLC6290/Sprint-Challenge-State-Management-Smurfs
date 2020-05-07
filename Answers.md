1. What problem does the context API help solve?

**Context provides global state management. It very simply allows you to pass props to nested components without prop drilling.**

1. In your own words, describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?

**Actions are objects with two properties, which are passed to reducers explicitly calling for a particular way to update state. Reducers are functions who have the exclusive ability to update state. The store is the component prop that is shared at the root of the react application and provided to the entire application, creating a single source of 'truth'.**

1. What is the difference between Application state and Component state? When would be a good time to use one over the other?

**Component state is the state known within the scope of a given component. It cannot be read by other components unless it is passed to them. Application state is the state of the entire application and any components within it. State should be provided to components on a need-to-know basis.**

1. Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?

**Redux-thunk provides middleware to Redux enabling asynchronous calls by looking at actions being passed, and if the action is a function it then calls that function.**

1. What is your favorite state management system you've learned and this sprint? Please explain why!

**Redux! The tools provided make the logic of state management much more modular, and clearly defined. And of course, scalability!**
