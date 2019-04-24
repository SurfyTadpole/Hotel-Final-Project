export class ReservationDto {
    _id: string;
    arrDate: Date;
    depDate: Date;
    numGuests: number;
    requests: string;
    firstName: string;
    lastName: string;
    phone: string;
    email: string;
    roomType: string;

    constructor(_id: string, arrivalDate: Date, departureDate: Date, numGuests: number, requests: string,
        firstName: string, lastName: string, phone: string, email: string, roomType: string) {
            this._id = _id;
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
