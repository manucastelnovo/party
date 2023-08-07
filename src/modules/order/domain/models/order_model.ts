export interface Order {
    id:number,
    user_id:number,
    amount:number,
    profit:number
};
export interface CreateOrder extends Omit<Order, ""> {};
export interface UpdateOrder extends Partial<Order> {}