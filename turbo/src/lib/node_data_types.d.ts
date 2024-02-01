export interface BaseData {
	label: string;
	dirty: boolean;
	compute_type: string;
	input_ids: { [key: string]: string };
	output_ids?: { [key: string]: string };
	category: string;
	icon: string;
	output?: any;
	show_in_ui: boolean;
	message: string;
	enable?: boolean;
}

export interface DGEdgeInterface {
	id: string;
	source: string;
	selected: boolean;
	target: string;
}

export interface GCSData {
	filename: string;
	size_kb: number;
	gcs_path: string;
}

export interface DGNodeInterface<T extends BaseData = BaseData> {
	id: string;
	position: {
		x: number;
		y: number;
	};
	type: string;
	data: T;
}

export type GCSBaseData = BaseData & GCSData;
