import { Fragment } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavigationBar from "../components/navigationBar";
import useAuth from "../hooks/useAuth";
import Agendar from "../pages/agendar";
import Cadastro from "../pages/cadastro";
import Galeria from "../pages/galeria";
import Home from "../pages/home";
import ListAgendamentos from "../pages/listagens/listAgendamentos";
import ListConsultas from "../pages/listagens/listConsultas";
import ListEnredecos from "../pages/listagens/listEnderecos";
import ListUsers from "../pages/listagens/listUsers";
import Signin from "../pages/signin";

const RoutesApp = () => {
  const Private = ({ Item }) => {
    const { signed } = useAuth();

    if (signed) {
      return <Item />;
    } else {
      window.location.href = "/";
    }
  };

  return (
    <BrowserRouter>
      <Fragment>
        <NavigationBar>
          <Routes>
            <Route exact path="/home" element={<Home />}></Route>
            <Route exact path="/galeria" element={<Galeria />}></Route>
            <Route exact path="/agendar" element={<Agendar />}></Route>
            <Route
              exact
              path="/cadastro"
              element={<Private Item={Cadastro} />}
            ></Route>
            <Route
              exact
              path="/listagens/:typeUser"
              element={<Private Item={ListUsers} />}
            ></Route>
            <Route
              exact
              path="/listagens/endereco"
              element={<Private Item={ListEnredecos} />}
            ></Route>
            <Route
              exact
              path="/listagens/agendamentos"
              element={<Private Item={ListAgendamentos} />}
            ></Route>
            <Route
              exact
              path="/listagens/agendamentos/:medico"
              element={<Private Item={ListConsultas} />}
            ></Route>

            <Route exact path="/" element={<Signin />}></Route>
            <Route path="*" element={<Signin />}></Route>
          </Routes>
        </NavigationBar>
      </Fragment>
    </BrowserRouter>
  );
};

export default RoutesApp;
