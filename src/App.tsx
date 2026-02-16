import React, { Component, createRef } from 'react';
import { SECTION_KEYS, type SectionKey } from "./Structures/types";
import { NAV_ITEMS,TermsContent,PrivacyContent,LegalContent,SupportContent } from './Components/constants';
import './App.css'

const LOGO_URL = "/Nexion White.png";

interface AppState {
  activeSection: SectionKey;
  isSidebarOpen: boolean;
}

export default class App extends Component<{}, AppState> {
  contentRef = createRef<HTMLDivElement>();

  state: AppState = {
    activeSection: SECTION_KEYS.TERMS,
    isSidebarOpen: false,
  };

  handleNavClick = (key: SectionKey) => {
    this.setState({ activeSection: key, isSidebarOpen: false }, () => {
      this.contentRef.current?.scrollTo({ top: 0, behavior: 'smooth' });
    });
  };

  toggleSidebar = () => {
    this.setState((prev) => ({ isSidebarOpen: !prev.isSidebarOpen }));
  };

  render() {
    const { activeSection, isSidebarOpen } = this.state;

    const SECTION_CONTENT: Record<SectionKey, React.ReactNode> = {
      terms: <TermsContent />,
      privacy: <PrivacyContent />,
      legal: <LegalContent />,
      support: <SupportContent />,
    };

    const renderContent = () => SECTION_CONTENT[activeSection];

    return (
      <div className="app-container">

        {/* Mobile Header */}
        <div className="mobile-header">
          <div className="logo-text">
            <img src={LOGO_URL} alt="Nexion Logo" />
            <span>NEXION <span className="gray-text">DOCUMENT</span></span>
          </div>
          <button onClick={this.toggleSidebar} className="menu-btn">
            <svg className="icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d={isSidebarOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
              />
            </svg>
          </button>
        </div>

        {/* Sidebar */}
        <aside className={`sidebar ${isSidebarOpen ? "open" : ""}`}>
          <div className="sidebar-inner">

            <div className="logo-desktop">
              <img src={LOGO_URL} alt="Nexion Logo" />
              <div className="logo-text-desktop">
                <span>Nexion</span>
                <span>Document</span>
              </div>
            </div>

            <nav className="nav">
              <p className="nav-title">Documentation</p>
              {NAV_ITEMS.map((item) => (
                <button
                  key={item.key}
                  onClick={() => this.handleNavClick(item.key)}
                  className={`nav-item ${activeSection === item.key ? "active" : ""}`}
                >
                  <div className={`nav-icon ${activeSection === item.key ? "active-icon" : ""}`}>
                    <svg className="icon" viewBox="0 -960 960 960" fill="currentColor">
                      {(Array.isArray(item.icon) ? item.icon : [item.icon]).map((d, i) => (
                        <path key={i} d={d} strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} />
                      ))}
                    </svg>
                  </div>
                  <span className="nav-label">{item.label}</span>
                  {activeSection === item.key && <div className="active-dot" />}
                </button>
              ))}
            </nav>

            <div className="sidebar-footer">
              <div className="footer-card">
                <div className="status">
                  <div className="status-dot" />
                  <span>System Status</span>
                </div>
                <p>Dashboard Online</p>
                <a href="https://nexiontrade.xyz" target="_blank" rel="noopener noreferrer">
                  Go to Main App →
                </a>
              </div>
            </div>

          </div>
        </aside>

        {/* Main Content */}
        <main ref={this.contentRef} className="main-content">
          <div className="content-wrapper">
            <div className="breadcrumb">
              <span>Documentation</span>
              <svg className="arrow" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M9 5l7 7-7 7" />
              </svg>
              <span className="highlight">
                {NAV_ITEMS.find(n => n.key === activeSection)?.label}
              </span>
            </div>

            <div className="section-content">{renderContent()}</div>

            <footer className="footer">
              <p>© 2023 Nexion Document. Part of <a href="https://nexiontrade.xyz">nexiontrade.xyz</a></p>
              <div className="footer-links">
                <a href="#">Risk Disclaimer</a>
                <a href="#">Journal Guidelines</a>
                <a href="#">Security</a>
              </div>
            </footer>
          </div>

          {/* Mobile Backdrop */}
          {isSidebarOpen && <div className="backdrop" onClick={this.toggleSidebar} />}
        </main>
      </div>
    );
  }
}
