export class User {
    id!: number;
    name!: string;
    username!: string;
    email!: string;
    phone!: string;
    website!: string;
    address!: Address;
}

export class Address {
    street!: string;
    suite!: string;
    city!: string;
    zipcode!: string;
}