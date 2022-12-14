import { useEffect } from "react";
import { useState } from "react";
import { createContext } from "react";

export const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState();
  const [statusUser, setStatusUser] = useState(true);

  useEffect(() => {
    const user_token = localStorage.getItem("user_token");
    const user_nome = localStorage.getItem("nameUser");

    if (user_nome) {
      setUser({ nome: user_nome, user_id: user_token });
    } else {
      setStatusUser(false);
    }
  }, []);

  const signin = async (email, password) => {
    await fetch("http://localhost:4001/api/login/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ email, password })
    })
      .then(response => {
        if (response.status === 404) {
          setStatusUser(false);
        }
        return response;
      })
      .then(response => response.json())
      .then(data => {
        if (data.usuario) {
          setStatusUser(true);
          localStorage.setItem("user_token", data.usuario.id);
          localStorage.setItem("nameUser", data.usuario.nome);
          localStorage.setItem("type", data.tipo);
          setUser({ nome: data.usuario.nome, user_id: data.usuario.id });
        }
      });

    return statusUser;
  };

  const signup = async (email, password) => {
    await fetch("http://localhost:4001/api/usuario", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ email, password })
    }).then(response => {
      if (response.status === 400) {
        return "Usuario não cadastrado";
      } else if (response.ok) {
        const data = JSON.parse(response);
      }
    });
  };

  const signout = () => {
    setStatusUser(false);
    setUser(null);
    localStorage.removeItem("user_token");
    localStorage.removeItem("nameUser");
  };

  return (
    <AuthContext.Provider
      value={{ user, signed: !!statusUser, signin, signup, signout }}
    >
      {children}
    </AuthContext.Provider>
  );
};
