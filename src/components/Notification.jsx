import { Fragment } from "react";
import Alert from "react-bootstrap/Alert";

const Notification = ({ type = "success", msg = "Sucesso" }) => {
  return (
    <Fragment>
      <Alert
        key={type}
        variant={type}
        style={{ position: "fixed", top: 75, right: 50 }}
      >
        {msg}
      </Alert>
    </Fragment>
  );
};

export default Notification;
