import React, { usestate } from 'react';

const Authenticate = ({token}) => {
    const [successMessage, setSuccessMessage] = usestate(null);
    const [error, setError] = usestate(null);

    async function handleClick() {
        try {
          const response = await fetch(
            "https://fsa-jwt-practice.herokuapp.com/signup",
             {
               method: "GET",
               headers: {
                 "Content-Type": "application/json",
                 Authorization: `Bearer ${token}`,
               }   
              }
           );
    
          const data = await response.json();
          setSuccessMessage(data.message);
          setError(null);
        } catch (error) {
          setError(error.message);
        }
      }

    return (
        <div>
            <h2>Authenticate !</h2>
            {successMessage && <p>{successMessage}</p>}
            {error && <p>{error}</p>}
            <button onClick={handleClick}>Authenticate Token!</button>
        </div>
    ) 
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