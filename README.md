# CHHCK NFT Project

Building an NFT project that allows artist to mint their album covers and make it available in marketplaces or sites for their fans to mint. Wizkid has a huge fan base that are so loyal and having an NFT project this is close to Wizkid's career would be of great impact to them.🦅🦅❤️

## Built With

- Solidity
- Open Zeppelin's ERC721, Base64, Counter, and ERC721URI classes
- Polygon Mumbai
- IPFS & Web3.Storage(uploading image & JSON file)

## Live Demo

### Deployed & Verified Contract
- [Polygon Scan](https://mumbai.polygonscan.com/address/0xDaE1f97ac11fB1f357CD59C18473FE578bFF2d9F)
### To interact with Contract via SafeMint 
Enter your Address like: 
- ``0x34d9297629323795CE29190159206cDD81e6B2d2``
Enter media like: ``https://bafybeih4cdjf3uaxlpodpsndazdnd7zskfwgofwjzh3vwq6g7wbjomwj7i.ipfs.dweb.link/morelovelessego1.json``

### NFT on OpenSea Testnet
[OpenSea Testnet](https://testnets.opensea.io/account?tab=collected)

## Getting Started

To get a local copy up and running follow these simple example steps.

```
$ Fork the repository
$ Git clone https://github.com/your-username/CHHCK
$ git checkout -b branch name
$ git remote add upstream https://github.com/jebitok-dev/CHHCK
$ git pull upstream master
$ git commit -m "commit message"
$ git push -u origin HEAD
```

To write, compile, deploy and verify contract locally

```
$ npx hardhat compile
$ npx hardhat run scripts/deploy.js --network mumbai
$ npx hardhat verify --network mumbai YOUR_SMARTCONTRACT_ADDRESS

```
Configuring Web3.Storage
- upload media/json file to the web3.storage dashboard
- create the ``metadata.json`` file configure according to [OpenSea Metadata](https://docs.opensea.io/docs/metadata-standards)
- copy CID of image and add to JSON file ``https://dweb.link/ipfs/YOUR_CID``

## Author

👤 **Author**

- GitHub: [@Jebitok-dev](https://github.com/Jebitok-dev)

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

Feel free to check the [issues page](issues/).

## Show your support

Give a ⭐️ if you like this project!

## Acknowledgment

I hereby acknowledge the organizers and sponsors of [ChainLink Hackathon](https://chain.link/hackathon?utm_medium=community&utm_source=developer-expert&utm_campaign=spring-2022-hackathon&utm_content=3).
