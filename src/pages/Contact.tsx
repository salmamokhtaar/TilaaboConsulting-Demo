import { Container } from "@/components/Container";
import { SectionTitle } from "@/components/SectionTitle";
import { ContactForm } from "@/components/ContactForm";
import { company } from "@/lib/data";
import { Mail, Phone, MapPin, Clock } from "lucide-react";

const Contact = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="py-16 md:py-24 bg-section-gradient">
        <Container>
          <div className="text-center space-y-6 max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground">
              Contact Us
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Ready to accelerate your growth? Let's discuss how we can help transform your business.
            </p>
          </div>
        </Container>
      </section>

      {/* Contact Section */}
      <section className="py-16 md:py-24">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <div>
              <ContactForm />
            </div>

            {/* Contact Info */}
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold text-foreground mb-6">Get In Touch</h3>
                <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                  Ready to unlock your business potential? Reach out to schedule a consultation with our team.
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-secondary/10 rounded-lg">
                    <Mail className="h-6 w-6 text-secondary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">Email</h4>
                    <a 
                      href={`mailto:${company.email}`}
                      className="text-muted-foreground hover:text-secondary transition-colors"
                    >
                      {company.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-secondary/10 rounded-lg">
                    <Phone className="h-6 w-6 text-secondary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">Phone</h4>
                    <a 
                      href={`tel:${company.phone}`}
                      className="text-muted-foreground hover:text-secondary transition-colors"
                    >
                      {company.phone}
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-secondary/10 rounded-lg">
                    <MapPin className="h-6 w-6 text-secondary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">Office</h4>
                    <p className="text-muted-foreground">
                      {company.address}
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-secondary/10 rounded-lg">
                    <Clock className="h-6 w-6 text-secondary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">Business Hours</h4>
                    <p className="text-muted-foreground">
                      Monday - Friday: 9:00 AM - 6:00 PM PST<br />
                      Saturday: 10:00 AM - 2:00 PM PST
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Map Section */}
      <section className="py-16">
        <Container>
          <div className="bg-card rounded-xl border border-border shadow-card overflow-hidden">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3152.8789937846586!2d-122.40204368468103!3d37.79083797975679!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085807cc9b31b55%3A0x853cfdd4b2a5b13e!2s100%20Market%20St%2C%20San%20Francisco%2C%20CA%2094103!5e0!3m2!1sen!2sus!4v1635789012345!5m2!1sen!2sus"
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="ConsultCo Office Location"
            />
          </div>
        </Container>
      </section>
    </div>
  );
};

export default Contact;