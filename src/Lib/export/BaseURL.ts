import React from "react";
import { atom, selector } from "recoil";

export const baseURL = atom<string>({
    key:"baseURL",
    default:"http://3.36.108.34/"
})