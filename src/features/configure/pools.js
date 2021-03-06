// id: '池子id',
// name: '池子名字',  
// token: '池子代币',
// tokenDescription: '代币描述',
// tokenAddress: '代币ERC20地址',
// earnedToken: '奖励代币',
// earnedTokenAddress: '奖励代币ERC20地址',
// earnContractAddress: '池子合约地址',
import BigNumber from "bignumber.js";
export const pools = [
  {
    id: 'ycrv',
    name: 'YCRV',  
    token: 'yCRV',
    tokenDescription: 'YCRV',
    tokenAddress: '0xdF5e0e81Dff6FAF3A7e52BA697820c5e32D806A8',
    earnedToken: 'YFII',
    earnedTokenAddress: '0xa1d0E215a23d7030842FC67cE582a6aFa3CCaB83',
    earnContractAddress: '0xD2db1EF55549eCdacb4e7da081216AE96f0Eedcb',
    strategyContractAddress: '0x9eFE9FB2010B2c5fa7D34E69e709DD296d9c0bD9',
    price: 'curve-dao-token',
    depositedBalance: 0,
    claimAbleBalance: 0,
    claimPendingBalance: 0,
    claimAbleTokens: 0,
    magnitude: new BigNumber(10).exponentiatedBy(40).toNumber(),
    totalStake: 0,
    earningsPerShare: 0,
    idle: 0,
    allowance: 0,
    payout: 0,
    depositedTime: 0,
    isCrv: true
  },{
    id: 'weth',
    name: 'WETH',  
    token: 'WETH',
    tokenDescription: 'WETH',
    tokenAddress: '0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2',
    earnedToken: 'YFII',
    earnedTokenAddress: '0xa1d0E215a23d7030842FC67cE582a6aFa3CCaB83',
    earnContractAddress: '0xf693705e79ccc8707D3FcB4D89381CaC28e45a22',
    strategyContractAddress: '0x602ec22B362B0E8ae658D18f4435fE8c5c23cA0C',
    price: 'spaghetti',
    depositedBalance: 0,
    claimAbleBalance: 0,
    claimPendingBalance: 0,
    claimAbleTokens: 0,
    magnitude: new BigNumber(10).exponentiatedBy(40).toNumber(),
    totalStake: 0,
    earningsPerShare: 0,
    idle: 0,
    allowance: 0,
    payout: 0,
    depositedTime: 0,
    isCrv: false
  },
  {
    id: 'link',
    name: 'LINK',  
    token: 'LINK',
    tokenDescription: 'LINK',
    tokenAddress: '0x514910771AF9Ca656af840dff83E8264EcF986CA',
    earnedToken: 'YFII',
    earnedTokenAddress: '0xa1d0E215a23d7030842FC67cE582a6aFa3CCaB83',
    earnContractAddress: '0xCda9230923FCb25e26a20D7D9D12e1744405C9fC',
    strategyContractAddress: '0x780c2450632ecb4be69DA859987Be4875545E90b',
    price: 'spaghetti',
    depositedBalance: 0,
    claimAbleBalance: 0,
    claimPendingBalance: 0,
    claimAbleTokens: 0,
    magnitude: new BigNumber(10).exponentiatedBy(40).toNumber(),
    totalStake: 0,
    earningsPerShare: 0,
    idle: 0,
    allowance: 0,
    payout: 0,
    depositedTime: 0,
    isCrv: false
  }
]