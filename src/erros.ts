import { Error } from "./protocols";

export function erros(): Error{
    return{
        name:"Aplication Error",
        message:"something is wrong"
    }
}