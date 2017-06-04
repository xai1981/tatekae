export class Account {
    constructor(
        private id: number,
        private name: string
    ) {
    }

    get getId(): number {
        return this.id;
    }

    set setId(id: number) {
        this.id = id;
    }

    get getName(): string {
        return this.name;
    }

    set setName(name: string) {
        this.name = name;
    }
}
