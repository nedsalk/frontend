/* Autogenerated file. Do not edit manually. */

/* tslint:disable */
/* eslint-disable */

/*
  Fuels version: 0.89.1
  Forc version: 0.60.0
  Fuel-Core version: 0.27.0
*/

import { Interface, Contract, ContractFactory } from "fuels";
import type { Provider, Account, AbstractAddress, BytesLike, DeployContractOptions, StorageSlot } from "fuels";
import type { RoyaltyManagerAbi, RoyaltyManagerAbiInterface } from "../RoyaltyManagerAbi";

const _abi = {
  "encoding": "1",
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
      "typeId": 3,
      "type": "enum Identity",
      "components": [
        {
          "name": "Address",
          "type": 7,
          "typeArguments": null
        },
        {
          "name": "ContractId",
          "type": 8,
          "typeArguments": null
        }
      ],
      "typeParameters": null
    },
    {
      "typeId": 4,
      "type": "enum Option",
      "components": [
        {
          "name": "None",
          "type": 0,
          "typeArguments": null
        },
        {
          "name": "Some",
          "type": 6,
          "typeArguments": null
        }
      ],
      "typeParameters": [
        6
      ]
    },
    {
      "typeId": 5,
      "type": "enum RoyaltyManagerErrors",
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
          "name": "CallerMustBeOwnerOrAdmin",
          "type": 0,
          "typeArguments": null
        },
        {
          "name": "FeeHigherThanLimit",
          "type": 0,
          "typeArguments": null
        },
        {
          "name": "FeeLimitTooHigh",
          "type": 0,
          "typeArguments": null
        }
      ],
      "typeParameters": null
    },
    {
      "typeId": 6,
      "type": "generic T",
      "components": null,
      "typeParameters": null
    },
    {
      "typeId": 7,
      "type": "struct Address",
      "components": [
        {
          "name": "bits",
          "type": 1,
          "typeArguments": null
        }
      ],
      "typeParameters": null
    },
    {
      "typeId": 8,
      "type": "struct ContractId",
      "components": [
        {
          "name": "bits",
          "type": 1,
          "typeArguments": null
        }
      ],
      "typeParameters": null
    },
    {
      "typeId": 9,
      "type": "struct OwnershipRenounced",
      "components": [
        {
          "name": "previous_owner",
          "type": 3,
          "typeArguments": null
        }
      ],
      "typeParameters": null
    },
    {
      "typeId": 10,
      "type": "struct OwnershipSet",
      "components": [
        {
          "name": "new_owner",
          "type": 3,
          "typeArguments": null
        }
      ],
      "typeParameters": null
    },
    {
      "typeId": 11,
      "type": "struct OwnershipTransferred",
      "components": [
        {
          "name": "new_owner",
          "type": 3,
          "typeArguments": null
        },
        {
          "name": "previous_owner",
          "type": 3,
          "typeArguments": null
        }
      ],
      "typeParameters": null
    },
    {
      "typeId": 12,
      "type": "struct RoyaltyInfo",
      "components": [
        {
          "name": "collection",
          "type": 8,
          "typeArguments": null
        },
        {
          "name": "receiver",
          "type": 3,
          "typeArguments": null
        },
        {
          "name": "fee",
          "type": 14,
          "typeArguments": null
        }
      ],
      "typeParameters": null
    },
    {
      "typeId": 13,
      "type": "struct RoyaltyRegistryEvent",
      "components": [
        {
          "name": "royalty_info",
          "type": 12,
          "typeArguments": null
        }
      ],
      "typeParameters": null
    },
    {
      "typeId": 14,
      "type": "u64",
      "components": null,
      "typeParameters": null
    }
  ],
  "functions": [
    {
      "inputs": [],
      "name": "get_royalty_fee_limit",
      "output": {
        "name": "",
        "type": 14,
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
          "name": "collection",
          "type": 8,
          "typeArguments": null
        }
      ],
      "name": "get_royalty_info",
      "output": {
        "name": "",
        "type": 4,
        "typeArguments": [
          {
            "name": "",
            "type": 12,
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
      "inputs": [],
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
      "inputs": [],
      "name": "owner",
      "output": {
        "name": "",
        "type": 4,
        "typeArguments": [
          {
            "name": "",
            "type": 3,
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
          "name": "collection",
          "type": 8,
          "typeArguments": null
        },
        {
          "name": "receiver",
          "type": 3,
          "typeArguments": null
        },
        {
          "name": "fee",
          "type": 14,
          "typeArguments": null
        }
      ],
      "name": "register_royalty_info",
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
          "name": "new_fee_limit",
          "type": 14,
          "typeArguments": null
        }
      ],
      "name": "set_royalty_fee_limit",
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
          "type": 3,
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
    }
  ],
  "loggedTypes": [
    {
      "logId": "10868993773200300074",
      "loggedType": {
        "name": "",
        "type": 5,
        "typeArguments": []
      }
    },
    {
      "logId": "12764806370357731851",
      "loggedType": {
        "name": "",
        "type": 2,
        "typeArguments": []
      }
    },
    {
      "logId": "9517900813706399297",
      "loggedType": {
        "name": "",
        "type": 10,
        "typeArguments": []
      }
    },
    {
      "logId": "7560785190340789011",
      "loggedType": {
        "name": "",
        "type": 13,
        "typeArguments": []
      }
    },
    {
      "logId": "7912903559520169914",
      "loggedType": {
        "name": "",
        "type": 9,
        "typeArguments": []
      }
    },
    {
      "logId": "10699517786846983752",
      "loggedType": {
        "name": "",
        "type": 11,
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

export const RoyaltyManagerAbi__factory = {
  abi: _abi,

  storageSlots: _storageSlots,

  createInterface(): RoyaltyManagerAbiInterface {
    return new Interface(_abi) as unknown as RoyaltyManagerAbiInterface
  },

  connect(
    id: string | AbstractAddress,
    accountOrProvider: Account | Provider
  ): RoyaltyManagerAbi {
    return new Contract(id, _abi, accountOrProvider) as unknown as RoyaltyManagerAbi
  },

  async deployContract(
    bytecode: BytesLike,
    wallet: Account,
    options: DeployContractOptions = {}
  ): Promise<RoyaltyManagerAbi> {
    const factory = new ContractFactory(bytecode, _abi, wallet);

    const contract = await factory.deployContract({
      storageSlots: _storageSlots,
      ...options,
    });

    return contract as unknown as RoyaltyManagerAbi;
  }
}
