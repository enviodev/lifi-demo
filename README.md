# LI.FI Demo Indexer

A multichain indexer that tracks LI.FI cross-chain transfers, bridges, and swaps via the `LiFiDiamond` contract. Built with [Envio HyperIndex](https://docs.envio.dev).

## Chains (19)

| Chain | ID |
|---|---|
| Ethereum | 1 |
| Optimism | 10 |
| BSC | 56 |
| Gnosis | 100 |
| Unichain | 130 |
| Polygon | 137 |
| Sonic | 146 |
| Worldchain | 480 |
| Hyperliquid | 999 |
| Lisk | 1135 |
| Soneium | 1868 |
| Mantle | 5000 |
| Base | 8453 |
| Arbitrum | 42161 |
| Celo | 42220 |
| Avalanche | 43114 |
| Berachain | 80094 |
| Plume | 98866 |
| Scroll | 534352 |

## What it indexes

`LiFiDiamond` events:

- `LiFiTransferStarted`: a cross-chain transfer is initiated
- `LiFiTransferCompleted`: a cross-chain transfer completes
- `LiFiTransferRecovered`: a transfer is recovered after failure
- `LiFiSwappedGeneric` / `LiFiGenericSwapCompleted`: same-chain swaps
- `BridgeToNonEVMChain` / `BridgeToNonEVMChainBytes32`: bridges to non-EVM destinations

## Schema

`NetworkData` plus per-event entities (`LiFiDiamond_LiFiTransferStarted`, `LiFiDiamond_LiFiTransferCompleted`, `LiFiDiamond_LiFiTransferRecovered`, `LiFiDiamond_LiFiSwappedGeneric`, `LiFiDiamond_LiFiGenericSwapCompleted`, `LiFiDiamond_BridgeToNonEVMChain`, `LiFiDiamond_BridgeToNonEVMChainBytes32`).

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

- [Node.js (use v18 or newer)](https://nodejs.org/en/download/current)
- [pnpm](https://pnpm.io/installation)
- [Docker](https://www.docker.com/products/docker-desktop/) or [Podman](https://podman.io/)

## Resources

- [Envio docs](https://docs.envio.dev)
- [HyperIndex overview](https://docs.envio.dev/docs/HyperIndex/overview)
- [Discord](https://discord.gg/envio)
