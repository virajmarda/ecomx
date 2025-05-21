export default function TermsPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold mb-8">Terms & Conditions</h1>
        
        <div className="prose max-w-none dark:prose-invert">
          <div className="bg-card border rounded-lg p-6 mb-8">
            <p className="text-lg">
              Welcome to Xcom. By accessing and using this website, you accept and agree to be bound
              by the terms and provisions of this agreement.
            </p>
          </div>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">1. Use License</h2>
            <div className="bg-muted/50 rounded-lg p-6">
              <h3 className="font-semibold mb-2">Permission is granted to:</h3>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li>Temporarily download one copy of the materials for personal, non-commercial viewing only</li>
                <li>Use the website for legitimate shopping purposes</li>
                <li>Access product information and make purchases</li>
              </ul>
              
              <h3 className="font-semibold mt-4 mb-2">This license shall not:</h3>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li>Modify or copy the materials</li>
                <li>Use the materials for any commercial purpose</li>
                <li>Attempt to reverse engineer any software contained on the website</li>
              </ul>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">2. Disclaimer</h2>
            <div className="bg-card border rounded-lg p-6">
              <p className="text-muted-foreground mb-4">
                The materials on Xcom's website are provided on an 'as is' basis. Xcom makes no
                warranties, expressed or implied, and hereby disclaims and negates all other warranties
                including, without limitation:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li>Implied warranties or conditions of merchantability</li>
                <li>Fitness for a particular purpose</li>
                <li>Non-infringement of intellectual property or other violation of rights</li>
              </ul>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">3. Limitations</h2>
            <div className="bg-muted/50 rounded-lg p-6">
              <p className="text-muted-foreground">
                In no event shall Xcom or its suppliers be liable for any damages (including, without
                limitation, damages for loss of data or profit, or due to business interruption)
                arising out of the use or inability to use the materials on Xcom's website.
              </p>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">4. Accuracy of Materials</h2>
            <div className="bg-card border rounded-lg p-6">
              <p className="text-muted-foreground">
                The materials appearing on Xcom's website could include technical, typographical, or
                photographic errors. Xcom does not warrant that any of the materials on its website
                are accurate, complete, or current.
              </p>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">5. Links</h2>
            <div className="bg-muted/50 rounded-lg p-6">
              <p className="text-muted-foreground">
                Xcom has not reviewed all of the sites linked to its website and is not responsible
                for the contents of any such linked site. The inclusion of any link does not imply
                endorsement by Xcom of the site.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">6. Modifications</h2>
            <div className="bg-card border rounded-lg p-6">
              <p className="text-muted-foreground">
                Xcom may revise these terms of service for its website at any time without notice.
                By using this website, you are agreeing to be bound by the then current version of
                these terms of service.
              </p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}