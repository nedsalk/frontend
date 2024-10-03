/* Autogenerated file. Do not edit manually. */

/* eslint-disable max-classes-per-file */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/consistent-type-imports */

/*
  Fuels version: 0.94.8
*/

import { Contract, Interface } from "fuels";
import type {
  Provider,
  Account,
  StorageSlot,
  AbstractAddress,
  BigNumberish,
  BN,
  FunctionFragment,
  InvokeFunction,
} from 'fuels';

import type { Option, Enum } from "./common";

export enum AccessErrorInput { CannotReinitialized = 'CannotReinitialized', NotOwner = 'NotOwner' };
export enum AccessErrorOutput { CannotReinitialized = 'CannotReinitialized', NotOwner = 'NotOwner' };
export type IdentityInput = Enum<{ Address: AddressInput, ContractId: ContractIdInput }>;
export type IdentityOutput = Enum<{ Address: AddressOutput, ContractId: ContractIdOutput }>;
export enum SideInput { Buy = 'Buy', Sell = 'Sell' };
export enum SideOutput { Buy = 'Buy', Sell = 'Sell' };
export enum StrategyFixedPriceErrorsInput { OnlyOwner = 'OnlyOwner', Initialized = 'Initialized', ExchangeAlreadyInitialized = 'ExchangeAlreadyInitialized', FeeTooHigh = 'FeeTooHigh', CallerMustBeTheExchange = 'CallerMustBeTheExchange', OrderMismatchedToUpdate = 'OrderMismatchedToUpdate' };
export enum StrategyFixedPriceErrorsOutput { OnlyOwner = 'OnlyOwner', Initialized = 'Initialized', ExchangeAlreadyInitialized = 'ExchangeAlreadyInitialized', FeeTooHigh = 'FeeTooHigh', CallerMustBeTheExchange = 'CallerMustBeTheExchange', OrderMismatchedToUpdate = 'OrderMismatchedToUpdate' };

export type AddressInput = { bits: string };
export type AddressOutput = AddressInput;
export type AssetIdInput = { bits: string };
export type AssetIdOutput = AssetIdInput;
export type ContractIdInput = { bits: string };
export type ContractIdOutput = ContractIdInput;
export type ExecutionResultInput = { is_executable: boolean, collection: ContractIdInput, token_id: string, amount: BigNumberish, payment_asset: AssetIdInput };
export type ExecutionResultOutput = { is_executable: boolean, collection: ContractIdOutput, token_id: string, amount: BN, payment_asset: AssetIdOutput };
export type ExtraParamsInput = { extra_address_param: AddressInput, extra_contract_param: ContractIdInput, extra_u64_param: BigNumberish };
export type ExtraParamsOutput = { extra_address_param: AddressOutput, extra_contract_param: ContractIdOutput, extra_u64_param: BN };
export type MakerOrderInput = { side: SideInput, maker: AddressInput, collection: ContractIdInput, token_id: string, price: BigNumberish, amount: BigNumberish, nonce: BigNumberish, strategy: ContractIdInput, payment_asset: AssetIdInput, extra_params: ExtraParamsInput };
export type MakerOrderOutput = { side: SideOutput, maker: AddressOutput, collection: ContractIdOutput, token_id: string, price: BN, amount: BN, nonce: BN, strategy: ContractIdOutput, payment_asset: AssetIdOutput, extra_params: ExtraParamsOutput };
export type OwnershipRenouncedInput = { previous_owner: IdentityInput };
export type OwnershipRenouncedOutput = { previous_owner: IdentityOutput };
export type OwnershipSetInput = { new_owner: IdentityInput };
export type OwnershipSetOutput = { new_owner: IdentityOutput };
export type OwnershipTransferredInput = { new_owner: IdentityInput, previous_owner: IdentityInput };
export type OwnershipTransferredOutput = { new_owner: IdentityOutput, previous_owner: IdentityOutput };
export type TakerOrderInput = { side: SideInput, taker: AddressInput, maker: AddressInput, nonce: BigNumberish, price: BigNumberish, token_id: string, collection: ContractIdInput, strategy: ContractIdInput, extra_params: ExtraParamsInput };
export type TakerOrderOutput = { side: SideOutput, taker: AddressOutput, maker: AddressOutput, nonce: BN, price: BN, token_id: string, collection: ContractIdOutput, strategy: ContractIdOutput, extra_params: ExtraParamsOutput };

