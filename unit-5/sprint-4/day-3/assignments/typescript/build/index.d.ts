declare let isBool: boolean;
declare let amount: number;
declare let firstName: string;
declare let lastName: number;
declare let fullName: string;
declare let arr: number[];
declare let arrOfString: string[];
declare let arrOfNumber: Array<number>;
declare type company = {
    name: string;
    age: number;
    rank?: number;
};
declare const masai: company;
declare type softwareDeveloper = {
    skills: string;
    isWorking: boolean;
};
declare let arrOfObj: company[];
declare let first_name: string;
declare let rank: number;
declare let masai_details: [string, number?];
declare enum Color {
    RED = 0,
    GREEN = 1,
    BLUE = 2
}
declare enum Books {
    GET_BOOKS_REQUEST = "GET_BOOKS_REQUEST",
    GET_BOOKS_SUCCESS = "GET_BOOKS_SUCCESS",
    GET_BOOKS_FAILURE = "GET_BOOKS_FAILURE"
}
declare let u: undefined;
declare let n: null;
declare let a: any;
declare function sum(a: number, b?: number): number;
declare let temp: number;
declare function printName({ name, age }: company): void;
declare let arr1: (string | boolean)[];
declare let masai_student: (company & softwareDeveloper)[];
