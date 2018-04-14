import * as encounter from './encounter';

export class Enviroment {
    constructor(name) {
        this.name = name;
        this.encounter = encounter.generate();
    }

    stumbleUpon() {
        this.encounter = encounter.generate();
        var interaction = this.name + "you stumbled upon ..." + this.encounter.whenEncounter();
        return interaction;
    };
}
