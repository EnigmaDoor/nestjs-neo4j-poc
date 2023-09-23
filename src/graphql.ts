
/*
 * -------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */

export class Machine {
    id: number;
    type: string;
    producesSweets: Sweet[];
}

export abstract class IQuery {
    abstract getMachines(): Machine[] | Promise<Machine[]>;

    abstract getSweets(): Sweet[] | Promise<Sweet[]>;
}

export class Sweet {
    id: number;
    name: string;
    quantityInStock: number;
}

type Nullable<T> = T | null;
