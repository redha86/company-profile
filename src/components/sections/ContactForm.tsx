import { useState, FormEvent } from 'react';
import { Send } from 'lucide-react';
import Input from '../ui/Input';
import Button from '../ui/Button';

export function ContactForm() {
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    setLoading(false);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Input
          label="First Name"
          type="text"
          name="firstName"
          placeholder="John"
          required
        />
        <Input
          label="Last Name"
          type="text"
          name="lastName"
          placeholder="Doe"
          required
        />
      </div>

      <Input
        label="Email"
        type="email"
        name="email"
        placeholder="john.doe@example.com"
        required
      />

      <Input
        label="Company"
        type="text"
        name="company"
        placeholder="Your Company"
      />

      <Input
        label="Message"
        type="textarea"
        name="message"
        placeholder="Tell us about your project..."
        rows={6}
        required
      />

      <Button
        type="submit"
        variant="primary"
        size="lg"
        fullWidth
        loading={loading}
        icon={<Send size={20} />}
        iconPosition="right"
      >
        Send Message
      </Button>
    </form>
  );
}