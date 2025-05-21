export default function PrivacyPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold mb-8">Privacy Policy</h1>
        
        <div className="prose max-w-none dark:prose-invert">
          <div className="bg-card border rounded-lg p-6 mb-8">
            <p className="text-lg">
              Your privacy is important to us. It is Xcom's policy to respect your privacy regarding
              any information we may collect from you across our website.
            </p>
          </div>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Information We Collect</h2>
            <div className="bg-muted/50 rounded-lg p-6">
              <p className="mb-4">
                We only ask for personal information when we truly need it to provide a service to you.
                We collect it by fair and lawful means, with your knowledge and consent.
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Name and contact information</li>
                <li>Billing and shipping addresses</li>
                <li>Payment information</li>
                <li>Order history and preferences</li>
                <li>Device and browser information</li>
              </ul>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Why We Collect Information</h2>
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="bg-card border rounded-lg p-6">
                <h3 className="font-semibold mb-2">Service Provision</h3>
                <ul className="text-sm text-muted-foreground space-y-2">
                  <li>To provide and maintain our Service</li>
                  <li>To notify you about changes to our Service</li>
                  <li>To provide customer support</li>
                </ul>
              </div>
              <div className="bg-card border rounded-lg p-6">
                <h3 className="font-semibold mb-2">Service Improvement</h3>
                <ul className="text-sm text-muted-foreground space-y-2">
                  <li>To gather analysis and valuable information</li>
                  <li>To improve our Service</li>
                  <li>To detect, prevent and address technical issues</li>
                </ul>
              </div>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Data Protection</h2>
            <div className="bg-muted/50 rounded-lg p-6">
              <p className="mb-4">We employ industry standard techniques to protect your personal information:</p>
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <h3 className="font-semibold mb-2">Security Measures</h3>
                  <ul className="text-sm text-muted-foreground space-y-2">
                    <li>Data encryption in transit and at rest</li>
                    <li>Regular security assessments</li>
                    <li>Penetration testing</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Access Controls</h3>
                  <ul className="text-sm text-muted-foreground space-y-2">
                    <li>Limited access to personal information</li>
                    <li>Strict physical access controls</li>
                    <li>Employee security training</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Your Rights</h2>
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="bg-card border rounded-lg p-6">
                <h3 className="font-semibold mb-2">Data Control</h3>
                <ul className="text-sm text-muted-foreground space-y-2">
                  <li>Right to access your data</li>
                  <li>Right to update information</li>
                  <li>Right to delete your data</li>
                </ul>
              </div>
              <div className="bg-card border rounded-lg p-6">
                <h3 className="font-semibold mb-2">Privacy Choices</h3>
                <ul className="text-sm text-muted-foreground space-y-2">
                  <li>Right to object to processing</li>
                  <li>Right to data portability</li>
                  <li>Right to withdraw consent</li>
                </ul>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}