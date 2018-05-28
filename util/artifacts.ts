import { ContractArtifact } from '@0xproject/sol-compiler';

import * as Migrations from '../contracts/src/Migrations.json';
import * as Ownership from '../src/artifacts/Ownership.json';

export const artifacts = {
    Migrations: (Migrations as any) as ContractArtifact,
    Ownership: (Ownership as any) as ContractArtifact,
};
