
import './App.css';
import React from 'react';
import logo from './logo.svg';


function App() {
	return (
		<div>
			<nav className="navbar background">
				<ul className="nav-list">
					<div className="logo">
						<img src={logo} className="App-logo" alt="logo" />
					</div>
				</ul>

				<div className="rightNav">
          <li><a href="#Account">Account</a></li>
					<li><a href="#Chat">Chat</a></li>
					<li><a href="#Buy">Buy</a></li>
					<li><a href='#Sell'>Sell</a></li>
          <li><a href='#Rent'>Rent</a></li>
          <li><a href='#Exchange'>Exchange</a></li>
          <li></li>
					<input type="text" name="search" id="search" />
					<button className="btn btn-sm">Search</button>
				</div>
			</nav>
            
            {/* the rest of your component */}
		</div>
	)
}

export default App


// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
