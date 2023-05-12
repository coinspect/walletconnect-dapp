const example = {
  types: {
    RelayRequest: [
      { name: "target", type: "address" },
      { name: "message", type: "string" },
    ],
  },
  domain: {
    name: "EIP-712 Test - Relayed Transaction",
    version: "1",
    chainId: 1,
    verifyingContract: "0x6453D37248Ab2C16eBd1A8f782a2CBC65860E60B",
  },
  primaryType: "RelayRequest",
  message: {
  },
};

export const eip712 = {
  example,
};