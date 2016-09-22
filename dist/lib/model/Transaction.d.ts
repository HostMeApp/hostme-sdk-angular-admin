export interface Transaction {
    id?: number;
    time?: string;
    type?: string;
    points?: number;
    note?: string;
    units?: number;
    status?: string;
    statusReason?: string;
}
