export type Exercise = {
	id: number;
	name: string;
	category: string;
	primary: string;
	primary_points: number;
	secondary: string | null;
	secondary_points: number | null;
	tertiary: string | null;
	tertiary_points: number | null;
	isolated: boolean;
	speed: boolean;
	finisher: boolean;
	notes: string | null;
};
