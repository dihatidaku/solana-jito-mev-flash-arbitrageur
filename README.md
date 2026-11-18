# Solana Jito-MEV Flash Arbitrageur ⚡🏎️

A zero-revert, sub-second cross-DEX atomic arbitrage capital agent powered by **Jito-Solana Block Engine Bundles**.

## 🎯 Architecture
- **Triangular Cycle Scanner:** Continuously monitors orderbooks across Phoenix, OpenBook v2, and Raydium CLMM for price discrepancies.
- **Jito MEV Bundles:** Submits atomic transactions directly to validator block leaders with dynamic tipping, eliminating sandwich attacks and public mempool frontrunning.
- **Instant Settlement:** Guaranteed all-or-nothing execution with zero risk of single-leg failures.

## 🚀 Devnet Simulation
```bash
npm install
npm run simulate
```

Developed for the **OOBE Protocol Superteam Autonomous Capital Agent Challenge**.