const abi = {
  "programType": "contract",
  "specVersion": "1",
  "encodingVersion": "1",
  "concreteTypes": [
    {
      "type": "()",
      "concreteTypeId": "2e38e77b22c314a449e91fafed92a43826ac6aa403ae6a8acb6cf58239fbaf5d"
    },
    {
      "type": "bool",
      "concreteTypeId": "b760f44fa5965c2474a3b471467a22c43185152129295af588b022ae50b50903"
    },
    {
      "type": "enum errors::StrategyFixedPriceErrors",
      "concreteTypeId": "698db560e1f84979ecda6435b1be18a8c7843aaf688218701b73431d8e610e2a",
      "metadataTypeId": 1
    },
    {
      "type": "enum libraries::order_types::Side",
      "concreteTypeId": "b003c2b57c46049375f998db2f982f6f1598f54310c64f499aab5c7a8ea9a197",
      "metadataTypeId": 2
    },
    {
      "type": "enum libraries::ownable::AccessError",
      "concreteTypeId": "b125b3c353d0e20ba2296785cc1653908f3c1fb7e67e055938c31fd0e1bb8086",
      "metadataTypeId": 3
    },
    {
      "type": "enum std::identity::Identity",
      "concreteTypeId": "ab7cd04e05be58e3fc15d424c2c4a57f824a2a2d97d67252440a3925ebdc1335",
      "metadataTypeId": 4
    },
    {
      "type": "enum std::option::Option<enum std::identity::Identity>",
      "concreteTypeId": "253aea1197e8005518365bd24c8bc31f73a434fac0f7350e57696edfdd4850c2",
      "metadataTypeId": 5,
      "typeArguments": [
        "ab7cd04e05be58e3fc15d424c2c4a57f824a2a2d97d67252440a3925ebdc1335"
      ]
    },
    {
      "type": "enum std::option::Option<struct libraries::order_types::MakerOrder>",
      "concreteTypeId": "c1247fb45d12f60f490392a0ee7342da7621d729580ef4db4378f7fa40dce5de",
      "metadataTypeId": 5,
      "typeArguments": [
        "3d46176b340e1859842235481ab83a21dd6493b73dcbfc8e8c0ba96dbd2d07bb"
      ]
    },
    {
      "type": "struct libraries::execution_result::ExecutionResult",
      "concreteTypeId": "7777d8570157d7515a05d05a1ce6c2a32889f3f5bf5924f855909d5b47504c4e",
      "metadataTypeId": 7
    },
    {
      "type": "struct libraries::order_types::MakerOrder",
      "concreteTypeId": "3d46176b340e1859842235481ab83a21dd6493b73dcbfc8e8c0ba96dbd2d07bb",
      "metadataTypeId": 9
    },
    {
      "type": "struct libraries::order_types::TakerOrder",
      "concreteTypeId": "d3408708920d172bcfc4781923ab1553134bdc5d085dcac5537d09287a8847ed",
      "metadataTypeId": 10
    },
    {
      "type": "struct libraries::ownable::OwnershipRenounced",
      "concreteTypeId": "6dd047dcef1fafba87b54170a1ee4a99a8ae37746e594cbc548c5315368b20c3",
      "metadataTypeId": 11
    },
    {
      "type": "struct libraries::ownable::OwnershipSet",
      "concreteTypeId": "8416605cb05f0e41791636365d6644426eb8723c9bbdfc940b41652fc5bb7e61",
      "metadataTypeId": 12
    },
    {
      "type": "struct libraries::ownable::OwnershipTransferred",
      "concreteTypeId": "947c52bd18fcf648398d82d4d7b3cb539ef96fec3211f41a6e733a8a4f02f67e",
      "metadataTypeId": 13
    },
    {
      "type": "struct std::address::Address",
      "concreteTypeId": "f597b637c3b0f588fb8d7086c6f4735caa3122b85f0423b82e489f9bb58e2308",
      "metadataTypeId": 14
    },
    {
      "type": "struct std::contract_id::ContractId",
      "concreteTypeId": "29c10735d33b5159f0c71ee1dbd17b36a3e69e41f00fab0d42e1bd9f428d8a54",
      "metadataTypeId": 16
    },
    {
      "type": "u64",
      "concreteTypeId": "1506e6f44c1d6291cdf46395a8e573276a4fa79e8ace3fc891e092ef32d1b0a0"
    }
  ],
  "metadataTypes": [
    {
      "type": "b256",
      "metadataTypeId": 0
    },
    {
      "type": "enum errors::StrategyFixedPriceErrors",
      "metadataTypeId": 1,
      "components": [
        {
          "name": "OnlyOwner",
          "typeId": "2e38e77b22c314a449e91fafed92a43826ac6aa403ae6a8acb6cf58239fbaf5d"
        },
        {
          "name": "Initialized",
          "typeId": "2e38e77b22c314a449e91fafed92a43826ac6aa403ae6a8acb6cf58239fbaf5d"
        },
        {
          "name": "ExchangeAlreadyInitialized",
          "typeId": "2e38e77b22c314a449e91fafed92a43826ac6aa403ae6a8acb6cf58239fbaf5d"
        },
        {
          "name": "FeeTooHigh",
          "typeId": "2e38e77b22c314a449e91fafed92a43826ac6aa403ae6a8acb6cf58239fbaf5d"
        },
        {
          "name": "CallerMustBeTheExchange",
          "typeId": "2e38e77b22c314a449e91fafed92a43826ac6aa403ae6a8acb6cf58239fbaf5d"
        },
        {
          "name": "OrderMismatchedToUpdate",
          "typeId": "2e38e77b22c314a449e91fafed92a43826ac6aa403ae6a8acb6cf58239fbaf5d"
        }
      ]
    },
    {
      "type": "enum libraries::order_types::Side",
      "metadataTypeId": 2,
      "components": [
        {
          "name": "Buy",
          "typeId": "2e38e77b22c314a449e91fafed92a43826ac6aa403ae6a8acb6cf58239fbaf5d"
        },
        {
          "name": "Sell",
          "typeId": "2e38e77b22c314a449e91fafed92a43826ac6aa403ae6a8acb6cf58239fbaf5d"
        }
      ]
    },
    {
      "type": "enum libraries::ownable::AccessError",
      "metadataTypeId": 3,
      "components": [
        {
          "name": "CannotReinitialized",
          "typeId": "2e38e77b22c314a449e91fafed92a43826ac6aa403ae6a8acb6cf58239fbaf5d"
        },
        {
          "name": "NotOwner",
          "typeId": "2e38e77b22c314a449e91fafed92a43826ac6aa403ae6a8acb6cf58239fbaf5d"
        }
      ]
    },
    {
      "type": "enum std::identity::Identity",
      "metadataTypeId": 4,
      "components": [
        {
          "name": "Address",
          "typeId": 14
        },
        {
          "name": "ContractId",
          "typeId": 16
        }
      ]
    },
    {
      "type": "enum std::option::Option",
      "metadataTypeId": 5,
      "components": [
        {
          "name": "None",
          "typeId": "2e38e77b22c314a449e91fafed92a43826ac6aa403ae6a8acb6cf58239fbaf5d"
        },
        {
          "name": "Some",
          "typeId": 6
        }
      ],
      "typeParameters": [
        6
      ]
    },
    {
      "type": "generic T",
      "metadataTypeId": 6
    },
    {
      "type": "struct libraries::execution_result::ExecutionResult",
      "metadataTypeId": 7,
      "components": [
        {
          "name": "is_executable",
          "typeId": "b760f44fa5965c2474a3b471467a22c43185152129295af588b022ae50b50903"
        },
        {
          "name": "collection",
          "typeId": 16
        },
        {
          "name": "token_id",
          "typeId": 0
        },
        {
          "name": "amount",
          "typeId": "1506e6f44c1d6291cdf46395a8e573276a4fa79e8ace3fc891e092ef32d1b0a0"
        },
        {
          "name": "payment_asset",
          "typeId": 15
        }
      ]
    },
    {
      "type": "struct libraries::order_types::ExtraParams",
      "metadataTypeId": 8,
      "components": [
        {
          "name": "extra_address_param",
          "typeId": 14
        },
        {
          "name": "extra_contract_param",
          "typeId": 16
        },
        {
          "name": "extra_u64_param",
          "typeId": "1506e6f44c1d6291cdf46395a8e573276a4fa79e8ace3fc891e092ef32d1b0a0"
        }
      ]
    },
    {
      "type": "struct libraries::order_types::MakerOrder",
      "metadataTypeId": 9,
      "components": [
        {
          "name": "side",
          "typeId": 2
        },
        {
          "name": "maker",
          "typeId": 14
        },
        {
          "name": "collection",
          "typeId": 16
        },
        {
          "name": "token_id",
          "typeId": 0
        },
        {
          "name": "price",
          "typeId": "1506e6f44c1d6291cdf46395a8e573276a4fa79e8ace3fc891e092ef32d1b0a0"
        },
        {
          "name": "amount",
          "typeId": "1506e6f44c1d6291cdf46395a8e573276a4fa79e8ace3fc891e092ef32d1b0a0"
        },
        {
          "name": "nonce",
          "typeId": "1506e6f44c1d6291cdf46395a8e573276a4fa79e8ace3fc891e092ef32d1b0a0"
        },
        {
          "name": "strategy",
          "typeId": 16
        },
        {
          "name": "payment_asset",
          "typeId": 15
        },
        {
          "name": "extra_params",
          "typeId": 8
        }
      ]
    },
    {
      "type": "struct libraries::order_types::TakerOrder",
      "metadataTypeId": 10,
      "components": [
        {
          "name": "side",
          "typeId": 2
        },
        {
          "name": "taker",
          "typeId": 14
        },
        {
          "name": "maker",
          "typeId": 14
        },
        {
          "name": "nonce",
          "typeId": "1506e6f44c1d6291cdf46395a8e573276a4fa79e8ace3fc891e092ef32d1b0a0"
        },
        {
          "name": "price",
          "typeId": "1506e6f44c1d6291cdf46395a8e573276a4fa79e8ace3fc891e092ef32d1b0a0"
        },
        {
          "name": "token_id",
          "typeId": 0
        },
        {
          "name": "collection",
          "typeId": 16
        },
        {
          "name": "strategy",
          "typeId": 16
        },
        {
          "name": "extra_params",
          "typeId": 8
        }
      ]
    },
    {
      "type": "struct libraries::ownable::OwnershipRenounced",
      "metadataTypeId": 11,
      "components": [
        {
          "name": "previous_owner",
          "typeId": 4
        }
      ]
    },
    {
      "type": "struct libraries::ownable::OwnershipSet",
      "metadataTypeId": 12,
      "components": [
        {
          "name": "new_owner",
          "typeId": 4
        }
      ]
    },
    {
      "type": "struct libraries::ownable::OwnershipTransferred",
      "metadataTypeId": 13,
      "components": [
        {
          "name": "new_owner",
          "typeId": 4
        },
        {
          "name": "previous_owner",
          "typeId": 4
        }
      ]
    },
    {
      "type": "struct std::address::Address",
      "metadataTypeId": 14,
      "components": [
        {
          "name": "bits",
          "typeId": 0
        }
      ]
    },
    {
      "type": "struct std::asset_id::AssetId",
      "metadataTypeId": 15,
      "components": [
        {
          "name": "bits",
          "typeId": 0
        }
      ]
    },
    {
      "type": "struct std::contract_id::ContractId",
      "metadataTypeId": 16,
      "components": [
        {
          "name": "bits",
          "typeId": 0
        }
      ]
    }
  ],
  "functions": [
    {
      "inputs": [
        {
          "name": "maker",
          "concreteTypeId": "f597b637c3b0f588fb8d7086c6f4735caa3122b85f0423b82e489f9bb58e2308"
        },
        {
          "name": "nonce",
          "concreteTypeId": "1506e6f44c1d6291cdf46395a8e573276a4fa79e8ace3fc891e092ef32d1b0a0"
        },
        {
          "name": "side",
          "concreteTypeId": "b003c2b57c46049375f998db2f982f6f1598f54310c64f499aab5c7a8ea9a197"
        }
      ],
      "name": "cancel_order",
      "output": "2e38e77b22c314a449e91fafed92a43826ac6aa403ae6a8acb6cf58239fbaf5d",
      "attributes": [
        {
          "name": "doc-comment",
          "arguments": [
            " Cancels MakerOrder of the user"
          ]
        },
        {
          "name": "doc-comment",
          "arguments": [
            " Only callable by Thunder Exchange contract"
          ]
        },
        {
          "name": "storage",
          "arguments": [
            "read",
            "write"
          ]
        }
      ]
    },
    {
      "inputs": [
        {
          "name": "order",
          "concreteTypeId": "d3408708920d172bcfc4781923ab1553134bdc5d085dcac5537d09287a8847ed"
        }
      ],
      "name": "execute_order",
      "output": "7777d8570157d7515a05d05a1ce6c2a32889f3f5bf5924f855909d5b47504c4e",
      "attributes": [
        {
          "name": "doc-comment",
          "arguments": [
            " Checks if the MakerOrder is exectuable."
          ]
        },
        {
          "name": "doc-comment",
          "arguments": [
            " If exectuable, then updates the storage"
          ]
        },
        {
          "name": "doc-comment",
          "arguments": [
            " Only callable by Thunder Exchange contract"
          ]
        },
        {
          "name": "storage",
          "arguments": [
            "read",
            "write"
          ]
        }
      ]
    },
    {
      "inputs": [],
      "name": "get_exchange",
      "output": "29c10735d33b5159f0c71ee1dbd17b36a3e69e41f00fab0d42e1bd9f428d8a54",
      "attributes": [
        {
          "name": "storage",
          "arguments": [
            "read"
          ]
        }
      ]
    },
    {
      "inputs": [
        {
          "name": "user",
          "concreteTypeId": "f597b637c3b0f588fb8d7086c6f4735caa3122b85f0423b82e489f9bb58e2308"
        },
        {
          "name": "nonce",
          "concreteTypeId": "1506e6f44c1d6291cdf46395a8e573276a4fa79e8ace3fc891e092ef32d1b0a0"
        },
        {
          "name": "side",
          "concreteTypeId": "b003c2b57c46049375f998db2f982f6f1598f54310c64f499aab5c7a8ea9a197"
        }
      ],
      "name": "get_maker_order_of_user",
      "output": "c1247fb45d12f60f490392a0ee7342da7621d729580ef4db4378f7fa40dce5de",
      "attributes": [
        {
          "name": "storage",
          "arguments": [
            "read"
          ]
        }
      ]
    },
    {
      "inputs": [
        {
          "name": "user",
          "concreteTypeId": "f597b637c3b0f588fb8d7086c6f4735caa3122b85f0423b82e489f9bb58e2308"
        },
        {
          "name": "side",
          "concreteTypeId": "b003c2b57c46049375f998db2f982f6f1598f54310c64f499aab5c7a8ea9a197"
        }
      ],
      "name": "get_min_order_nonce_of_user",
      "output": "1506e6f44c1d6291cdf46395a8e573276a4fa79e8ace3fc891e092ef32d1b0a0",
      "attributes": [
        {
          "name": "storage",
          "arguments": [
            "read"
          ]
        }
      ]
    },
    {
      "inputs": [
        {
          "name": "user",
          "concreteTypeId": "f597b637c3b0f588fb8d7086c6f4735caa3122b85f0423b82e489f9bb58e2308"
        },
        {
          "name": "side",
          "concreteTypeId": "b003c2b57c46049375f998db2f982f6f1598f54310c64f499aab5c7a8ea9a197"
        }
      ],
      "name": "get_order_nonce_of_user",
      "output": "1506e6f44c1d6291cdf46395a8e573276a4fa79e8ace3fc891e092ef32d1b0a0",
      "attributes": [
        {
          "name": "storage",
          "arguments": [
            "read"
          ]
        }
      ]
    },
    {
      "inputs": [],
      "name": "get_protocol_fee",
      "output": "1506e6f44c1d6291cdf46395a8e573276a4fa79e8ace3fc891e092ef32d1b0a0",
      "attributes": [
        {
          "name": "doc-comment",
          "arguments": [
            " GETTERS"
          ]
        },
        {
          "name": "storage",
          "arguments": [
            "read"
          ]
        }
      ]
    },
    {
      "inputs": [
        {
          "name": "exchange",
          "concreteTypeId": "29c10735d33b5159f0c71ee1dbd17b36a3e69e41f00fab0d42e1bd9f428d8a54"
        },
        {
          "name": "fee",
          "concreteTypeId": "1506e6f44c1d6291cdf46395a8e573276a4fa79e8ace3fc891e092ef32d1b0a0"
        }
      ],
      "name": "initialize",
      "output": "2e38e77b22c314a449e91fafed92a43826ac6aa403ae6a8acb6cf58239fbaf5d",
      "attributes": [
        {
          "name": "doc-comment",
          "arguments": [
            " Initializes the contract, sets the owner, and Thunder Exchange contract"
          ]
        },
        {
          "name": "storage",
          "arguments": [
            "read",
            "write"
          ]
        }
      ]
    },
    {
      "inputs": [
        {
          "name": "maker",
          "concreteTypeId": "f597b637c3b0f588fb8d7086c6f4735caa3122b85f0423b82e489f9bb58e2308"
        },
        {
          "name": "nonce",
          "concreteTypeId": "1506e6f44c1d6291cdf46395a8e573276a4fa79e8ace3fc891e092ef32d1b0a0"
        },
        {
          "name": "side",
          "concreteTypeId": "b003c2b57c46049375f998db2f982f6f1598f54310c64f499aab5c7a8ea9a197"
        }
      ],
      "name": "is_valid_order",
      "output": "b760f44fa5965c2474a3b471467a22c43185152129295af588b022ae50b50903",
      "attributes": [
        {
          "name": "storage",
          "arguments": [
            "read"
          ]
        }
      ]
    },
    {
      "inputs": [],
      "name": "owner",
      "output": "253aea1197e8005518365bd24c8bc31f73a434fac0f7350e57696edfdd4850c2",
      "attributes": [
        {
          "name": "doc-comment",
          "arguments": [
            " Ownable ///"
          ]
        },
        {
          "name": "storage",
          "arguments": [
            "read"
          ]
        }
      ]
    },
    {
      "inputs": [
        {
          "name": "order",
          "concreteTypeId": "3d46176b340e1859842235481ab83a21dd6493b73dcbfc8e8c0ba96dbd2d07bb"
        }
      ],
      "name": "place_order",
      "output": "2e38e77b22c314a449e91fafed92a43826ac6aa403ae6a8acb6cf58239fbaf5d",
      "attributes": [
        {
          "name": "doc-comment",
          "arguments": [
            " Stores MakerOrder of the user"
          ]
        },
        {
          "name": "doc-comment",
          "arguments": [
            " Only callable by Thunder Exchange contract"
          ]
        },
        {
          "name": "storage",
          "arguments": [
            "read",
            "write"
          ]
        }
      ]
    },
    {
      "inputs": [],
      "name": "renounce_ownership",
      "output": "2e38e77b22c314a449e91fafed92a43826ac6aa403ae6a8acb6cf58239fbaf5d",
      "attributes": [
        {
          "name": "storage",
          "arguments": [
            "read",
            "write"
          ]
        }
      ]
    },
    {
      "inputs": [
        {
          "name": "exchange_contract",
          "concreteTypeId": "29c10735d33b5159f0c71ee1dbd17b36a3e69e41f00fab0d42e1bd9f428d8a54"
        }
      ],
      "name": "set_exchange",
      "output": "2e38e77b22c314a449e91fafed92a43826ac6aa403ae6a8acb6cf58239fbaf5d",
      "attributes": [
        {
          "name": "doc-comment",
          "arguments": [
            " Sets Thunder Exchange contract"
          ]
        },
        {
          "name": "doc-comment",
          "arguments": [
            " Only callable by the owner"
          ]
        },
        {
          "name": "storage",
          "arguments": [
            "read",
            "write"
          ]
        }
      ]
    },
    {
      "inputs": [
        {
          "name": "fee",
          "concreteTypeId": "1506e6f44c1d6291cdf46395a8e573276a4fa79e8ace3fc891e092ef32d1b0a0"
        }
      ],
      "name": "set_protocol_fee",
      "output": "2e38e77b22c314a449e91fafed92a43826ac6aa403ae6a8acb6cf58239fbaf5d",
      "attributes": [
        {
          "name": "doc-comment",
          "arguments": [
            " Sets the protocol fee of the platform"
          ]
        },
        {
          "name": "doc-comment",
          "arguments": [
            " Only callable by the owner"
          ]
        },
        {
          "name": "storage",
          "arguments": [
            "read",
            "write"
          ]
        }
      ]
    },
    {
      "inputs": [
        {
          "name": "new_owner",
          "concreteTypeId": "ab7cd04e05be58e3fc15d424c2c4a57f824a2a2d97d67252440a3925ebdc1335"
        }
      ],
      "name": "transfer_ownership",
      "output": "2e38e77b22c314a449e91fafed92a43826ac6aa403ae6a8acb6cf58239fbaf5d",
      "attributes": [
        {
          "name": "storage",
          "arguments": [
            "read",
            "write"
          ]
        }
      ]
    },
    {
      "inputs": [
        {
          "name": "order",
          "concreteTypeId": "3d46176b340e1859842235481ab83a21dd6493b73dcbfc8e8c0ba96dbd2d07bb"
        }
      ],
      "name": "update_order",
      "output": "2e38e77b22c314a449e91fafed92a43826ac6aa403ae6a8acb6cf58239fbaf5d",
      "attributes": [
        {
          "name": "doc-comment",
          "arguments": [
            " Updates the existing MakerOrder of the user"
          ]
        },
        {
          "name": "doc-comment",
          "arguments": [
            " Only callable by Thunder Exchange contract"
          ]
        },
        {
          "name": "storage",
          "arguments": [
            "read",
            "write"
          ]
        }
      ]
    }
  ],
  "loggedTypes": [
    {
      "logId": "7605934773411268985",
      "concreteTypeId": "698db560e1f84979ecda6435b1be18a8c7843aaf688218701b73431d8e610e2a"
    },
    {
      "logId": "12764806370357731851",
      "concreteTypeId": "b125b3c353d0e20ba2296785cc1653908f3c1fb7e67e055938c31fd0e1bb8086"
    },
    {
      "logId": "9517900813706399297",
      "concreteTypeId": "8416605cb05f0e41791636365d6644426eb8723c9bbdfc940b41652fc5bb7e61"
    },
    {
      "logId": "7912903559520169914",
      "concreteTypeId": "6dd047dcef1fafba87b54170a1ee4a99a8ae37746e594cbc548c5315368b20c3"
    },
    {
      "logId": "10699517786846983752",
      "concreteTypeId": "947c52bd18fcf648398d82d4d7b3cb539ef96fec3211f41a6e733a8a4f02f67e"
    }
  ],
  "messagesTypes": [],
  "configurables": []
};

