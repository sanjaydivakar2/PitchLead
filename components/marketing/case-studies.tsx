import { ArrowRight, TrendingUp, Users, DollarSign } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function CaseStudies() {
  const caseStudies = [
    {
      company: 'TechCorp',
      logo: '🏢',
      industry: 'Enterprise Software',
      title: 'How TechCorp Generated 300% More Qualified Leads',
      description: 'By switching to 3-minute video stories, TechCorp transformed their lead generation strategy and saw unprecedented engagement rates.',
      metrics: [
        { label: 'Lead Increase', value: '300%', icon: TrendingUp },
        { label: 'Engagement Rate', value: '85%', icon: Users },
        { label: 'Revenue Growth', value: '$2.4M', icon: DollarSign },
      ],
      quote: "PitchLead helped us tell our story in a way that actually resonates with busy B2B buyers. The 3-minute format is perfect.",
      author: 'Sarah Chen',
      role: 'VP of Marketing',
      videoViews: '12.5K',
      completionRate: '89%',
    },
    {
      company: 'FinanceFlow',
      logo: '💰',
      industry: 'Fintech',
      title: 'Scaling Customer Acquisition in Regulated Markets',
      description: 'FinanceFlow used micro-webinars to educate prospects about complex financial products, resulting in higher conversion rates.',
      metrics: [
        { label: 'Conversion Rate', value: '45%', icon: TrendingUp },
        { label: 'Time to Close', value: '-60%', icon: Users },
        { label: 'Customer LTV', value: '+180%', icon: DollarSign },
      ],
      quote: "The ability to explain complex financial concepts in 3 minutes has been a game-changer for our sales process.",
      author: 'Michael Rodriguez',
      role: 'Head of Growth',
      videoViews: '9.3K',
      completionRate: '92%',
    },
    {
      company: 'CloudScale',
      logo: '☁️',
      industry: 'Cloud Infrastructure',
      title: 'Building Trust Through Transparent Storytelling',
      description: 'CloudScale showcased their reliability and expertise through authentic customer success stories, building trust with enterprise buyers.',
      metrics: [
        { label: 'Enterprise Deals', value: '+250%', icon: TrendingUp },
        { label: 'Sales Cycle', value: '-40%', icon: Users },
        { label: 'Deal Size', value: '+120%', icon: DollarSign },
      ],
      quote: "Our prospects now come to sales calls already convinced of our value. The videos do the heavy lifting for us.",
      author: 'Jennifer Park',
      role: 'Chief Revenue Officer',
      videoViews: '8.2K',
      completionRate: '87%',
    },
  ];

  return (
    <section className="py-20 sm:py-32 bg-muted/30">
      <div className="container">
        <div className="mx-auto max-w-2xl text-center mb-16">
          <h2 className="text-display-lg text-foreground">
            Real results from{' '}
            <span className="text-gradient">real companies</span>
          </h2>
          <p className="mt-4 text-body-lg text-muted-foreground">
            See how leading B2B companies are using PitchLead to transform their marketing and sales processes.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {caseStudies.map((study, index) => (
            <div
              key={index}
              className="bg-background rounded-2xl p-8 border card-hover group"
            >
              {/* Header */}
              <div className="flex items-center gap-4 mb-6">
                <div className="text-3xl">{study.logo}</div>
                <div>
                  <h3 className="font-semibold text-foreground">{study.company}</h3>
                  <p className="text-sm text-muted-foreground">{study.industry}</p>
                </div>
              </div>

              {/* Title */}
              <h4 className="text-lg font-semibold text-foreground mb-3 line-clamp-2">
                {study.title}
              </h4>

              {/* Description */}
              <p className="text-sm text-muted-foreground mb-6 line-clamp-3">
                {study.description}
              </p>

              {/* Metrics */}
              <div className="grid grid-cols-3 gap-4 mb-6">
                {study.metrics.map((metric, metricIndex) => (
                  <div key={metricIndex} className="text-center">
                    <div className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-primary/10 mb-2">
                      <metric.icon className="w-4 h-4 text-primary" />
                    </div>
                    <div className="text-lg font-bold text-foreground">{metric.value}</div>
                    <div className="text-xs text-muted-foreground">{metric.label}</div>
                  </div>
                ))}
              </div>

              {/* Quote */}
              <blockquote className="text-sm text-muted-foreground italic mb-4 line-clamp-3">
                "{study.quote}"
              </blockquote>

              {/* Author */}
              <div className="flex items-center justify-between mb-6">
                <div>
                  <div className="text-sm font-medium text-foreground">{study.author}</div>
                  <div className="text-xs text-muted-foreground">{study.role}</div>
                </div>
                <div className="text-right">
                  <div className="text-sm font-medium text-foreground">{study.videoViews} views</div>
                  <div className="text-xs text-muted-foreground">{study.completionRate} completion</div>
                </div>
              </div>

              {/* CTA */}
              <Button
                variant="outline"
                size="sm"
                className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors"
              >
                Read Full Case Study
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 text-sm font-medium text-primary mb-4">
            <TrendingUp className="h-4 w-4" />
            Join 500+ B2B companies
          </div>
          <h3 className="text-display-sm text-foreground mb-4">
            Ready to see similar results?
          </h3>
          <p className="text-muted-foreground mb-6 max-w-lg mx-auto">
            Start creating compelling B2B stories that convert prospects into customers.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button size="lg">
              Start Free Trial
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button variant="outline" size="lg">
              Book a Demo
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
