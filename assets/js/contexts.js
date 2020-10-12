import React, { useEffect, useState } from "react";
import { getAccess, refresh, setAccess, setRefresh } from "../js/components/collections/globalMessaging";

const AuthContext = React.createContext({});

function AuthProvider(props) {
  const [notes, setNotes] = useState("");
  const [isLogged, setIsLogged] = useState(false);

  // TODO: use Effect to fetch access token using refresh token
  useEffect(() => {
    if (!!getAccess()) {
      getCollection();
    }
  }, [getAccess()]);

  function getCollection() {
    //fetch tweet data dynamically display it
    fetch("/api/collection", {
      headers: {
        Authorization: `${getAccess()}`,
      },
      mode: "cors",
    })
      .then((res) => res.json())
      .then((payload) => {
        setNotes(payload.user);
        setIsLogged(true);
      })
      .catch((error) => {
        // TODO: catch 401 expired tokens
        console.error(error);
        refreshSession();
      });
  }
  function refreshSession() {
    //TODO: implement persistent login
  }
  return (<AuthContext.Provider value={{notes, isLogged}} >
    {props.children}
  </AuthContext.Provider>);
}

export { AuthContext, AuthProvider };
