import { RoomType } from '../../app/room-type.enum'

export class ReservationModel {
    arrivalDate: Date;
    departureDate: Date;
    numGuests: number;
    requests: string;
    firstName: string;
    lastName: string;
    phoneNumber: string;
    emailAddress: string;
    roomType: RoomType;
}
