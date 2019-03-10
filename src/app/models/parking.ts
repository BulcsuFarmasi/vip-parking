import { Client } from './client';

export interface Parking {
    id:number;
    client:Client;
    startTime:Date;
    endTime:Date;
    licenceNumber:string;
}