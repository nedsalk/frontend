/* Autogenerated file. Do not edit manually. */

/* tslint:disable */
/* eslint-disable */

/*
  Fuels version: 0.73.0
  Forc version: 0.49.2
  Fuel-Core version: 0.22.0
*/

import { Interface, Contract, ContractFactory } from "fuels";
import type { Provider, Account, AbstractAddress, BytesLike, DeployContractOptions, StorageSlot } from "fuels";
import type { StrategyFixedPriceSaleAbi, StrategyFixedPriceSaleAbiInterface } from "../StrategyFixedPriceSaleAbi";

const _abi = {
  "types": [
    {
      "typeId": 0,
      "type": "()",
      "components": [],
      "typeParameters": null
    },
    {
      "typeId": 1,
      "type": "b256",
      "components": null,
      "typeParameters": null
    },
    {
      "typeId": 2,
      "type": "bool",
      "components": null,
      "typeParameters": null
    },
    {
      "typeId": 3,
      "type": "enum AccessError",
      "components": [
        {
          "name": "CannotReinitialized",
          "type": 0,
          "typeArguments": null
        },
        {
          "name": "NotOwner",
          "type": 0,
          "typeArguments": null
        }
      ],
      "typeParameters": null
    },
    {
      "typeId": 4,
      "type": "enum Identity",
      "components": [
        {
          "name": "Address",
          "type": 9,
          "typeArguments": null
        },
        {
          "name": "ContractId",
          "type": 11,
          "typeArguments": null
        }
      ],
      "typeParameters": null
    },
    {
      "typeId": 5,
      "type": "enum Option",
      "components": [
        {
          "name": "None",
          "type": 0,
          "typeArguments": null
        },
        {
          "name": "Some",
          "type": 8,
          "typeArguments": null
        }
      ],
      "typeParameters": [
        8
      ]
    },
    {
      "typeId": 6,
      "type": "enum Side",
      "components": [
        {
          "name": "Buy",
          "type": 0,
          "typeArguments": null
        },
        {
          "name": "Sell",
          "type": 0,
          "typeArguments": null
        }
      ],
      "typeParameters": null
    },
    {
      "typeId": 7,
      "type": "enum StrategyFixedPriceErrors",
      "components": [
        {
          "name": "OnlyOwner",
          "type": 0,
          "typeArguments": null
        },
        {
          "name": "Initialized",
          "type": 0,
          "typeArguments": null
        },
        {
          "name": "ExchangeAlreadyInitialized",
          "type": 0,
          "typeArguments": null
        },
        {
          "name": "FeeTooHigh",
          "type": 0,
          "typeArguments": null
        },
        {
          "name": "CallerMustBeTheExchange",
          "type": 0,
          "typeArguments": null
        },
        {
          "name": "OrderMismatchedToUpdate",
          "type": 0,
          "typeArguments": null
        }
      ],
      "typeParameters": null
    },
    {
      "typeId": 8,
      "type": "generic T",
      "components": null,
      "typeParameters": null
    },
    {
      "typeId": 9,
      "type": "struct Address",
      "components": [
        {
          "name": "value",
          "type": 1,
          "typeArguments": null
        }
      ],
      "typeParameters": null
    },
    {
      "typeId": 10,
      "type": "struct AssetId",
      "components": [
        {
          "name": "value",
          "type": 1,
          "typeArguments": null
        }
      ],
      "typeParameters": null
    },
    {
      "typeId": 11,
      "type": "struct ContractId",
      "components": [
        {
          "name": "value",
          "type": 1,
          "typeArguments": null
        }
      ],
      "typeParameters": null
    },
    {
      "typeId": 12,
      "type": "struct ExecutionResult",
      "components": [
        {
          "name": "is_executable",
          "type": 2,
          "typeArguments": null
        },
        {
          "name": "collection",
          "type": 11,
          "typeArguments": null
        },
        {
          "name": "token_id",
          "type": 1,
          "typeArguments": null
        },
        {
          "name": "amount",
          "type": 19,
          "typeArguments": null
        },
        {
          "name": "payment_asset",
          "type": 10,
          "typeArguments": null
        }
      ],
      "typeParameters": null
    },
    {
      "typeId": 13,
      "type": "struct ExtraParams",
      "components": [
        {
          "name": "extra_address_param",
          "type": 9,
          "typeArguments": null
        },
        {
          "name": "extra_contract_param",
          "type": 11,
          "typeArguments": null
        },
        {
          "name": "extra_u64_param",
          "type": 19,
          "typeArguments": null
        }
      ],
      "typeParameters": null
    },
    {
      "typeId": 14,
      "type": "struct MakerOrder",
      "components": [
        {
          "name": "side",
          "type": 6,
          "typeArguments": null
        },
        {
          "name": "maker",
          "type": 9,
          "typeArguments": null
        },
        {
          "name": "collection",
          "type": 11,
          "typeArguments": null
        },
        {
          "name": "token_id",
          "type": 1,
          "typeArguments": null
        },
        {
          "name": "price",
          "type": 19,
          "typeArguments": null
        },
        {
          "name": "amount",
          "type": 19,
          "typeArguments": null
        },
        {
          "name": "nonce",
          "type": 19,
          "typeArguments": null
        },
        {
          "name": "strategy",
          "type": 11,
          "typeArguments": null
        },
        {
          "name": "payment_asset",
          "type": 10,
          "typeArguments": null
        },
        {
          "name": "start_time",
          "type": 19,
          "typeArguments": null
        },
        {
          "name": "end_time",
          "type": 19,
          "typeArguments": null
        },
        {
          "name": "extra_params",
          "type": 13,
          "typeArguments": null
        }
      ],
      "typeParameters": null
    },
    {
      "typeId": 15,
      "type": "struct OwnershipRenounced",
      "components": [
        {
          "name": "previous_owner",
          "type": 4,
          "typeArguments": null
        }
      ],
      "typeParameters": null
    },
    {
      "typeId": 16,
      "type": "struct OwnershipSet",
      "components": [
        {
          "name": "new_owner",
          "type": 4,
          "typeArguments": null
        }
      ],
      "typeParameters": null
    },
    {
      "typeId": 17,
      "type": "struct OwnershipTransferred",
      "components": [
        {
          "name": "new_owner",
          "type": 4,
          "typeArguments": null
        },
        {
          "name": "previous_owner",
          "type": 4,
          "typeArguments": null
        }
      ],
      "typeParameters": null
    },
    {
      "typeId": 18,
      "type": "struct TakerOrder",
      "components": [
        {
          "name": "side",
          "type": 6,
          "typeArguments": null
        },
        {
          "name": "taker",
          "type": 9,
          "typeArguments": null
        },
        {
          "name": "maker",
          "type": 9,
          "typeArguments": null
        },
        {
          "name": "nonce",
          "type": 19,
          "typeArguments": null
        },
        {
          "name": "price",
          "type": 19,
          "typeArguments": null
        },
        {
          "name": "token_id",
          "type": 1,
          "typeArguments": null
        },
        {
          "name": "collection",
          "type": 11,
          "typeArguments": null
        },
        {
          "name": "strategy",
          "type": 11,
          "typeArguments": null
        },
        {
          "name": "extra_params",
          "type": 13,
          "typeArguments": null
        }
      ],
      "typeParameters": null
    },
    {
      "typeId": 19,
      "type": "u64",
      "components": null,
      "typeParameters": null
    }
  ],
  "functions": [
    {
      "inputs": [
        {
          "name": "maker",
          "type": 9,
          "typeArguments": null
        },
        {
          "name": "nonce",
          "type": 19,
          "typeArguments": null
        },
        {
          "name": "side",
          "type": 6,
          "typeArguments": null
        }
      ],
      "name": "cancel_order",
      "output": {
        "name": "",
        "type": 0,
        "typeArguments": null
      },
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
          "type": 18,
          "typeArguments": null
        }
      ],
      "name": "execute_order",
      "output": {
        "name": "",
        "type": 12,
        "typeArguments": null
      },
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
      "inputs": [],
      "name": "get_exchange",
      "output": {
        "name": "",
        "type": 11,
        "typeArguments": null
      },
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
          "type": 9,
          "typeArguments": null
        },
        {
          "name": "nonce",
          "type": 19,
          "typeArguments": null
        },
        {
          "name": "side",
          "type": 6,
          "typeArguments": null
        }
      ],
      "name": "get_maker_order_of_user",
      "output": {
        "name": "",
        "type": 5,
        "typeArguments": [
          {
            "name": "",
            "type": 14,
            "typeArguments": null
          }
        ]
      },
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
          "type": 9,
          "typeArguments": null
        },
        {
          "name": "side",
          "type": 6,
          "typeArguments": null
        }
      ],
      "name": "get_min_order_nonce_of_user",
      "output": {
        "name": "",
        "type": 19,
        "typeArguments": null
      },
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
          "type": 9,
          "typeArguments": null
        },
        {
          "name": "side",
          "type": 6,
          "typeArguments": null
        }
      ],
      "name": "get_order_nonce_of_user",
      "output": {
        "name": "",
        "type": 19,
        "typeArguments": null
      },
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
      "output": {
        "name": "",
        "type": 19,
        "typeArguments": null
      },
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
          "name": "exchange",
          "type": 11,
          "typeArguments": null
        }
      ],
      "name": "initialize",
      "output": {
        "name": "",
        "type": 0,
        "typeArguments": null
      },
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
          "name": "maker",
          "type": 9,
          "typeArguments": null
        },
        {
          "name": "nonce",
          "type": 19,
          "typeArguments": null
        },
        {
          "name": "side",
          "type": 6,
          "typeArguments": null
        }
      ],
      "name": "is_valid_order",
      "output": {
        "name": "",
        "type": 2,
        "typeArguments": null
      },
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
      "output": {
        "name": "",
        "type": 5,
        "typeArguments": [
          {
            "name": "",
            "type": 4,
            "typeArguments": null
          }
        ]
      },
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
          "type": 14,
          "typeArguments": null
        }
      ],
      "name": "place_order",
      "output": {
        "name": "",
        "type": 0,
        "typeArguments": null
      },
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
      "inputs": [],
      "name": "renounce_ownership",
      "output": {
        "name": "",
        "type": 0,
        "typeArguments": null
      },
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
          "type": 11,
          "typeArguments": null
        }
      ],
      "name": "set_exchange",
      "output": {
        "name": "",
        "type": 0,
        "typeArguments": null
      },
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
          "name": "fee",
          "type": 19,
          "typeArguments": null
        }
      ],
      "name": "set_protocol_fee",
      "output": {
        "name": "",
        "type": 0,
        "typeArguments": null
      },
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
          "name": "new_owner",
          "type": 4,
          "typeArguments": null
        }
      ],
      "name": "transfer_ownership",
      "output": {
        "name": "",
        "type": 0,
        "typeArguments": null
      },
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
          "type": 14,
          "typeArguments": null
        }
      ],
      "name": "update_order",
      "output": {
        "name": "",
        "type": 0,
        "typeArguments": null
      },
      "attributes": [
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
      "logId": 0,
      "loggedType": {
        "name": "",
        "type": 7,
        "typeArguments": []
      }
    },
    {
      "logId": 1,
      "loggedType": {
        "name": "",
        "type": 7,
        "typeArguments": []
      }
    },
    {
      "logId": 2,
      "loggedType": {
        "name": "",
        "type": 7,
        "typeArguments": []
      }
    },
    {
      "logId": 3,
      "loggedType": {
        "name": "",
        "type": 3,
        "typeArguments": []
      }
    },
    {
      "logId": 4,
      "loggedType": {
        "name": "",
        "type": 16,
        "typeArguments": []
      }
    },
    {
      "logId": 5,
      "loggedType": {
        "name": "",
        "type": 7,
        "typeArguments": []
      }
    },
    {
      "logId": 6,
      "loggedType": {
        "name": "",
        "type": 3,
        "typeArguments": []
      }
    },
    {
      "logId": 7,
      "loggedType": {
        "name": "",
        "type": 3,
        "typeArguments": []
      }
    },
    {
      "logId": 8,
      "loggedType": {
        "name": "",
        "type": 15,
        "typeArguments": []
      }
    },
    {
      "logId": 9,
      "loggedType": {
        "name": "",
        "type": 3,
        "typeArguments": []
      }
    },
    {
      "logId": 10,
      "loggedType": {
        "name": "",
        "type": 3,
        "typeArguments": []
      }
    },
    {
      "logId": 11,
      "loggedType": {
        "name": "",
        "type": 7,
        "typeArguments": []
      }
    },
    {
      "logId": 12,
      "loggedType": {
        "name": "",
        "type": 3,
        "typeArguments": []
      }
    },
    {
      "logId": 13,
      "loggedType": {
        "name": "",
        "type": 3,
        "typeArguments": []
      }
    },
    {
      "logId": 14,
      "loggedType": {
        "name": "",
        "type": 17,
        "typeArguments": []
      }
    },
    {
      "logId": 15,
      "loggedType": {
        "name": "",
        "type": 7,
        "typeArguments": []
      }
    },
    {
      "logId": 16,
      "loggedType": {
        "name": "",
        "type": 7,
        "typeArguments": []
      }
    },
    {
      "logId": 17,
      "loggedType": {
        "name": "",
        "type": 7,
        "typeArguments": []
      }
    }
  ],
  "messagesTypes": [],
  "configurables": []
};

