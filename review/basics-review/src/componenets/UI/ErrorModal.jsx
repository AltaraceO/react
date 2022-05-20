import React from "react";
import { Card } from "./Card";
import { Button } from "./Button";
import classes from "./ErrorModal.module.css";

export const ErrorModal = ({ title, message }) => {
  return (
    <Card className={classes.modal}>
      <header className={classes.header}>
        <h2>{title}</h2>
      </header>
      <div className={classes.content}>
        <p>{message}</p>
      </div>
      <footer className={classes.actions}>
        <Button>Okay</Button>
      </footer>
    </Card>
  );
};