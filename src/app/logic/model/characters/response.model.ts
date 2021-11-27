import { Character } from "./character.model";
import { Info } from "./info.model";

export class Response{
    public info: Info =  new Info();
    public results: Character[] = [];
}