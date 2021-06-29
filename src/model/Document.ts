import { Measure } from "./Measure";

export class Document{
    public id:string;
    public internal_name: string;
    public measures: Measure[];

    constructor() {
        this.id='';
        this.internal_name='';
        this.measures=[];

    }
}

