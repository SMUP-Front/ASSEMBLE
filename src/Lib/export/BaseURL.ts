import React from "react";
import { atom, selector } from "recoil";

export const baseURL = atom<string>({
    key:"baseURL",
    default:"http://3.36.108.34/"
})

type props = {
    path?:any
}
export function baseUrl(path:any){
    if(path){
        const result = "http://3.36.108.34/"+path; 
        return result;
        
    }
    else{
        return "http://3.36.108.34/";
    }
}