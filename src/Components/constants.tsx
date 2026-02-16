
import React from 'react';
import { SECTION_KEYS, type NavItem } from "../Structures/types";
import './constants.css';

export const NAV_ITEMS: NavItem[] = [
  { key: SECTION_KEYS.TERMS, label: 'Terms of Use', icon: 'M160-120v-80h480v80H160Zm226-194L160-540l84-86 228 226-86 86Zm254-254L414-796l86-84 226 226-86 86Zm184 408L302-682l56-56 522 522-56 56Z' },
  { key: SECTION_KEYS.PRIVACY, label: 'Data Policy', icon: 'M480-80q-139-35-229.5-159.5T160-516v-244l320-120 320 120v244q0 152-90.5 276.5T480-80Zm0-84q97-30 162-118.5T718-480H480v-315l-240 90v207q0 7 2 18h238v316Z' },
  { key: SECTION_KEYS.LEGAL, label: 'Risk Disclosure', icon: 'M324-111.5Q251-143 197-197t-85.5-127Q80-397 80-480q0-114 59.5-210.5T301-838q1 19 4 38.5t10 45.5q-72 44-113.5 116.5T160-480q0 134 93 227t227 93q134 0 227-93t93-227q0-85-41.5-158T644-755q7-26 10-45.5t5-37.5q102 51 161.5 147T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80q-83 0-156-31.5ZM310-310q-70-70-70-170 0-58 25.5-109t72.5-85q5 15 11 34.5t16 48.5q-22 23-33.5 51T320-480q0 66 47 113t113 47q66 0 113-47t47-113q0-32-11.5-60T595-591q8-24 14.5-44.5T621-674q47 34 73 85t26 109q0 100-70 170t-170 70q-100 0-170-70Zm130-310q-37-112-48.5-157.5T380-860q0-42 29-71t71-29q42 0 71 29t29 71q0 37-11.5 82.5T520-620h-80Zm-16.5 196.5Q400-447 400-480t23.5-56.5Q447-560 480-560t56.5 23.5Q560-513 560-480t-23.5 56.5Q513-400 480-400t-56.5-23.5Z' },
  { key: SECTION_KEYS.SUPPORT, label: 'Support & FAQ', icon: 'M440-120v-80h320v-284q0-117-81.5-198.5T480-764q-117 0-198.5 81.5T200-484v244h-40q-33 0-56.5-23.5T80-320v-80q0-21 10.5-39.5T120-469l3-53q8-68 39.5-126t79-101q47.5-43 109-67T480-840q68 0 129 24t109 66.5Q766-707 797-649t40 126l3 52q19 9 29.5 27t10.5 38v92q0 20-10.5 38T840-249v49q0 33-23.5 56.5T760-120H440ZM331.5-411.5Q320-423 320-440t11.5-28.5Q343-480 360-480t28.5 11.5Q400-457 400-440t-11.5 28.5Q377-400 360-400t-28.5-11.5Zm240 0Q560-423 560-440t11.5-28.5Q583-480 600-480t28.5 11.5Q640-457 640-440t-11.5 28.5Q617-400 600-400t-28.5-11.5ZM241-462q-7-106 64-182t177-76q89 0 156.5 56.5T720-519q-91-1-167.5-49T435-698q-16 80-67.5 142.5T241-462Z' },
];

