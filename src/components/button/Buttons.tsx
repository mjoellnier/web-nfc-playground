import * as React from "react";
import "./buttonStyle.scss";
import { Link } from "react-router-dom";

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
