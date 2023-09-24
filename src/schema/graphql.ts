
/*
 * -------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */

export enum Entities {
    Sweet = "Sweet",
    Order = "Order",
    Machine = "Machine"
}

export enum MachineStatus {
    ACTIVE = "ACTIVE",
    PRODUCING = "PRODUCING",
    IDLE = "IDLE",
    INACTIVE = "INACTIVE",
    ERROR = "ERROR"
}

export enum OrderStatus {
    ACTIVE = "ACTIVE",
    PENDING = "PENDING",
    DELIVERED = "DELIVERED",
    ERROR = "ERROR"
}

export enum Ingredient {
    BANANA = "BANANA",
    APPLE = "APPLE",
    SUGAR = "SUGAR",
    CARAMEL = "CARAMEL",
    CHOCOLATE = "CHOCOLATE"
}

export interface CreateMachineInput {
    type: string;
    capacity: number;
    status: MachineStatus;
}

export interface UpdateMachineInput {
    uuid: UUID;
    type?: Nullable<string>;
    capacity?: Nullable<number>;
    status?: Nullable<MachineStatus>;
}

export interface CreateOrderInput {
    customer: string;
    status: OrderStatus;
}

export interface UpdateOrderInput {
    uuid: UUID;
    customer?: Nullable<string>;
    status?: Nullable<OrderStatus>;
}

export interface CreateSweetInput {
    price: number;
    name: string;
    quantityInStock: number;
    ingredients: Ingredient[];
}

export interface UpdateSweetInput {
    uuid: UUID;
    name?: Nullable<string>;
    price?: Nullable<number>;
    quantityInStock?: Nullable<number>;
    ingredients?: Nullable<Ingredient[]>;
}

export interface Machine {
    uuid: UUID;
    type: string;
    capacity: number;
    status: MachineStatus;
}

export interface IQuery {
    machines(): Nullable<Machine>[] | Promise<Nullable<Machine>[]>;
    machine(uuid: UUID): Nullable<Machine> | Promise<Nullable<Machine>>;
    orders(): Nullable<Order>[] | Promise<Nullable<Order>[]>;
    order(uuid: UUID): Nullable<Order> | Promise<Nullable<Order>>;
    sweets(): Nullable<Sweet>[] | Promise<Nullable<Sweet>[]>;
    sweet(uuid: UUID): Nullable<Sweet> | Promise<Nullable<Sweet>>;
}

export interface IMutation {
    createMachine(createMachineInput: CreateMachineInput): Machine | Promise<Machine>;
    updateMachine(updateMachineInput: UpdateMachineInput): Machine | Promise<Machine>;
    removeMachine(uuid: UUID): boolean | Promise<boolean>;
    createOrder(createOrderInput: CreateOrderInput): Order | Promise<Order>;
    updateOrder(updateOrderInput: UpdateOrderInput): Order | Promise<Order>;
    removeOrder(uuid: UUID): boolean | Promise<boolean>;
    createSweet(createSweetInput: CreateSweetInput): Sweet | Promise<Sweet>;
    updateSweet(updateSweetInput: UpdateSweetInput): Sweet | Promise<Sweet>;
    removeSweet(uuid: UUID): boolean | Promise<boolean>;
}

export interface Order {
    uuid: UUID;
    customer: string;
    status: OrderStatus;
}

export interface Sweet {
    uuid: UUID;
    name: string;
    price: number;
    quantityInStock: number;
    ingredients: Ingredient[];
}

export type UUID = any;
type Nullable<T> = T | null;
