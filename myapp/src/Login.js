import React, { useState } from 'react';


function Login(props) {

    const [name, setName] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(false);

    const changeName = (e) => {
        setName(e.target.value)
    }

    const changePassword = (e) => {
        setPassword(e.target.value)
    }

    const login = () => {
        if (name === "lindsay" && password === "hotdog") {
            props.setLoggedIn(true)
            setError(false)
            return
        }
        setError(true)
    }

    return (
        <div className="App">
            <header className="App-header">
                <div>
                    <input type="text" value={name} onChange={changeName} />
                </div>
                <div>
                    <input type="password" value={password} onChange={changePassword} />
                </div>
                {error && <div>Invalid username or password</div>}
                <div>
                    <button onClick={login}>Login</button>
                </div>
            </header>
        </div>
    );
}

export default Login;
