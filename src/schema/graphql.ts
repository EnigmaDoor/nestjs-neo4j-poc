
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

export class CreateMachineProducesSweetInput {
    exampleField?: Nullable<number>;
}

export class UpdateMachineProducesSweetInput {
    id: number;
}

export class CreateMachineInput {
    type: string;
    capacity: number;
    status: MachineStatus;
}

export class UpdateMachineInput {
    uuid: UUID;
    type?: Nullable<string>;
    capacity?: Nullable<number>;
    status?: Nullable<MachineStatus>;
}

export class CreateOrderInput {
    customer: string;
    status: OrderStatus;
}

export class UpdateOrderInput {
    uuid: UUID;
    customer?: Nullable<string>;
    status?: Nullable<OrderStatus>;
}

export class CreateSweetInput {
    price: number;
    name: string;
    quantityInStock: number;
    ingredients: Ingredient[];
}

export class UpdateSweetInput {
    uuid: UUID;
    name?: Nullable<string>;
    price?: Nullable<number>;
    quantityInStock?: Nullable<number>;
    ingredients?: Nullable<Ingredient[]>;
}

export class MachineProducesSweet {
    exampleField?: Nullable<number>;
}

export abstract class IQuery {
    abstract machineProducesSweets(): Nullable<MachineProducesSweet>[] | Promise<Nullable<MachineProducesSweet>[]>;

    abstract machineProducesSweet(id: number): Nullable<MachineProducesSweet> | Promise<Nullable<MachineProducesSweet>>;

    abstract machines(): Nullable<Machine>[] | Promise<Nullable<Machine>[]>;

    abstract machine(uuid: UUID): Nullable<Machine> | Promise<Nullable<Machine>>;

    abstract orders(): Nullable<Order>[] | Promise<Nullable<Order>[]>;

    abstract order(uuid: UUID): Nullable<Order> | Promise<Nullable<Order>>;

    abstract sweets(): Nullable<Sweet>[] | Promise<Nullable<Sweet>[]>;

    abstract sweet(uuid: UUID): Nullable<Sweet> | Promise<Nullable<Sweet>>;
}

export abstract class IMutation {
    abstract createMachineProducesSweet(createMachineProducesSweetInput: CreateMachineProducesSweetInput): MachineProducesSweet | Promise<MachineProducesSweet>;

    abstract updateMachineProducesSweet(updateMachineProducesSweetInput: UpdateMachineProducesSweetInput): MachineProducesSweet | Promise<MachineProducesSweet>;

    abstract removeMachineProducesSweet(id: number): Nullable<MachineProducesSweet> | Promise<Nullable<MachineProducesSweet>>;

    abstract createMachine(createMachineInput: CreateMachineInput): Machine | Promise<Machine>;

    abstract updateMachine(updateMachineInput: UpdateMachineInput): Machine | Promise<Machine>;

    abstract removeMachine(uuid: UUID): boolean | Promise<boolean>;

    abstract createOrder(createOrderInput: CreateOrderInput): Order | Promise<Order>;

    abstract updateOrder(updateOrderInput: UpdateOrderInput): Order | Promise<Order>;

    abstract removeOrder(uuid: UUID): boolean | Promise<boolean>;

    abstract createSweet(createSweetInput: CreateSweetInput): Sweet | Promise<Sweet>;

    abstract updateSweet(updateSweetInput: UpdateSweetInput): Sweet | Promise<Sweet>;

    abstract removeSweet(uuid: UUID): boolean | Promise<boolean>;
}

export class Machine {
    uuid: UUID;
    type: string;
    capacity: number;
    status: MachineStatus;
}

export class Order {
    uuid: UUID;
    customer: string;
    status: OrderStatus;
}

export class Sweet {
    uuid: UUID;
    name: string;
    price: number;
    quantityInStock: number;
    ingredients: Ingredient[];
}

export type UUID = any;
type Nullable<T> = T | null;
