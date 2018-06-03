import * as chai from 'chai';
import 'make-promises-safe';
import { artifacts } from '../util/artifacts';
import { chaiSetup } from './utils/chai_setup';
import { provider, txDefaults, web3Wrapper } from './utils/web3_wrapper';
import {OwnershipContract} from "../contracts-wrapper/ownership";

chaiSetup.configure();
const expect = chai.expect;

describe('ZRXToken', () => {
    let owner: string;
    let ownership:OwnershipContract ;
    let ownershipAddress: string;

    before(async () => {
        const accounts = await web3Wrapper.getAvailableAddressesAsync();
        owner = accounts[0];
        ownership = await OwnershipContract.deployFromArtifactAsync(artifacts.Ownership, provider, txDefaults);
        ownershipAddress = ownership.address;
    });
    describe('owner', () => {
        it('Test', async () => {
           // Test
        });
    });
});
