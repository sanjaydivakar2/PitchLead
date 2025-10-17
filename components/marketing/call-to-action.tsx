import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowRight, Play, CheckCircle } from 'lucide-react';

export function CallToAction() {
  const benefits = [
    'Start creating in under 5 minutes',
    'No credit card required',
    'Cancel anytime',
    'Full access to all features',
  ];

  return (
    <section className="py-20 sm:py-32">
      <div className="container">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-primary to-accent p-2">
          <div className="relative rounded-2xl bg-background/95 backdrop-blur-sm p-12 lg:p-16">
            {/* Background Pattern */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5" />
            <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-primary/10 to-transparent rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-gradient-to-tr from-accent/10 to-transparent rounded-full blur-3xl" />
            
            <div className="relative">
              <div className="mx-auto max-w-3xl text-center">
                {/* Badge */}
                <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 text-sm font-medium text-primary mb-6">
                  <Play className="h-4 w-4" />
                  Ready to get started?
                </div>

                {/* Headline */}
                <h2 className="text-display-xl text-foreground mb-6">
                  Start creating compelling{' '}
                  <span className="text-gradient">B2B stories</span>{' '}
                  today
                </h2>

                {/* Description */}
                <p className="text-body-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                  Join hundreds of B2B companies using PitchLead to transform their marketing 
                  and sales with 3-minute micro-webinars that actually convert.
                </p>

                {/* Benefits */}
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
                  {benefits.map((benefit, index) => (
                    <div key={index} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <CheckCircle className="h-4 w-4 text-success flex-shrink-0" />
                      <span>{benefit}</span>
                    </div>
                  ))}
                </div>

                {/* CTAs */}
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
                  <Button asChild size="xl" className="group">
                    <Link href="/api/auth/login?screen_hint=signup">
                      Start Free Trial
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </Button>
                  <Button asChild variant="outline" size="xl">
                    <Link href="/demo">
                      Book a Demo
                    </Link>
                  </Button>
                </div>

                {/* Social Proof */}
                <div className="flex flex-col sm:flex-row items-center justify-center gap-8 text-sm text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <div className="flex -space-x-2">
                      {[1, 2, 3, 4].map((i) => (
                        <div
                          key={i}
                          className="w-8 h-8 rounded-full bg-gradient-to-br from-primary/20 to-accent/20 border-2 border-background flex items-center justify-center text-xs font-medium"
                        >
                          {String.fromCharCode(64 + i)}
                        </div>
                      ))}
                    </div>
                    <span>500+ companies trust PitchLead</span>
                  </div>
                  
                  <div className="flex items-center gap-2">
                    <div className="flex">
                      {[1, 2, 3, 4, 5].map((i) => (
                        <svg
                          key={i}
                          className="w-4 h-4 text-warning fill-current"
                          viewBox="0 0 20 20"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                    <span>4.9/5 from 200+ reviews</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Note */}
        <div className="mt-12 text-center">
          <p className="text-sm text-muted-foreground">
            Questions? <Link href="/contact" className="text-primary hover:underline">Contact our team</Link> or{' '}
            <Link href="/help" className="text-primary hover:underline">visit our help center</Link>
          </p>
        </div>
      </div>
    </section>
  );
}
