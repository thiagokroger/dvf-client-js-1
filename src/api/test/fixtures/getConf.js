const nock = require('nock')

module.exports = () => {
  const getConfResponse = {
    DVF: {
      exchangeSymbols: ['tETHUSD', 'tZRXUSD', 'tZRXETH'],
      exchangeAddress: '0xBd25cD867C304F079E696CBE44D958f3d3B683ba',
      starkExContractAddress: '0x204eAF71D3f15CF6F9A024159228573EE4543bF9',
      tempStarkVaultId: 1,
      depositExpiry: 720,
      depositNonce: 1
    },
    tokenRegistry: {
      ETH: {
        decimals: 18,
        quantization: 10000000000,
        minOrderSize: 0.1,
        starkTokenId:
          '0xb333e3142fe16b78628f19bb15afddaef437e72d6d7f5c6c20c6801a27fba6'
      },
      USDT: {
        decimals: 6,
        quantization: 1,
        minOrderSize: 25,
        settleSpread: -0.026,
        starkTokenId:
          '0x180bef8ae3462e919489763b84dc1dc700c45a249dec4d1136814a639f2dd7b',
        tokenAddress: '0x4c5f66596197a86fb30a2435e2ef4ddcb39342c9'
      },
      ZRX: {
        decimals: 18,
        quantization: 10000000000,
        minOrderSize: 40,
        starkTokenId:
          '0x3901ee6a6c5ac0f6e284f4273b961b7e9f29d25367d31d90b75820473a202f7',
        tokenAddress: '0xcd077abedd831a3443ffbe24fb76661bbb17eb69'
      },
      BTC: {
        decimals: 18,
        quantization: 10000000000,
        minOrderSize: 0.0001,
        starkTokenId:
          '0x21ef21d6b234cd669edd702dd3d1d017be888337010b950ae3679eb4194b4bc',
        tokenAddress: '0x40d8978500bf68324a51533cd6a21e3e59be324a'
      }
    },
    spareStarkVaultId: 2090569095
  }

  nock('https://api.deversifi.dev')
    .post('/v1/trading/r/getConf', {})
    .reply(200, getConfResponse)

  const getUserConfResponse = {
    DVF: {
      exchangeSymbols: ['tETHUSD', 'tZRXUSD', 'tZRXETH'],
      exchangeAddress: '0xBd25cD867C304F079E696CBE44D958f3d3B683ba',
      starkExContractAddress: '0x204eAF71D3f15CF6F9A024159228573EE4543bF9',
      tempStarkVaultId: 1,
      depositExpiry: 720,
      depositNonce: 1
    },
    tokenRegistry: {
      ETH: {
        decimals: 18,
        quantization: 10000000000,
        minOrderSize: 0.1,
        starkTokenId:
          '0xb333e3142fe16b78628f19bb15afddaef437e72d6d7f5c6c20c6801a27fba6',
        starkVaultId: 1000001
      },
      USDT: {
        decimals: 6,
        quantization: 1,
        minOrderSize: 25,
        settleSpread: -0.026,
        starkTokenId:
          '0x180bef8ae3462e919489763b84dc1dc700c45a249dec4d1136814a639f2dd7b',
        tokenAddress: '0x4c5f66596197a86fb30a2435e2ef4ddcb39342c9',
        starkVaultId: 1000002
      },
      ZRX: {
        decimals: 18,
        quantization: 10000000000,
        minOrderSize: 40,
        starkTokenId:
          '0x3901ee6a6c5ac0f6e284f4273b961b7e9f29d25367d31d90b75820473a202f7',
        tokenAddress: '0xcd077abedd831a3443ffbe24fb76661bbb17eb69',
        starkVaultId: 1000003
      },
      BTC: {
        decimals: 18,
        quantization: 10000000000,
        minOrderSize: 0.0001,
        starkTokenId:
          '0x21ef21d6b234cd669edd702dd3d1d017be888337010b950ae3679eb4194b4bc',
        tokenAddress: '0x40d8978500bf68324a51533cd6a21e3e59be324a',
        starkVaultId: 1000004
      }
    },
    spareStarkVaultId: 2090569095,
    ethAddress: '0xf858c2f2ac6b96df8c801bce90a3124a52d1915a'
  }

  nock('https://api.deversifi.dev')
    .post('/v1/trading/r/getUserConf', body => {
      return true
    })
    .reply(200, getUserConfResponse)
}
