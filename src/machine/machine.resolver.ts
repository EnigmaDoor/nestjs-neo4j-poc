import { Resolver, Mutation } from '@nestjs/graphql';

@Resolver('Machine')
export class MachineResolver {
    constructor() {}

    @Mutation('machineProducesSweet')
    async machineProducesSweet(a1, a2, a3) {
        console.log("Entry in custom resolver");

        return true;
    }
}
