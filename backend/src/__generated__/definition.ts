// This is an auto-generated file, do not edit manually
export const definition = {
  models: {
    Attestation: {
      id: "kjzl6hvfrbw6ca3j34pb6pwii48a1jol68y1kwdml35bdh5ejhtsd5qwgva6s09",
      accountRelation: { type: "list" },
    },
    Confirm: {
      id: "kjzl6hvfrbw6ca6jzsbaolivvlz8fne62dhvzvmk6ewvyuxm88gfi3eugvm5soc",
      accountRelation: { type: "list" },
    },
  },
  objects: {
    AttestationTypes: {
      name: { type: "string", required: true },
      type: { type: "string", required: true },
    },
    Attestation: {
      r: { type: "string", required: true },
      s: { type: "string", required: true },
      v: { type: "integer", required: true },
      uid: { type: "string", required: true },
      data: { type: "string", required: true },
      time: { type: "integer", required: true },
      types: {
        type: "list",
        required: false,
        item: {
          type: "reference",
          refType: "object",
          refName: "AttestationTypes",
          required: false,
        },
      },
      refUID: { type: "string", required: false },
      schema: { type: "string", required: true },
      chainId: { type: "integer", required: true },
      version: { type: "integer", required: true },
      attester: { type: "string", required: true, indexed: true },
      recipient: { type: "string", required: false, indexed: true },
      easVersion: { type: "string", required: true },
      expirationTime: { type: "datetime", required: false },
      revocationTime: { type: "datetime", required: false },
      verifyingContract: { type: "string", required: true },
      publisher: { type: "view", viewType: "documentAccount" },
      confirm: {
        type: "view",
        viewType: "relation",
        relation: {
          source: "queryConnection",
          model:
            "kjzl6hvfrbw6ca6jzsbaolivvlz8fne62dhvzvmk6ewvyuxm88gfi3eugvm5soc",
          property: "attestationId",
        },
      },
    },
    ConfirmTypes: {
      name: { type: "string", required: true },
      type: { type: "string", required: true },
    },
    Confirm: {
      r: { type: "string", required: true },
      s: { type: "string", required: true },
      v: { type: "integer", required: true },
      uid: { type: "string", required: true },
      data: { type: "string", required: true },
      time: { type: "integer", required: true },
      types: {
        type: "list",
        required: false,
        item: {
          type: "reference",
          refType: "object",
          refName: "ConfirmTypes",
          required: false,
        },
      },
      refUID: { type: "string", required: false },
      schema: { type: "string", required: true },
      chainId: { type: "integer", required: true },
      version: { type: "integer", required: true },
      attester: { type: "string", required: true, indexed: true },
      recipient: { type: "string", required: false, indexed: true },
      easVersion: { type: "string", required: true },
      attestationId: { type: "streamid", required: true },
      expirationTime: { type: "datetime", required: false },
      revocationTime: { type: "datetime", required: false },
      verifyingContract: { type: "string", required: true },
      publisher: { type: "view", viewType: "documentAccount" },
      attestation: {
        type: "view",
        viewType: "relation",
        relation: {
          source: "document",
          model:
            "kjzl6hvfrbw6ca3j34pb6pwii48a1jol68y1kwdml35bdh5ejhtsd5qwgva6s09",
          property: "attestationId",
        },
      },
    },
  },
  enums: {},
  accountData: {
    attestationList: { type: "connection", name: "Attestation" },
    confirmList: { type: "connection", name: "Confirm" },
  },
};
