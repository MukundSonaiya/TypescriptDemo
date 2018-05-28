import {OwnershipContract} from "../contracts-wrapper/ownership";
import {artifacts} from "0x.js/lib/src/artifacts";
import {provider, txDefaults, web3Wrapper} from "./utils/web3_wrapper";

describe('Ownership', () => {
    console.log("Into the test");
    let ownership: OwnershipContract;
    before(async () => {
        const accounts = await web3Wrapper.getAvailableAddressesAsync();
        ownership = await OwnershipContract.deployFromArtifactAsync(
            artifacts,
            provider,
            txDefaults,
        );

    });

    it('Print contract address', async () => {
        console.log(ownership.address);
    })
});