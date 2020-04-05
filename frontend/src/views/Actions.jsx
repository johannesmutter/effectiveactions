import React from "react";
import FormAction from "../components/FormAction";

const Actions = ({ match }) => {
  let Comp;
  if (match.params.type === "create") {
    Comp = FormAction;
  }

  return <Comp />;
};

export default Actions;
