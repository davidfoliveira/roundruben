const { VaultServer } = require('.');

const vault = new VaultServer();
vault.start(8091);