export const TermsContent: React.FC = () => (
  <div className="legal-content">
    <h1 className="legal-title">Terms of Use</h1>
    <p className="legal-updated">Last updated: February 6, 2026</p>
    
    <h2>1. The Nexion Document Platform</h2>
    <p>Nexion Document is a free analytical companion for the <a href="https://nexiontrade.xyz" className="link-accent">nexiontrade.xyz</a> trading ecosystem. It provides specialized journaling and performance analytics to help traders refine their strategies across spot, perpetual derivatives, indices, crypto, and forex markets.</p>
    
    <h2>2. Access Requirements</h2>
    <p>While the platform is completely free to use, account creation requires an access code to maintain community quality. You may obtain your access code by:</p>
    <ul>
      <li>Joining our exclusive <strong>Inner Circle Community</strong> on Discord: <a href="https://discord.gg/faXyh2pKQD" className="link-accent">discord.gg/faXyh2pKQD</a></li>
      <li>Contacting support directly at <a href="mailto:support@nexiontrade.xyz" className="link-accent">support@nexiontrade.xyz</a></li>
    </ul>
    
    <h2>3. Journaling Features</h2>
    <p>The Journaling module provides two dedicated data tables for comprehensive trade logging:</p>
    <ul>
      <li><strong>Perpetual Derivatives Journal:</strong> Track leveraged positions, funding rates, liquidation levels, and PnL for futures/derivatives trading.</li>
      <li><strong>Spot Trading Journal:</strong> Log spot market entries including asset pairs, position sizing, and execution details.</li>
    </ul>
    <p>Both journals support manual entry and structured imports, and are designed for all asset classes: crypto, forex, indices, and commodities.</p>
    
    <h2>4. Advanced Statistics Dashboard</h2>
    <p>Our Statistics module transforms raw journal data into actionable insights through dozens of visual analytics:</p>
    <ul>
      <li><strong>Balance & Equity Charts:</strong> Visualize portfolio growth and drawdowns over time</li>
      <li><strong>Global & Single-Trade Statistics:</strong> Win rate, profit factor, expectancy, max drawdown, and R:R distribution</li>
      <li><strong>Profit Calendar:</strong> Heatmap view of daily/weekly/monthly profitability</li>
      <li><strong>PnL vs. R:R Scatter Charts:</strong> Correlation analysis between risk-reward and outcomes</li>
      <li><strong>Win Rate & Asset Allocation Circles:</strong> Interactive circular visualizations for pair performance and capital distribution</li>
      <li><strong>Psychology Analysis:</strong> Emotional pattern detection based on trade timing and outcome sequences</li>
      <li><strong>Pair Performance Tables:</strong> Comparative metrics across all traded assets/pairs</li>
    </ul>
    
    <h2>5. Settings & Risk Calculator</h2>
    <p>The Settings module includes:</p>
    <ul>
      <li><strong>Account Preferences:</strong> Profile management, default journal templates, and display options</li>
      <li><strong>Automatic Risk Calculator:</strong> Real-time position sizing based on account balance, stop-loss distance, and maximum risk percentage per trade</li>
    </ul>
    
    <h2>6. Free Access Commitment</h2>
    <p>All core features—journaling tables, statistical visualizations, and risk calculator—are provided completely free with no hidden fees or premium tiers.</p>
  </div>
);

export const PrivacyContent: React.FC = () => (
  <div className="legal-content">
    <h1 className="legal-title">Data & Privacy Policy</h1>
    <p className="legal-updated">Last updated: February 6, 2026</p>
    
    <h2>1. Data Collection</h2>
    <p>We collect only the data necessary to power your analytics:</p>
    <ul>
      <li>Trading logs (entry/exit prices, timestamps, asset pairs, position size)</li>
      <li>Personal notes and trade tags added during journaling</li>
      <li>Basic account preferences for Settings customization</li>
    </ul>
    
    <h2>2. Data Processing</h2>
    <p>Your trading data is processed to generate statistical visualizations within the Statistics dashboard. Processing occurs securely on our servers with encryption in transit and at rest. No trading data is shared with third parties or used for marketing purposes.</p>
    
    <h2>3. Access Code System</h2>
    <p>To join our Inner Circle Community and receive your access code, you may provide an email address to Discord or our support team. These contact details are used solely for access provisioning and support communication.</p>
    
    <h2>4. Data Retention</h2>
    <p>Your journal data is retained as long as your account remains active. You may request complete data deletion at any time by contacting <a href="mailto:support@nexiontrade.xyz" className="link-accent">support@nexiontrade.xyz</a>.</p>
  </div>
);

