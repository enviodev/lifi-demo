# LiFi Demo Indexer

Envio HyperIndex indexer for the `LiFiDiamond` contract across 19 chains.

## Chains

| Network | Chain ID |
|---|---|
| Ethereum Mainnet | 1 |
| Polygon | 137 |
| Scroll | 534352 |
| Gnosis | 100 |
| Avalanche | 43114 |
| Arbitrum | 42161 |
| Bsc | 56 |
| Celo | 42220 |
| Optimism | 10 |
| Base | 8453 |
| Mantle | 5000 |
| Worldchain | 480 |
| Lisk | 1135 |
| Sonic | 146 |
| Berachain | 80094 |
| Soneium | 1868 |
| Unichain | 130 |
| Hyperliquid | 999 |
| Plume | 98866 |

## Contracts

- **`LiFiDiamond`**: `BridgeToNonEVMChain`, `BridgeToNonEVMChainBytes32`, `LiFiGenericSwapCompleted`, `LiFiSwappedGeneric`, `LiFiTransferCompleted`, `LiFiTransferRecovered`, `LiFiTransferStarted`

## Schema entities (8)

`NetworkData`, `LiFiDiamond_BridgeToNonEVMChain`, `LiFiDiamond_BridgeToNonEVMChainBytes32`, `LiFiDiamond_LiFiGenericSwapCompleted`, `LiFiDiamond_LiFiSwappedGeneric`, `LiFiDiamond_LiFiTransferCompleted`, `LiFiDiamond_LiFiTransferRecovered`, `LiFiDiamond_LiFiTransferStarted`

## Run locally

```bash
pnpm install
pnpm dev
```

GraphQL playground at [http://localhost:8080](http://localhost:8080) (local password: `testing`).

## Generate from `config.yaml` or `schema.graphql`

```bash
pnpm codegen
```

## Pre-requisites

- [Node.js v22+ (v24 recommended)](https://nodejs.org/en/download/current)
- [pnpm](https://pnpm.io/installation)
- [Docker](https://www.docker.com/products/docker-desktop/) or [Podman](https://podman.io/)

## Resources

- [Envio docs](https://docs.envio.dev)
- [HyperIndex overview](https://docs.envio.dev/docs/HyperIndex/overview)
- [Discord](https://discord.gg/envio)
