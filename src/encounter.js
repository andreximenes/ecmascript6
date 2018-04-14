export class Encounter {
    constructor(introText="") {
        this.introText = introText;
    }
    whenEncounter() {
        return this.introText;
    }
}

export class Bear extends Encounter{
    constructor() {
        super("grr grow, you encountered a Bear!");
    }
}

export class Angel extends Encounter{
    constructor() {
        super("Wow, you encountred an Angel! This will give you strength and healing possibilities");
    }
}

export class Ghost extends Encounter{
    constructor() {
        super("Booh, you encountred a Ghost!");
    }
}

export function generate() {
    var number = Math.floor(Math.random() * (4 - 1)) + 1;
    switch(number) {
        case 1: {
            return new Bear();
            break;
        }
        case 2: {
            return new Angel();
            break;
        }
        case 3: {
            return new Ghost();
            break;
        }
        default: {
            return new Encounter();
            break;
        }
    }
}