export const LegalContent: React.FC = () => (
  <div className="legal-content">
    <h1 className="legal-title">Legal Disclosures</h1>
    
    <div className="legal-callout">
      <h2 className="legal-callout-title">Educational Tool Only</h2>
      <p className="legal-callout-text">Nexion Document is a journaling and analytics platform. It does not execute trades, hold funds, provide financial advice, or guarantee trading profits. All insights are derived from your historical data for educational purposes only.</p>
    </div>

    <h2>1. No Brokerage Services</h2>
    <p>Nexion Document is not a broker, exchange, or financial institution. All trades must be executed through your chosen third-party platforms. We bear no responsibility for execution errors, slippage, or losses incurred on external trading accounts.</p>
    
    <h2>2. Risk Acknowledgement</h2>
    <p>Trading financial markets involves substantial risk of loss. Statistical patterns identified by our tools do not predict future outcomes. Always conduct your own analysis and never risk capital you cannot afford to lose.</p>

    <h2>3. Access Code & Community</h2>
    <p>Access to Nexion Document requires an invitation code distributed exclusively through our Inner Circle Discord community or support team. Sharing or selling access codes violates these terms and will result in account termination.</p>
  </div>
);

export const SupportContent: React.FC = () => (
  <div className="legal-content">
    <h1 className="legal-title">Support & FAQ</h1>
    <p>Need help with journaling, statistics, or risk calculator settings? Our Inner Circle community and support team are here to assist.</p>
    
    <div className="support-grid">
      <div className="support-card">
        <h3 className="support-title-green">Get Access Code</h3>
        <p className="support-desc">Join our exclusive community to receive your free access code:</p>
        <a href="https://discord.gg/faXyh2pKQD" target="_blank" rel="noopener noreferrer" className="support-link-green">
          Join Inner Circle Discord
        </a>
      </div>
      
      <div className="support-card">
        <h3 className="support-title-blue">Direct Support</h3>
        <p className="support-desc">Technical issues or access questions?</p>
        <a href="mailto:support@nexiontrade.xyz" className="support-link-blue">
          support@nexiontrade.xyz
        </a>
      </div>
    </div>

    <div className="faq-panel">
      <h2 className="faq-title">Frequently Asked Questions</h2>
      <div className="faq-list">
        <details className="faq-item">
          <summary className="faq-summary">
            How do I get started with Nexion Document?
            <svg className='faq-chevron' xmlns="http://www.w3.org/2000/svg" height="16" viewBox="0 -960 960 960" width="16" fill="#e3e3e3"><path d="M480-344 240-584l56-56 184 184 184-184 56 56-240 240Z"/></svg>
          </summary>
          <p className="faq-answer">First, join our Inner Circle Discord (<a href="https://discord.gg/faXyh2pKQD" className="link-accent">discord.gg/faXyh2pKQD</a>) or email support to receive your free access code. After registration, use the Journaling module to log spot or perpetual trades, then explore dozens of analytics in the Statistics dashboard.</p>
        </details>
        <details className="faq-item">
          <summary className="faq-summary">
            What markets can I journal?
            <svg className='faq-chevron' xmlns="http://www.w3.org/2000/svg" height="16" viewBox="0 -960 960 960" width="16" fill="#e3e3e3"><path d="M480-344 240-584l56-56 184 184 184-184 56 56-240 240Z"/></svg>
          </summary>
          <p className="faq-answer">All major markets: cryptocurrency (spot & perpetuals), forex pairs, stock indices, and commodities. The platform includes dedicated tables for spot and perpetual derivative trading with market-specific fields.</p>
        </details>
        <details className="faq-item">
          <summary className="faq-summary">
            Is the risk calculator automatic?
            <svg className='faq-chevron' xmlns="http://www.w3.org/2000/svg" height="16" viewBox="0 -960 960 960" width="16" fill="#e3e3e3"><path d="M480-344 240-584l56-56 184 184 184-184 56 56-240 240Z"/></svg>
          </summary>
          <p className="faq-answer">Yes—configure your maximum risk percentage in Settings, then the calculator automatically computes position size based on your stop-loss distance and current account balance for every new trade entry.</p>
        </details>
      </div>
    </div>
  </div>
);
