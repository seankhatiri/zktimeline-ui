
export function simple_ranker_abi() {
    return [
        {
            "inputs": [
                {
                    "components": [
                        {
                            "internalType": "uint256",
                            "name": "id",
                            "type": "uint256"
                        },
                        {
                            "internalType": "enum Ranker.Category",
                            "name": "category",
                            "type": "uint8"
                        }
                    ],
                    "internalType": "struct Ranker.Tweet[]",
                    "name": "userTweets",
                    "type": "tuple[]"
                },
                {
                    "components": [
                        {
                            "internalType": "uint256",
                            "name": "id",
                            "type": "uint256"
                        },
                        {
                            "internalType": "enum Ranker.Category",
                            "name": "category",
                            "type": "uint8"
                        }
                    ],
                    "internalType": "struct Ranker.Tweet[]",
                    "name": "currentTweets",
                    "type": "tuple[]"
                },
                {
                    "internalType": "uint256",
                    "name": "k",
                    "type": "uint256"
                }
            ],
            "name": "rankTweets",
            "outputs": [
                {
                    "internalType": "uint256[]",
                    "name": "",
                    "type": "uint256[]"
                }
            ],
            "stateMutability": "pure",
            "type": "function"
        }
    ]
}

export function simple_ranker_contract_address() {
    return "0x"
}

export function cosine_ranker_abi() {
    return []
}

export function cosine_ranker_contract_address() {
    return "0x"
}