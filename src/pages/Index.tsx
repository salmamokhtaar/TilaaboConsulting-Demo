import { Link } from "react-router-dom";
import { Container } from "@/components/Container";
import { SectionTitle } from "@/components/SectionTitle";
import { ServiceCard } from "@/components/ServiceCard";
import { FeatureCard } from "@/components/FeatureCard";
import { TestimonialCard } from "@/components/TestimonialCard";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { services, whyChooseUs, testimonials, company } from "@/lib/data";
import heroImage from "@/assets/hero-image.jpg";

const Index = () => {
  // Featured services (first 3)
  const featuredServices = services.slice(0, 3);

  return (
    <div>
      {/* Hero Section */}
      <section className="py-16 md:py-24 lg:py-32 bg-section-gradient">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-6">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground">
                  Strategic Excellence.{" "}
                  <span className="text-primary">Delivered.</span>
                </h1>
                <p className="text-xl text-muted-foreground leading-relaxed">
                  {company.description} From strategy to execution, we partner with you to achieve breakthrough results.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild variant="hero" size="lg">
                  <Link to="/contact">
                    Get Started <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link to="/services">
                    Our Services
                  </Link>
                </Button>
              </div>

              <div className="flex items-center space-x-8 text-sm text-muted-foreground">
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">100+</div>
                  <div>Companies Served</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">99%</div>
                  <div>Client Satisfaction</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">4 Weeks</div>
                  <div>Avg. Time to Results</div>
                </div>
              </div>
            </div>

            <div className="order-first lg:order-last">
              <img
                src={heroImage}
                alt="Strategic consulting team collaboration"
                className="rounded-xl shadow-card-lg w-full"
              />
            </div>
          </div>
        </Container>
      </section>

      {/* About Preview */}
      <section className="py-16 md:py-24">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-6">
              <SectionTitle
                title="Trusted by Industry Leaders"
                subtitle="We partner with ambitious companies to unlock growth and drive measurable results."
                centered={false}
              />
              <p className="text-lg text-muted-foreground leading-relaxed">
                With over 8 years of experience and a track record of success across industries, our team combines strategic thinking with hands-on execution to deliver transformational outcomes.
              </p>
              <Button asChild variant="outline">
                <Link to="/about">
                  Learn More About Us <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="h-24 bg-card rounded-lg border border-border shadow-card flex items-center justify-center">
                  <span className="text-2xl font-bold text-primary">Strategy</span>
                </div>
                <div className="h-32 bg-card rounded-lg border border-border shadow-card flex items-center justify-center">
                  <span className="text-2xl font-bold text-primary">Operations</span>
                </div>
              </div>
              <div className="space-y-4 pt-8">
                <div className="h-32 bg-card rounded-lg border border-border shadow-card flex items-center justify-center">
                  <span className="text-2xl font-bold text-primary">Growth</span>
                </div>
                <div className="h-24 bg-card rounded-lg border border-border shadow-card flex items-center justify-center">
                  <span className="text-2xl font-bold text-primary">Analytics</span>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Services Preview */}
      <section className="py-16 md:py-24 bg-muted/30">
        <Container>
          <SectionTitle
            title="Our Services"
            subtitle="Comprehensive solutions to accelerate your business growth"
            className="mb-16"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {featuredServices.map((service, index) => (
              <ServiceCard
                key={index}
                title={service.title}
                description={service.description}
                icon={service.icon}
              />
            ))}
          </div>
          <div className="text-center">
            <Button asChild variant="outline" size="lg">
              <Link to="/services">
                View All Services <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </Container>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 md:py-24">
        <Container>
          <SectionTitle
            title="Why Choose ConsultCo"
            subtitle="What sets us apart in the consulting landscape"
            className="mb-16"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyChooseUs.map((feature, index) => (
              <FeatureCard
                key={index}
                title={feature.title}
                description={feature.description}
                icon={feature.icon}
              />
            ))}
          </div>
        </Container>
      </section>

      {/* Testimonials */}
      <section className="py-16 md:py-24 bg-muted/30">
        <Container>
          <SectionTitle
            title="Client Success Stories"
            subtitle="Hear from leaders who've transformed their businesses with us"
            className="mb-16"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard
                key={index}
                quote={testimonial.quote}
                name={testimonial.name}
                role={testimonial.role}
                avatar={testimonial.avatar}
              />
            ))}
          </div>
        </Container>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-muted/30 border-t border-border">
        <Container>
          <div className="text-center space-y-8 max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Join 200+ companies that have achieved breakthrough results with ConsultCo. Let&apos;s discuss your growth objectives.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild variant="hero" size="lg">
                <Link to="/contact">
                  Start Your Transformation <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link to="/sections">
                  Explore Our Expertise
                </Link>
              </Button>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
};
export default Index;