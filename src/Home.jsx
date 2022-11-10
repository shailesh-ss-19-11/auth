import React from 'react';

const Home = () => {

    const logout = ()=>{
        localStorage.clear();
        window.location.reload();
    }
    return (
        <div>
            hello
            <button onClick={logout}>logout</button>
        </div>
    );
}

export default Home;
