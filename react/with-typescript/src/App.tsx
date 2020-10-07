import React, { useState } from 'react';

// useEffect(() => {
//   return 1;
// })

// interface IState {
//   count: number;
// }

// const initialState: IState = { count: 0 }

// type ActionTypes = { type: 'INCR', payload?: number } | { type: 'DECR', payload?: number }

// function reducer(state: IState = initialState, action: ActionTypes) {
//   switch(action.type) {
//     case 'INCR':
//       return {
//         count: state.count + (action.payload || 0)
//       }
//   }
// }

// const [state, dispatch] = useReducer(reducer, initialState)

// const ref = useRef<HTMLInputElement>(null)

// ref.focus()

// <input ref={ref}>

const Counter = () => {
  const [count, setCount] = useState<number>(0)

  return (
    <Button onClick={() => setCount(prevCount => prevCount + 1)}>{count}</Button>
  )
}

const Button: React.FC<{ children: string | number, onClick?: () => void }> = ({ children, onClick }) => {
  return <button onClick={onClick}>{children}</button>
}

interface IGreetProps {
  name: string;
}

// const Greet = ({ name }: { name: string }) => {
const Greet = ({ name }: IGreetProps) => {
  return (
    <h1>hola {name}</h1>
  )
}

// class Greet extends React.Component<IProps, IState> {}

const App: React.FC = () => {
  return (
    <div className="App">
      <Greet name="Maria" />
      <Button>click</Button>
      <Counter />
    </div>
  );
}

export default App;