const storageSlots: StorageSlot[] = [
  {
    "key": "1d63cc2495bbf5570c9a6d7f632018dc033107e7f4452405c44601bb771a4a5d",
    "value": "0000000000000000000000000000000000000000000000000000000000000000"
  },
  {
    "key": "1d63cc2495bbf5570c9a6d7f632018dc033107e7f4452405c44601bb771a4a5e",
    "value": "0000000000000000000000000000000000000000000000000000000000000000"
  },
  {
    "key": "38a1b038206f348ec947ba5770c6d713148c9d8bb0b312f47acc88777da1c09d",
    "value": "0000000000000000000000000000000000000000000000000000000000000000"
  },
  {
    "key": "5241fe67131bb3e82a0a52cc83936f02e45f5108564dba8af8faef76ba31fd0a",
    "value": "0000000000000000000000000000000000000000000000000000000000000000"
  },
  {
    "key": "5241fe67131bb3e82a0a52cc83936f02e45f5108564dba8af8faef76ba31fd0b",
    "value": "0000000000000000000000000000000000000000000000000000000000000000"
  },
  {
    "key": "7dbef6dc4e365382940f04cc782498fa1eb5d35829c52c2ddeaa18df059c4910",
    "value": "0000000000000000000000000000000000000000000000000000000000000000"
  }
];