const _storageSlots: StorageSlot[] = [
  {
    "key": "02dac99c283f16bc91b74f6942db7f012699a2ad51272b15207b9cc14a70dbae",
    "value": "0000000000000000000000000000000000000000000000000000000000000000"
  },
  {
    "key": "02dac99c283f16bc91b74f6942db7f012699a2ad51272b15207b9cc14a70dbaf",
    "value": "0000000000000000000000000000000000000000000000000000000000000000"
  },
  {
    "key": "b48b753af346966d0d169c0b2e3234611f65d5cfdb57c7b6e7cd6ca93707bee0",
    "value": "0000000000000000000000000000000000000000000000000000000000000000"
  },
  {
    "key": "de9090cb50e71c2588c773487d1da7066d0c719849a7e58dc8b6397a25c567c0",
    "value": "0000000000000000000000000000000000000000000000000000000000000000"
  },
  {
    "key": "de9090cb50e71c2588c773487d1da7066d0c719849a7e58dc8b6397a25c567c1",
    "value": "0000000000000000000000000000000000000000000000000000000000000000"
  },
  {
    "key": "f383b0ce51358be57daa3b725fe44acdb2d880604e367199080b4379c41bb6ed",
    "value": "0000000000000000000000000000000000000000000000000000000000000000"
  }
];

export class StrategyFixedPriceSaleAbi__factory {
  static readonly abi = _abi;

  static readonly storageSlots = _storageSlots;

  static createInterface(): StrategyFixedPriceSaleAbiInterface {
    return new Interface(_abi) as unknown as StrategyFixedPriceSaleAbiInterface
  }

  static connect(
    id: string | AbstractAddress,
    accountOrProvider: Account | Provider
  ): StrategyFixedPriceSaleAbi {
    return new Contract(id, _abi, accountOrProvider) as unknown as StrategyFixedPriceSaleAbi
  }

  static async deployContract(
    bytecode: BytesLike,
    wallet: Account,
    options: DeployContractOptions = {}
  ): Promise<StrategyFixedPriceSaleAbi> {
    const factory = new ContractFactory(bytecode, _abi, wallet);

    const { storageSlots } = StrategyFixedPriceSaleAbi__factory;

    const contract = await factory.deployContract({
      storageSlots,
      ...options,
    });

    return contract as unknown as StrategyFixedPriceSaleAbi;
  }
}
