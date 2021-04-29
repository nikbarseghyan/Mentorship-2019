/**
 * @Աբստրակցիա [hy: Վերացարկում]
 * Այն պաշտոնապես չի համարվում ՕԿԾ-ի հիմնական գաղափարներից մեկը, սակայն ոչ պակաս կարևոր նշանակություն ունեցող գաղափար է։
 * 
 * @Abstraction մի միջոց է, որով առանձնացվում են օբյեկտի կարևոր բնութագրերը, դիտարկումից դուրս թողնելով ոչ կարևորները։
 * Հետևաբար, աբստրակցիան հանդիսանում է բոլոր այդպիսի բնութագրերի համախումբ։
 * 
 * @Domain_Knowledge
 */


interface IName {
    firstName: string
    lastName: string;
}

interface IWork {
    doWork(): void;
}

abstract class BaseEmployee implements IName, IWork {
    firstName: string;
    lastName: string;

    constructor(firstName: string, lastName: string) {
        this.firstName = firstName;
        this.lastName = lastName;
    }

    abstract doWork(): void;
}

class Employee extends BaseEmployee {
    constructor(firstName: string, lastName: string) {
        super(firstName, lastName);
    }

    doWork(): void {
        console.log(`${this.lastName}, ${this.firstName} doing work...`);
    }
}

let emp: IWork = new Employee('Vardan', 'Sepuh');
emp.doWork();