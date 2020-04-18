import * as React from "react";
import "./buttonStyle.scss";
import { Link, useHistory } from "react-router-dom";
import { ReactComponent as BackChevron } from "../../assets/images/chevron-left.svg";

export const MenuButton = ({
  text,
  target,
}: {
  text: string;
  target: string;
}) => {
  return (
    <Link to={target} className="main-menu-button-wrapper">
      <div className="main-menu-button">{text}</div>
    </Link>
  );
};

export const ActionButton = ({
  text,
  action,
}: {
  text: string;
  action: Function;
}) => {
  return (
    <div onClick={() => action()} className="main-menu-button-wrapper">
      <div className="main-menu-button">{text}</div>
    </div>
  );
};

export const BackButton = () => {
  const history = useHistory();

  return (
    <div className="back-button-wrapper" onClick={() => history.push("/")}>
      <BackChevron className="back-button-chevron" />
      <p>Home</p>
    </div>
  );
};
