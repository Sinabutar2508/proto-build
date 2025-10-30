import React, { useState } from 'react';
import { ArrowLeft, MapPin, Clock, Phone, Mail, MessageSquare, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Link } from 'react-router-dom';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
    inquiryType: 'general'
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    alert('Thank you for your message! We\'ll get back to you within 24 hours.');
    setFormData({
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: '',
      inquiryType: 'general'
    });
    setIsSubmitting(false);
  };

  const contactInfo = [
    {
      icon: <MapPin className="w-6 h-6" />,
      title: 'Visit Us',
      details: ['123 Business District', 'City Center, State 12345'],
      gradient: 'from-primary to-secondary'
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: 'Business Hours',
      details: ['Monday - Friday: 8:00 AM - 8:00 PM', 'Saturday: 9:00 AM - 5:00 PM', 'Sunday: Closed'],
      gradient: 'from-accent-purple to-accent-orange'
    },
    {
      icon: <Phone className="w-6 h-6" />,
      title: 'Call Us',
      details: ['Main: (555) 123-4567', 'Bookings: (555) 123-4568'],
      gradient: 'from-secondary to-primary'
    },
    {
      icon: <Mail className="w-6 h-6" />,
      title: 'Email Us',
      details: ['info@officespace.com', 'bookings@officespace.com'],
      gradient: 'from-green-400 to-blue-500'
    }
  ];

  const inquiryTypes = [
    { value: 'general', label: 'General Inquiry' },
    { value: 'booking', label: 'Space Booking' },
    { value: 'pricing', label: 'Pricing Information' },
    { value: 'partnership', label: 'Partnership Opportunity' },
    { value: 'support', label: 'Technical Support' },
    { value: 'feedback', label: 'Feedback' }
  ];

  const faqs = [
    {
      question: 'How far in advance can I book a space?',
      answer: 'You can book spaces up to 3 months in advance. For longer-term arrangements, please contact us directly.'
    },
    {
      question: 'What is your cancellation policy?',
      answer: 'Free cancellation up to 24 hours before your booking. Cancellations within 24 hours are subject to a 50% charge.'
    },
    {
      question: 'Do you offer monthly memberships?',
      answer: 'Yes! We offer flexible monthly memberships with various tiers to suit different needs and budgets.'
    },
    {
      question: 'Is parking available?',
      answer: 'Yes, we provide complimentary parking for all our members and hourly guests.'
    }
  ];

  return (
    <div className="min-h-screen bg-background text-foreground font-paragraph">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-[120rem] mx-auto px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <Link to="/" className="flex items-center gap-3 text-foreground hover:text-primary transition-colors">
              <ArrowLeft className="w-5 h-5" />
              <span className="font-heading font-semibold">Back to Home</span>
            </Link>
            <h1 className="text-2xl font-heading font-bold">Contact Us</h1>
            <div className="w-24"></div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-br from-primary/10 to-secondary/10">
        <div className="max-w-[120rem] mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-4">
            Get in Touch
          </h2>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
            Have questions about our spaces or need help with your booking? We're here to help you find the perfect workspace solution.
          </p>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-16 bg-white">
        <div className="max-w-[120rem] mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactInfo.map((info, index) => (
              <Card key={info.title} className={`text-center bg-gradient-to-br ${info.gradient} text-white border-0 shadow-lg`}>
                <CardContent className="p-6">
                  <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    {info.icon}
                  </div>
                  <h3 className="font-heading font-bold text-lg mb-3">{info.title}</h3>
                  <div className="space-y-1">
                    {info.details.map((detail, idx) => (
                      <p key={idx} className="text-sm opacity-90">{detail}</p>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Map */}
      <section className="py-16">
        <div className="max-w-[120rem] mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <div>
              <Card className="bg-white shadow-xl border-0 rounded-3xl">
                <CardHeader className="pb-6">
                  <CardTitle className="flex items-center gap-3 text-2xl font-heading">
                    <MessageSquare className="w-6 h-6 text-primary" />
                    Send us a Message
                  </CardTitle>
                  <p className="text-foreground/70">
                    Fill out the form below and we'll get back to you as soon as possible.
                  </p>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-foreground/80 mb-2">
                          Name *
                        </label>
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          required
                          className="w-full p-3 bg-background border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-shadow"
                          placeholder="Your full name"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-foreground/80 mb-2">
                          Email *
                        </label>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          required
                          className="w-full p-3 bg-background border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-shadow"
                          placeholder="your@email.com"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-foreground/80 mb-2">
                          Phone
                        </label>
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleInputChange}
                          className="w-full p-3 bg-background border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-shadow"
                          placeholder="(555) 123-4567"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-foreground/80 mb-2">
                          Inquiry Type
                        </label>
                        <select
                          name="inquiryType"
                          value={formData.inquiryType}
                          onChange={handleInputChange}
                          className="w-full p-3 bg-background border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-shadow"
                        >
                          {inquiryTypes.map((type) => (
                            <option key={type.value} value={type.value}>
                              {type.label}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-foreground/80 mb-2">
                        Subject *
                      </label>
                      <input
                        type="text"
                        name="subject"
                        value={formData.subject}
                        onChange={handleInputChange}
                        required
                        className="w-full p-3 bg-background border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-shadow"
                        placeholder="Brief subject of your inquiry"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-foreground/80 mb-2">
                        Message *
                      </label>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        required
                        rows={5}
                        className="w-full p-3 bg-background border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-shadow resize-none"
                        placeholder="Please provide details about your inquiry..."
                      />
                    </div>

                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-gradient-to-r from-primary to-secondary text-primary-foreground font-bold py-4 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
                    >
                      {isSubmitting ? (
                        'Sending...'
                      ) : (
                        <>
                          Send Message <Send className="w-4 h-4 ml-2" />
                        </>
                      )}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Map & Additional Info */}
            <div className="space-y-8">
              {/* Map Placeholder */}
              <Card className="bg-white shadow-xl border-0 rounded-3xl overflow-hidden">
                <div className="h-64 bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
                  <div className="text-center">
                    <MapPin className="w-12 h-12 text-primary mx-auto mb-2" />
                    <p className="text-foreground/70 font-medium">Interactive Map</p>
                    <p className="text-sm text-foreground/50">123 Business District, City Center</p>
                  </div>
                </div>
              </Card>

              {/* Quick Actions */}
              <Card className="bg-white shadow-xl border-0 rounded-3xl">
                <CardHeader>
                  <CardTitle>Quick Actions</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <Link to="/booking" className="block">
                    <Button className="w-full bg-gradient-to-r from-primary to-secondary text-primary-foreground font-bold rounded-xl">
                      Book a Space Now
                    </Button>
                  </Link>
                  <Link to="/office-spaces" className="block">
                    <Button variant="outline" className="w-full border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground rounded-xl">
                      View Available Spaces
                    </Button>
                  </Link>
                  <Button variant="outline" className="w-full border-2 border-secondary text-secondary hover:bg-secondary hover:text-secondary-foreground rounded-xl">
                    Schedule a Tour
                  </Button>
                </CardContent>
              </Card>

              {/* Business Hours */}
              <Card className="bg-gradient-to-br from-accent-purple to-accent-orange text-white border-0 shadow-xl rounded-3xl">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <Clock className="w-6 h-6" />
                    <h3 className="font-heading font-bold text-lg">Business Hours</h3>
                  </div>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span>Monday - Friday</span>
                      <span>8:00 AM - 8:00 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Saturday</span>
                      <span>9:00 AM - 5:00 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Sunday</span>
                      <span>Closed</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-foreground/70">
              Quick answers to common questions about our services
            </p>
          </div>

          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <Card key={index} className="bg-background border border-gray-200 rounded-2xl">
                <CardContent className="p-6">
                  <h3 className="font-heading font-semibold text-lg text-foreground mb-3">
                    {faq.question}
                  </h3>
                  <p className="text-foreground/70">
                    {faq.answer}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-foreground/70 mb-4">
              Don't see your question answered?
            </p>
            <Button className="bg-gradient-to-r from-primary to-secondary text-primary-foreground font-bold rounded-xl">
              Contact Support
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-primary to-secondary text-white">
        <div className="max-w-[120rem] mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-lg opacity-90 mb-8 max-w-2xl mx-auto">
            Join hundreds of professionals who have found their perfect workspace with us.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/booking">
              <Button size="lg" className="bg-white text-primary hover:bg-gray-100 font-bold px-8 py-4 rounded-xl">
                Book Your Space
              </Button>
            </Link>
            <Link to="/office-spaces">
              <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-primary font-bold px-8 py-4 rounded-xl">
                Explore Spaces
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;