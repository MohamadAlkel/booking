export interface SearchModel {
    location: string;
    name: string;
    checkin: Date;
    checkout: Date;
}

export interface UserDetailsModel {
    firstName: string;
    lastName: string;
    email: string;
    checkin: Date;
    checkout: Date;
    checkDateError: string;
}
