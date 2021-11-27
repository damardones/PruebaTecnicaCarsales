import { Episode } from "./episode.model";
import { Info } from "./info.model";

export class Response{
    public info: Info =  new Info();
    public results: Episode[] = [];
}