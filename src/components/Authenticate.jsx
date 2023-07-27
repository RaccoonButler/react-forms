import React, { usestate } from 'react';

const Authenticate = () => {
    return <h2>Authenticate !</h2>;
};

function App() {
    const [token, setToken] = useState(null);

    return (
        <>
            <SignUpForm token={token} />
            <Authenticate token={token} />
        </>
    );
};

export default Authenticate;