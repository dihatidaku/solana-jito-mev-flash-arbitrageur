import { TriangularArbitrageEngine } from "./arbitrage/triangular_engine";
import { JitoBundleSubmitter } from "./jito/bundle_submitter";

export class JitoMEVArbitrageur {
  private engine = new TriangularArbitrageEngine();
  private jito = new JitoBundleSubmitter();

  public runArbitrageCycle() {
    const opp = this.engine.scanTriangularPath(212.85, 212.10);
    console.log(`[Jito MEV Agent] Cross-DEX Spread: ${opp.spreadPct}% | Profitable: ${opp.isProfitable}`);
  }
}

if (require.main === module) {
  new JitoMEVArbitrageur().runArbitrageCycle();
}
