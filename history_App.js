import React from 'react';
// Function Component, Props 예제
//import PropTypes from 'prop-types';
// function Food({ name, rating }) {
//   return (
//     <div>
//       <h3>i love {name}</h3>
//       <h4>{rating}/5.0</h4>
//     </div>
//   )
// }
// Food.propTypes = {
//   name: PropTypes.string.isRequired,
//   rating: PropTypes.number.isRequired
// }

// const foodILike = [
//   {
//     id: 1,
//     name: 'kimchi',
//     rating: 5
//   },
//   {
//     id: 2,
//     name: 'ramen',
//     rating: 4.9
//   },
//   {
//     id: 3,
//     name: 'samgiopsal',
//     rating: 4.8
//   },
//   {
//     id: 4,
//     name: 'dubu',
//     rating: 5.5
//   },
//   {
//     id: 5, 
//     name: 'makgooksu',
//     rating: 5.1
//   },
// ];

// function renderFood(dish) {
//   console.log(dish)
//   return <Food name={dish.name} />
// }
// function App() {
//   return (
//     <div className="App">
//       <div>
//         <div></div>
//         <div className="hidden">
//           {/* {foodILike.map(dish => <Food key={dish.id} name={dish.name} rating={dish.rating} />)} */}
//           {/* 위에 주석은 map으로 배열의 객체 반환하는 방법 */}
//           {/* 
//             리스트를 여러개 출력하는 컴포넌트의 경우, 각각 id를 부여하고, key=??.id처럼 고유 id를 각각 주어야한다.
//             react는 각 props가 unique한 key를 가지고 있어야 한다고 함.
//             렌더에는 지장이 없지만, console에 에러 문구가 뜸
//           */}
//           {/* {foodILike.map(renderFood)} */}
//           {/* 위에 주석은 맵의 인자로 함수를 받아와서 출력하는 방법 */}
//         </div>
//       </div>
//     </div>
//   );
// }


// Class Component
{/* 
  Class Component는 return을 하지 않는다.
  function이 아니고, render method를 가지고 있기 때문이다.
*/}
// class App extends React.Component {
//   state = {
//     count: 0
//   };
//   add = () => {
//     this.setState(current => ({
//       count: current.count + 1
//     }));
//   };
//   minus = () => {
//     this.setState(current => ({
//       count: current.count - 1
//     }));
//   };
//   render(){
//     console.log("i'm rendering");
//     return (
//       <div>
//         <h1>The number is {this.state.count}</h1>
//         <button onClick={this.add}>Add</button>
//         <button onClick={this.minus}>Minus</button>
//       </div>
//     )
//   }
// }

export default App;
