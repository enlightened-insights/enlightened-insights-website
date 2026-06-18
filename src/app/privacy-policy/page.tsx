export default function PrivacyPolicyPage() {
  return (
    <main style={{ maxWidth: "720px", margin: "0 auto", padding: "48px 24px", lineHeight: 1.6 }}>
      <h1>Privacy Policy</h1>
      <p><em>Enlightened Insights Consulting — Meta Ads Data Sync</em></p>
      <p><em>Last updated: June 18, 2026</em></p>

      <h2>Overview</h2>
      <p>
        This application (&ldquo;the App&rdquo;) is an internal data integration tool built and operated by
        Enlightened Insights Consulting. The App connects to the Meta Marketing API to retrieve advertising
        performance data (such as spend, impressions, clicks, and conversions) from ad accounts owned and
        administered by Enlightened Insights Consulting, and transfers that data into a private Supabase
        database for internal reporting and analysis purposes.
      </p>
      <p>
        The App does not collect, process, or store any personal data belonging to end users, customers, or
        members of the public. It does not interact with individuals outside of Enlightened Insights
        Consulting in any way.
      </p>

      <h2>What Information We Access</h2>
      <p>The App requests read-only access to advertising account data via the <code>ads_read</code> permission, including:</p>
      <ul>
        <li>Campaign, ad set, and ad-level metadata (names, IDs, status)</li>
        <li>Aggregated performance metrics (impressions, clicks, spend, conversions, reach)</li>
        <li>Account-level identifiers necessary to query the above</li>
      </ul>
      <p>
        The App does not access personal data of individuals who view or interact with ads (e.g., no names,
        emails, or device identifiers of ad viewers are collected).
      </p>

      <h2>How Information Is Used</h2>
      <p>Data retrieved from the Meta Marketing API is used exclusively for:</p>
      <ul>
        <li>Internal marketing performance reporting</li>
        <li>Analysis of advertising campaign effectiveness</li>
        <li>Operational dashboards used by Enlightened Insights Consulting staff</li>
      </ul>

      <h2>How Information Is Stored</h2>
      <p>
        Retrieved data is stored in a private, access-controlled Supabase (PostgreSQL) database. Access to this
        database is restricted to authorized personnel of Enlightened Insights Consulting. Data is not sold,
        shared, or disclosed to any third party.
      </p>

      <h2>Data Retention and Deletion</h2>
      <p>
        Aggregated advertising performance data is retained for as long as it is useful for internal reporting
        purposes. Since the App does not collect personal data about end users, there is no end-user data to
        delete. If you have questions about data retained by this App, contact us using the details below.
      </p>

      <h2>Changes to This Policy</h2>
      <p>
        This policy may be updated from time to time to reflect changes in how the App operates. The
        &ldquo;Last updated&rdquo; date above will be revised accordingly.
      </p>

      <h2>Contact</h2>
      <p>
        For questions about this Privacy Policy or the App&apos;s data practices, contact:<br />
        <strong>Enlightened Insights Consulting</strong><br />
        Toronto, Ontario, Canada<br />
        jeremy@enlightenedinsights.org
      </p>
    </main>
  );
}
