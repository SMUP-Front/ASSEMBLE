import React from "react";
import { atom, selector } from "recoil";

export type SignUpStateType = {
  emailToken: string;
  firstName: string;
  lastName: string;
  gender: string;
  birth: string;
  password: string;
  dept: string;
  grade: number;
  classNum: number;
  number: number;
  ent: number;
};

export const SignUpState = atom<SignUpStateType>({
  key: "SignUpState",
  default: {
    emailToken: "",
    firstName: "",
    lastName: "",
    gender: "", 
    birth: "",
    password: "",
    dept: "",
    grade: 0,
    classNum: 0,
    number: 0,
    ent: 0,
  },
});