export class StrategyFixedPriceSaleInterface extends Interface {
  constructor() {
    super(abi);
  }

  declare functions: {
    cancel_order: FunctionFragment;
    execute_order: FunctionFragment;
    get_exchange: FunctionFragment;
    get_maker_order_of_user: FunctionFragment;
    get_min_order_nonce_of_user: FunctionFragment;
    get_order_nonce_of_user: FunctionFragment;
    get_protocol_fee: FunctionFragment;
    initialize: FunctionFragment;
    is_valid_order: FunctionFragment;
    owner: FunctionFragment;
    place_order: FunctionFragment;
    renounce_ownership: FunctionFragment;
    set_exchange: FunctionFragment;
    set_protocol_fee: FunctionFragment;
    transfer_ownership: FunctionFragment;
    update_order: FunctionFragment;
  };
}

export class StrategyFixedPriceSale extends Contract {
  static readonly abi = abi;
  static readonly storageSlots = storageSlots;

  declare interface: StrategyFixedPriceSaleInterface;
  declare functions: {
    cancel_order: InvokeFunction<[maker: AddressInput, nonce: BigNumberish, side: SideInput], void>;
    execute_order: InvokeFunction<[order: TakerOrderInput], ExecutionResultOutput>;
    get_exchange: InvokeFunction<[], ContractIdOutput>;
    get_maker_order_of_user: InvokeFunction<[user: AddressInput, nonce: BigNumberish, side: SideInput], Option<MakerOrderOutput>>;
    get_min_order_nonce_of_user: InvokeFunction<[user: AddressInput, side: SideInput], BN>;
    get_order_nonce_of_user: InvokeFunction<[user: AddressInput, side: SideInput], BN>;
    get_protocol_fee: InvokeFunction<[], BN>;
    initialize: InvokeFunction<[exchange: ContractIdInput, fee: BigNumberish], void>;
    is_valid_order: InvokeFunction<[maker: AddressInput, nonce: BigNumberish, side: SideInput], boolean>;
    owner: InvokeFunction<[], Option<IdentityOutput>>;
    place_order: InvokeFunction<[order: MakerOrderInput], void>;
    renounce_ownership: InvokeFunction<[], void>;
    set_exchange: InvokeFunction<[exchange_contract: ContractIdInput], void>;
    set_protocol_fee: InvokeFunction<[fee: BigNumberish], void>;
    transfer_ownership: InvokeFunction<[new_owner: IdentityInput], void>;
    update_order: InvokeFunction<[order: MakerOrderInput], void>;
  };

  constructor(
    id: string | AbstractAddress,
    accountOrProvider: Account | Provider,
  ) {
    super(id, abi, accountOrProvider);
  }
}