export interface IRecord {
	getMaxTime(): number;
	playe(): void;
	pause(): void;
	goToTime(time: number): void;
}

export class Record implements IRecord {

	constructor () {
	}

	getMaxTime(): number {
		return 0;
	}

	playe() {
	}

	pause() {
	}

	goToTime(time: number) {
	}

}
