import { Container } from "@/components/Container";
import { SectionTitle } from "@/components/SectionTitle";
import { TestimonialCard } from "@/components/TestimonialCard";
import { sections, testimonials } from "@/lib/data";
import { CheckCircle } from "lucide-react";

const Sections = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="py-16 md:py-24 bg-section-gradient">
        <Container>
          <div className="text-center space-y-6 max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground">
              Expertise Sections
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Deep domain expertise across key business functions to drive transformational results.
            </p>
          </div>
        </Container>
      </section>

      {/* Sections Grid */}
      <section className="py-16 md:py-24">
        <Container>
          <SectionTitle
            title="Our Expertise Areas"
            subtitle="Specialized knowledge and proven methodologies in critical business domains"
            className="mb-16"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {sections.map((section, index) => (
              <div key={index} className="p-8 bg-card rounded-xl border border-border shadow-card hover:shadow-card-lg transition-smooth">
                <h3 className="text-2xl font-bold text-card-foreground mb-4">{section.title}</h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">{section.description}</p>
                <div className="space-y-3">
                  {section.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center space-x-3">
                      <CheckCircle className="h-5 w-5 text-secondary" />
                      <span className="text-sm text-muted-foreground">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Testimonials */}
      <section className="py-16 md:py-24 bg-muted/30">
        <Container>
          <SectionTitle
            title="Client Success Stories"
            subtitle="What our clients say about working with us"
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
    </div>
  );
};

export default Sections;