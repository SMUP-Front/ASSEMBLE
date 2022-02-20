import React from "react";
import { atom, selector } from "recoil";

export type LoginType = {
  deviceToken: string;
  email: string;
  password: string;
};

export const LoginState = atom<LoginType>({
  key: "LoginState",
  default: {
    deviceToken: "",
    email: "",
    password: "",
  },
});
