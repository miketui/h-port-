import { motion } from "framer-motion";
import { PageTransition } from "@/components/layout/PageTransition";
import { SEO } from "@/components/SEO";

export default function Privacy() {
  return (
    <PageTransition>
      <SEO
        title="Privacy Policy"
        description="Privacy policy for michaeldavidjr.beauty — what data is collected, how it is used, and your rights."
        path="/privacy"
        keywords="privacy policy, data collection, Michael David Warren, MDW"
      />
      <div className="container mx-auto px-6 md:px-12 pt-12 pb-24 max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <p className="text-xs uppercase tracking-[0.3em] text-accent mb-4">Legal</p>
          <h1 className="text-5xl md:text-7xl font-display mb-4">Privacy Policy</h1>
          <p className="text-muted-foreground text-sm mb-16">Last updated: March 2026</p>

          <div className="prose prose-invert max-w-none space-y-12 text-muted-foreground leading-relaxed">

            <section>
              <h2 className="text-2xl font-display text-foreground mb-4">Overview</h2>
              <p>
                This Privacy Policy explains how MDW Studio (&ldquo;we,&rdquo; &ldquo;us,&rdquo; &ldquo;our&rdquo;) collects,
                uses, and protects personal information you provide when using{" "}
                <a href="https://michaeldavidjr.beauty" className="text-primary hover:underline">
                  michaeldavidjr.beauty
                </a>{" "}
                (the &ldquo;Site&rdquo;).
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-display text-foreground mb-4">Information We Collect</h2>
              <p>We collect personal information only when you voluntarily provide it:</p>
              <ul className="list-disc pl-6 mt-3 space-y-2">
                <li>
                  <strong className="text-foreground">Contact form:</strong> Your name, email address, project type, and
                  message when you submit a booking inquiry.
                </li>
                <li>
                  <strong className="text-foreground">Newsletter signup:</strong> Your name and email address when you
                  subscribe to the MDW insider list.
                </li>
              </ul>
              <p className="mt-4">
                We do not collect any information automatically beyond what is inherent to standard web server logs
                (e.g., IP address, browser type), which are not used for tracking or profiling.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-display text-foreground mb-4">How We Use Your Information</h2>
              <ul className="list-disc pl-6 mt-3 space-y-2">
                <li>
                  <strong className="text-foreground">Contact inquiries:</strong> To respond to your booking or project
                  request. Your information is not shared with third parties for marketing purposes.
                </li>
                <li>
                  <strong className="text-foreground">Newsletter:</strong> To send occasional updates about new work,
                  collaborations, and behind-the-scenes content. You may unsubscribe at any time using the link in any
                  email.
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-display text-foreground mb-4">Third-Party Services</h2>
              <p>
                We use <strong className="text-foreground">MailerLite</strong> to process and store email newsletter
                subscriptions and contact form submissions. MailerLite processes data in accordance with their own{" "}
                <a
                  href="https://www.mailerlite.com/legal/privacy-policy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline"
                >
                  Privacy Policy
                </a>
                .
              </p>
              <p className="mt-4">
                This site loads <strong className="text-foreground">Google Fonts</strong> from Google&rsquo;s servers.
                Google may collect technical data (such as your IP address) as part of this service. For more
                information, see{" "}
                <a
                  href="https://policies.google.com/privacy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline"
                >
                  Google&rsquo;s Privacy Policy
                </a>
                .
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-display text-foreground mb-4">Cookies</h2>
              <p>
                This site does not use cookies for tracking or advertising. A single preference item
                (&ldquo;cookie-notice-dismissed&rdquo;) is stored in your browser&rsquo;s{" "}
                <code className="text-accent text-sm">localStorage</code> only to remember that you have acknowledged
                our site notice. This does not track you across sites and contains no personal data.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-display text-foreground mb-4">Data Retention</h2>
              <p>
                Newsletter subscribers&rsquo; information is retained for as long as you remain subscribed. You may
                request deletion at any time. Contact inquiry information is retained only for the duration needed to
                respond to your inquiry.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-display text-foreground mb-4">Your Rights</h2>
              <p>
                You have the right to access, correct, or request deletion of any personal information we hold about
                you. To exercise these rights, please contact us at:
              </p>
              <p className="mt-4">
                <a href="mailto:info@michaeldavidjr.beauty" className="text-primary hover:underline font-display text-xl">
                  info@michaeldavidjr.beauty
                </a>
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-display text-foreground mb-4">Contact</h2>
              <p>
                If you have questions about this Privacy Policy or how your data is handled, please reach out at{" "}
                <a href="mailto:info@michaeldavidjr.beauty" className="text-primary hover:underline">
                  info@michaeldavidjr.beauty
                </a>
                .
              </p>
            </section>

          </div>
        </motion.div>
      </div>
    </PageTransition>
  );
}
