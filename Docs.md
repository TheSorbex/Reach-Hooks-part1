No Breaking Changes:
1)There are no plans to remove classes from React.
2)Hooks don’t replace your knowledge of React concepts. But its connected.

Motivation:
1)It’s hard to reuse stateful logic between components
2)Complex components become hard to understand
3)Classes confuse both people and machines. For example, classes don’t minify very well, and they make hot reloading flaky and unreliable.

No problems to move on Hooks, you can connect class components and hooks.

Basic Hooks: 
  useState
  useEffect
  useContext

useState()

It’s similar to this.setState in a class, except it doesn’t merge the old and new state together.
Example

Hooks don’t work inside classes — they let you use React without classes.

The only argument to the useState() Hook is the initial state.

useState return a pair of values: the current state and a function that updates it.

Unlike this.setState in a class, updating a state variable always replaces it instead of merging it.

useEffect - Lifecycle Method

If you want to run an effect and clean it up only once (on mount and unmount), you can pass an empty array ([]) as a second argument. 

useEffect can return function, which will called like componentWillUnMount

We recommend using the exhaustive-deps rule as part of our eslint-plugin-react-hooks package. It warns when dependencies are specified incorrectly and suggests a fix.

https://reactjs.org/docs/hooks-faq.html#what-exactly-do-the-lint-rules-enforce