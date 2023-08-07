export interface Drink {
    id:number,
    order_id:number,
    amount_of_fernet:number,
    amount_of_gintonic:number,
    amount_of_water:number,
    amount_of_coca:number,
    amount_of_caipirinha:number,
    amount_of_ice:number,
};
export interface CreateDrink extends Omit<Drink, ""> {};
export interface UpdateDrink extends Partial<Drink> {}