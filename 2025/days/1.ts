import * as fs from 'fs';

// first, we read the file in


try {
	let currentPosition: number = 50;
	let numberOfZeros: number = 0;
	const maxPosition: number = 100;
	const minPosition: number = 0;

	const content: string = fs.readFileSync('/Users/vyngo/Code/personal/adventOfCode/2025/inputs/day1.txt', 'utf-8');
	const lines: string[] = content.split(/\r?\n/);
	console.log(lines);
	for (const line of lines) {
		if (line.startsWith('R')) {
			currentPosition = (currentPosition + (Number(line.slice(1)))) % maxPosition;
		} else if (line.startsWith('L')) {
			currentPosition = (currentPosition - (Number(line.slice(1)))) % maxPosition;
		}

		console.log(currentPosition);
		if (currentPosition === 0) {
			numberOfZeros++;
		}
	}
	console.log("result", numberOfZeros);

} catch (error) {
	console.log("error", error);
}
