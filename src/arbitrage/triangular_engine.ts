export class TriangularArbitrageEngine {
  public scanTriangularPath(solPriceUsdcPhoenix: number, solPriceUsdcRaydium: number) {
    const spreadPct = ((solPriceUsdcPhoenix - solPriceUsdcRaydium) / solPriceUsdcRaydium) * 100;
    return {
      spreadPct: spreadPct.toFixed(3),
      isProfitable: spreadPct > 0.15 // Net of taker fees
    };
  }
}
