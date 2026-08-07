import { Mail, Phone, MapPin } from 'lucide-react';
import GlassCard from '../ui/GlassCard';

const contactDetails = [
  {
    icon: Mail,
    label: 'Email',
    value: 'contact@orren.com',
    href: 'mailto:contact@orren.com'
  },
  {
    icon: Phone,
    label: 'Phone',
    value: '+1 (555) 123-4567',
    href: 'tel:+15551234567'
  },
  {
    icon: MapPin,
    label: 'Address',
    value: '123 Business Street, Suite 100, San Francisco, CA 94105',
    href: null
  }
];

export function ContactInfo() {
  return (
    <div className="space-y-6">
      {contactDetails.map((detail) => {
        const Icon = detail.icon;
        const content = (
          <GlassCard className="flex items-start gap-4 hover:translate-x-2">
            <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center" aria-hidden="true">
              <Icon className="text-white" size={24} />
            </div>
            <div>
              <p className="text-sm text-gray-500 mb-1">{detail.label}</p>
              <p className="text-gray-900 font-medium">{detail.value}</p>
            </div>
          </GlassCard>
        );

        return detail.href ? (
          <a key={detail.label} href={detail.href} className="block">
            {content}
          </a>
        ) : (
          <div key={detail.label}>{content}</div>
        );
      })}
    </div>
  );
}