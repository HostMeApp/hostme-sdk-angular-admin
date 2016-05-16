export interface RewardValue {
    amount?: number;
    discount?: number;
    freeMeal?: string;
    type?: RewardValue.TypeEnum;
}
export declare namespace RewardValue {
    enum TypeEnum {
        Discount,
        FreeMeal,
        MoneyOff,
    }
}
