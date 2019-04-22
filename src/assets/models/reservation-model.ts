import { RoomType } from '../../app/room-type.enum';

export class ReservationModel {
    arrDate: Date;
    depDate: Date;
    numGuests: number;
    requests: string;
    firstName: string;
    lastName: string;
    phone: string;
    email: string;
    roomType: string;

    constructor(arrivalDate: Date, departureDate: Date, numGuests: number, requests: string,
        firstName: string, lastName: string, phone: string, email: string, roomType: string) {
            this.arrDate = arrivalDate;
            this.depDate = departureDate;
            this.numGuests = numGuests;
            this.requests = requests;
            this.firstName = firstName;
            this.lastName = lastName;
            this.phone = phone;
            this.email = email;
            this.roomType = roomType;
    }
}
