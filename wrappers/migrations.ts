/**
 * This file is auto-generated using abi-gen. Don't edit directly.
 * Templates can be found at https://github.com/0xProject/0x-monorepo/tree/development/packages/contract_templates.
 */
// tslint:disable:no-consecutive-blank-lines
// tslint:disable-next-line:no-unused-variable
import { BaseContract } from '@0xproject/base-contract';
import { ContractArtifact } from '@0xproject/sol-compiler';
import { BlockParam, BlockParamLiteral, CallData, ContractAbi, DataItem, MethodAbi, Provider, TxData, TxDataPayable } from '@0xproject/types';
import { BigNumber, classUtils, logUtils, promisify } from '@0xproject/utils';
import { Web3Wrapper } from '@0xproject/web3-wrapper';
import * as ethers from 'ethers';
import * as _ from 'lodash';


// tslint:disable:no-parameter-reassignment
export class MigrationsContract extends BaseContract {
    public last_completed_migration = {
        async callAsync(
            callData: Partial<CallData> = {},
            defaultBlock?: BlockParam,
        ): Promise<BigNumber
        > {
            const self = this as any as MigrationsContract;
            const functionSignature = 'last_completed_migration()';
            const inputAbi = self._lookupAbi(functionSignature).inputs;
            [] = BaseContract._formatABIDataItemList(inputAbi, [], BaseContract._bigNumberToString.bind(self));
            const ethersFunction = self._lookupEthersInterface(functionSignature).functions.last_completed_migration(
            ) as ethers.CallDescription;
            const encodedData = ethersFunction.data;
            const callDataWithDefaults = await BaseContract._applyDefaultsToTxDataAsync(
                {
                    to: self.address,
                    data: encodedData,
                },
                self._web3Wrapper.getContractDefaults(),
            )
            const rawCallResult = await self._web3Wrapper.callAsync(callDataWithDefaults, defaultBlock);
            let resultArray = ethersFunction.parse(rawCallResult);
            const outputAbi = (_.find(self.abi, {name: 'last_completed_migration'}) as MethodAbi).outputs;
            resultArray = BaseContract._formatABIDataItemList(outputAbi, resultArray, BaseContract._lowercaseAddress.bind(this));
            resultArray = BaseContract._formatABIDataItemList(outputAbi, resultArray, BaseContract._bnToBigNumber.bind(this));
            return resultArray[0];
        },
    };
    public owner = {
        async callAsync(
            callData: Partial<CallData> = {},
            defaultBlock?: BlockParam,
        ): Promise<string
        > {
            const self = this as any as MigrationsContract;
            const functionSignature = 'owner()';
            const inputAbi = self._lookupAbi(functionSignature).inputs;
            [] = BaseContract._formatABIDataItemList(inputAbi, [], BaseContract._bigNumberToString.bind(self));
            const ethersFunction = self._lookupEthersInterface(functionSignature).functions.owner(
            ) as ethers.CallDescription;
            const encodedData = ethersFunction.data;
            const callDataWithDefaults = await BaseContract._applyDefaultsToTxDataAsync(
                {
                    to: self.address,
                    data: encodedData,
                },
                self._web3Wrapper.getContractDefaults(),
            )
            const rawCallResult = await self._web3Wrapper.callAsync(callDataWithDefaults, defaultBlock);
            let resultArray = ethersFunction.parse(rawCallResult);
            const outputAbi = (_.find(self.abi, {name: 'owner'}) as MethodAbi).outputs;
            resultArray = BaseContract._formatABIDataItemList(outputAbi, resultArray, BaseContract._lowercaseAddress.bind(this));
            resultArray = BaseContract._formatABIDataItemList(outputAbi, resultArray, BaseContract._bnToBigNumber.bind(this));
            return resultArray[0];
        },
    };
    public setCompleted = {
        async sendTransactionAsync(
            completed: BigNumber,
            txData: Partial<TxData> = {},
        ): Promise<string> {
            const self = this as any as MigrationsContract;
            const inputAbi = self._lookupAbi('setCompleted(uint256)').inputs;
            [completed,
    ] = BaseContract._formatABIDataItemList(inputAbi, [completed,
    ], BaseContract._bigNumberToString.bind(self));
            const encodedData = self._lookupEthersInterface('setCompleted(uint256)').functions.setCompleted(
                completed,
            ).data;
            const txDataWithDefaults = await BaseContract._applyDefaultsToTxDataAsync(
                {
                    to: self.address,
                    ...txData,
                    data: encodedData,
                },
                self._web3Wrapper.getContractDefaults(),
                self.setCompleted.estimateGasAsync.bind(
                    self,
                    completed,
                ),
            );
            const txHash = await self._web3Wrapper.sendTransactionAsync(txDataWithDefaults);
            return txHash;
        },
        async estimateGasAsync(
            completed: BigNumber,
            txData: Partial<TxData> = {},
        ): Promise<number> {
            const self = this as any as MigrationsContract;
            const inputAbi = self._lookupAbi('setCompleted(uint256)').inputs;
            [completed,
    ] = BaseContract._formatABIDataItemList(inputAbi, [completed,
    ], BaseContract._bigNumberToString);
            const encodedData = self._lookupEthersInterface('setCompleted(uint256)').functions.setCompleted(
                completed,
            ).data;
            const txDataWithDefaults = await BaseContract._applyDefaultsToTxDataAsync(
                {
                    to: self.address,
                    ...txData,
                    data: encodedData,
                },
                self._web3Wrapper.getContractDefaults(),
            );
            const gas = await self._web3Wrapper.estimateGasAsync(txDataWithDefaults);
            return gas;
        },
        getABIEncodedTransactionData(
            completed: BigNumber,
        ): string {
            const self = this as any as MigrationsContract;
            const inputAbi = self._lookupAbi('setCompleted(uint256)').inputs;
            [completed,
    ] = BaseContract._formatABIDataItemList(inputAbi, [completed,
    ], BaseContract._bigNumberToString);
            const abiEncodedTransactionData = self._lookupEthersInterface('setCompleted(uint256)').functions.setCompleted(
                completed,
            ).data;
            return abiEncodedTransactionData;
        },
    };
    public upgrade = {
        async sendTransactionAsync(
            new_address: string,
            txData: Partial<TxData> = {},
        ): Promise<string> {
            const self = this as any as MigrationsContract;
            const inputAbi = self._lookupAbi('upgrade(address)').inputs;
            [new_address,
    ] = BaseContract._formatABIDataItemList(inputAbi, [new_address,
    ], BaseContract._bigNumberToString.bind(self));
            const encodedData = self._lookupEthersInterface('upgrade(address)').functions.upgrade(
                new_address,
            ).data;
            const txDataWithDefaults = await BaseContract._applyDefaultsToTxDataAsync(
                {
                    to: self.address,
                    ...txData,
                    data: encodedData,
                },
                self._web3Wrapper.getContractDefaults(),
                self.upgrade.estimateGasAsync.bind(
                    self,
                    new_address,
                ),
            );
            const txHash = await self._web3Wrapper.sendTransactionAsync(txDataWithDefaults);
            return txHash;
        },
        async estimateGasAsync(
            new_address: string,
            txData: Partial<TxData> = {},
        ): Promise<number> {
            const self = this as any as MigrationsContract;
            const inputAbi = self._lookupAbi('upgrade(address)').inputs;
            [new_address,
    ] = BaseContract._formatABIDataItemList(inputAbi, [new_address,
    ], BaseContract._bigNumberToString);
            const encodedData = self._lookupEthersInterface('upgrade(address)').functions.upgrade(
                new_address,
            ).data;
            const txDataWithDefaults = await BaseContract._applyDefaultsToTxDataAsync(
                {
                    to: self.address,
                    ...txData,
                    data: encodedData,
                },
                self._web3Wrapper.getContractDefaults(),
            );
            const gas = await self._web3Wrapper.estimateGasAsync(txDataWithDefaults);
            return gas;
        },
        getABIEncodedTransactionData(
            new_address: string,
        ): string {
            const self = this as any as MigrationsContract;
            const inputAbi = self._lookupAbi('upgrade(address)').inputs;
            [new_address,
    ] = BaseContract._formatABIDataItemList(inputAbi, [new_address,
    ], BaseContract._bigNumberToString);
            const abiEncodedTransactionData = self._lookupEthersInterface('upgrade(address)').functions.upgrade(
                new_address,
            ).data;
            return abiEncodedTransactionData;
        },
    };
    public static async deployFromArtifactAsync(
        artifact: ContractArtifact,
        provider: Provider,
        txDefaults: Partial<TxData>,
    ): Promise<MigrationsContract> {
        if (_.isUndefined(artifact.compilerOutput)) {
            throw new Error('Compiler output not found in the artifact file');
        }
        const bytecode = artifact.compilerOutput.evm.bytecode.object;
        const abi = artifact.compilerOutput.abi;
        return MigrationsContract.deployAsync(bytecode, abi, provider, txDefaults, );
    }
    public static async deployAsync(
        bytecode: string,
        abi: ContractAbi,
        provider: Provider,
        txDefaults: Partial<TxData>,
    ): Promise<MigrationsContract> {
        const constructorAbi = BaseContract._lookupConstructorAbi(abi);
        [] = BaseContract._formatABIDataItemList(
            constructorAbi.inputs,
            [],
            BaseContract._bigNumberToString,
        );
        const txData = ethers.Contract.getDeployTransaction(bytecode, abi, );
        const web3Wrapper = new Web3Wrapper(provider);
        const txDataWithDefaults = await BaseContract._applyDefaultsToTxDataAsync(
            txData,
            txDefaults,
            web3Wrapper.estimateGasAsync.bind(web3Wrapper),
        );
        const txHash = await web3Wrapper.sendTransactionAsync(txDataWithDefaults);
        logUtils.log(`transactionHash: ${txHash}`);
        const txReceipt = await web3Wrapper.awaitTransactionMinedAsync(txHash);
        logUtils.log(`Migrations successfully deployed at ${txReceipt.contractAddress}`);
        const contractInstance = new MigrationsContract(abi, txReceipt.contractAddress as string, provider, txDefaults);
        contractInstance.constructorArgs = [];
        return contractInstance;
    }
    constructor(abi: ContractAbi, address: string, provider: Provider, txDefaults?: Partial<TxData>) {
        super("Migrations", abi, address, provider, txDefaults);
        classUtils.bindAll(this, ['_ethersInterfacesByFunctionSignature', 'address', 'abi', '_web3Wrapper']);
    }
} // tslint:disable:max-file-line-count
