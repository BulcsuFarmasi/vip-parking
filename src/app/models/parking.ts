import { Client } from './client';

export interface Parking {
    client:Client;
    startTime:Date;
    endTime:Date;
    licenceNumber:string;
}