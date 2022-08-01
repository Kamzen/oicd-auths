import { useEffect, useState } from "react";
import "./App.css";
import jwt_decode from 'jwt-decode';

function App() {
  const handleCallBack = (response) => {
    console.log(response);
    const userInfo = jwt_decode(response.credential);

    console.log(userInfo)
  };

  const [init, setInit] = useState(false);
  /* global google */
  useEffect(() => {
    (async () => {
        // eslint-disable-next-line no-unused-expressions, no-undef
        await google.accounts.id.initialize({
          client_id:
            "1020009104978-c9rsv08g134lkva3s6vdva9sm1eq2tpl.apps.googleusercontent.com",
          callback: handleCallBack,
        });
        setInit(true);

      if (init) {
        // eslint-disable-next-line no-unused-expressions, no-undef
        google.accounts.id.renderButton(
          document.getElementById('singin'), {
          theme: "outline",
          size: "small",
        });
      }
      google.accounts.id.prompt()
    })();
  }, [init]);

  return (
    <div className="App">
      <div id="singin" style={{height : '40px'}}>
        Sign In With Google
      </div>
    </div>
  );
}

export default App;
