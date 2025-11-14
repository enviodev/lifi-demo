/*
 * Please refer to https://docs.envio.dev for a thorough guide on all Envio indexer features
 */
import {
  LiFiDiamond,
  LiFiDiamond_BridgeToNonEVMChain,
  LiFiDiamond_BridgeToNonEVMChainBytes32,
  LiFiDiamond_LiFiGenericSwapCompleted,
  LiFiDiamond_LiFiSwappedGeneric,
  LiFiDiamond_LiFiTransferCompleted,
  LiFiDiamond_LiFiTransferRecovered,
  LiFiDiamond_LiFiTransferStarted,
} from "generated";

LiFiDiamond.BridgeToNonEVMChain.handler(async ({ event, context }) => {
  const entity: LiFiDiamond_BridgeToNonEVMChain = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    transactionId: event.params.transactionId,
    destinationChainId: event.params.destinationChainId,
    receiver: event.params.receiver,
  };

  context.LiFiDiamond_BridgeToNonEVMChain.set(entity);

  let currentEventCount = (await context.NetworkData.get(event.chainId.toString()))?.totalEvents || 0;

  const networkData = await context.NetworkData.get(event.chainId.toString());

  context.NetworkData.set({
    id: event.chainId.toString(),
    totalEvents: BigInt(currentEventCount),
  });
});

LiFiDiamond.BridgeToNonEVMChainBytes32.handler(async ({ event, context }) => {
  const entity: LiFiDiamond_BridgeToNonEVMChainBytes32 = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    transactionId: event.params.transactionId,
    destinationChainId: event.params.destinationChainId,
    receiver: event.params.receiver,
  };

  context.LiFiDiamond_BridgeToNonEVMChainBytes32.set(entity);
});

LiFiDiamond.LiFiGenericSwapCompleted.handler(async ({ event, context }) => {
  const entity: LiFiDiamond_LiFiGenericSwapCompleted = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    transactionId: event.params.transactionId,
    integrator: event.params.integrator,
    referrer: event.params.referrer,
    receiver: event.params.receiver,
    fromAssetId: event.params.fromAssetId,
    toAssetId: event.params.toAssetId,
    fromAmount: event.params.fromAmount,
    toAmount: event.params.toAmount,
  };

  context.LiFiDiamond_LiFiGenericSwapCompleted.set(entity);
});

LiFiDiamond.LiFiSwappedGeneric.handler(async ({ event, context }) => {
  const entity: LiFiDiamond_LiFiSwappedGeneric = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    transactionId: event.params.transactionId,
    integrator: event.params.integrator,
    referrer: event.params.referrer,
    fromAssetId: event.params.fromAssetId,
    toAssetId: event.params.toAssetId,
    fromAmount: event.params.fromAmount,
    toAmount: event.params.toAmount,
  };

  context.LiFiDiamond_LiFiSwappedGeneric.set(entity);
});

LiFiDiamond.LiFiTransferCompleted.handler(async ({ event, context }) => {
  const entity: LiFiDiamond_LiFiTransferCompleted = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    transactionId: event.params.transactionId,
    receivingAssetId: event.params.receivingAssetId,
    receiver: event.params.receiver,
    amount: event.params.amount,
    timestamp: event.params.timestamp,
  };

  context.LiFiDiamond_LiFiTransferCompleted.set(entity);
});

LiFiDiamond.LiFiTransferRecovered.handler(async ({ event, context }) => {
  const entity: LiFiDiamond_LiFiTransferRecovered = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    transactionId: event.params.transactionId,
    receivingAssetId: event.params.receivingAssetId,
    receiver: event.params.receiver,
    amount: event.params.amount,
    timestamp: event.params.timestamp,
  };

  context.LiFiDiamond_LiFiTransferRecovered.set(entity);
});

LiFiDiamond.LiFiTransferStarted.handler(async ({ event, context }) => {
  const entity: LiFiDiamond_LiFiTransferStarted = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    bridgeData_0: event.params.bridgeData
    [0]
    ,
    bridgeData_1: event.params.bridgeData
    [1]
    ,
    bridgeData_2: event.params.bridgeData
    [2]
    ,
    bridgeData_3: event.params.bridgeData
    [3]
    ,
    bridgeData_4: event.params.bridgeData
    [4]
    ,
    bridgeData_5: event.params.bridgeData
    [5]
    ,
    bridgeData_6: event.params.bridgeData
    [6]
    ,
    bridgeData_7: event.params.bridgeData
    [7]
    ,
    bridgeData_8: event.params.bridgeData
    [8]
    ,
    bridgeData_9: event.params.bridgeData
    [9]
    ,
  };

  context.LiFiDiamond_LiFiTransferStarted.set(entity);
});
