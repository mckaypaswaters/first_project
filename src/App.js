import React from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <p>
                    Edit <code>src/App.js</code> and save to reload.
                </p>
                <a
                    className="App-link"
                    href="https://reactjs.org"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Learn React
                </a>
            </header>
        </div>
    );
}

export default App;

// class App extends component {
//     state = {
//         users: [],
//     };

//     componentDidMount() {
//         this.getUsers();
//     }

//     getUsers = (_) => {
//         fetch("http://localhost:3001")
//             .then((response) => console.log(response)) //response.json())
//             .then(({ response }) => this.setState({ users: "response.users" }))
//             .catch((error) => console.log(error));
//     };

//     showUsers = (user) => <div key={user.id}>{user.id}</div>

//     render() {
//         const {users} = this.state;
//         return (
//             <div className="App">{users.map(this.showUsers)}</div>
//         );
//     }
// }

// export default App;