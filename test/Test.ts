import assert from "assert";
import { 
  TestHelpers,
  LiFiDiamond_BridgeToNonEVMChain
} from "generated";
const { MockDb, LiFiDiamond } = TestHelpers;

describe("LiFiDiamond contract BridgeToNonEVMChain event tests", () => {
  // Create mock db
  const mockDb = MockDb.createMockDb();

  // Creating mock for LiFiDiamond contract BridgeToNonEVMChain event
  const event = LiFiDiamond.BridgeToNonEVMChain.createMockEvent({/* It mocks event fields with default values. You can overwrite them if you need */});

  it("LiFiDiamond_BridgeToNonEVMChain is created correctly", async () => {
    // Processing the event
    const mockDbUpdated = await LiFiDiamond.BridgeToNonEVMChain.processEvent({
      event,
      mockDb,
    });

    // Getting the actual entity from the mock database
    let actualLiFiDiamondBridgeToNonEVMChain = mockDbUpdated.entities.LiFiDiamond_BridgeToNonEVMChain.get(
      `${event.chainId}_${event.block.number}_${event.logIndex}`
    );

    // Creating the expected entity
    const expectedLiFiDiamondBridgeToNonEVMChain: LiFiDiamond_BridgeToNonEVMChain = {
      id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
      transactionId: event.params.transactionId,
      destinationChainId: event.params.destinationChainId,
      receiver: event.params.receiver,
    };
    // Asserting that the entity in the mock database is the same as the expected entity
    assert.deepEqual(actualLiFiDiamondBridgeToNonEVMChain, expectedLiFiDiamondBridgeToNonEVMChain, "Actual LiFiDiamondBridgeToNonEVMChain should be the same as the expectedLiFiDiamondBridgeToNonEVMChain");
  });
});
