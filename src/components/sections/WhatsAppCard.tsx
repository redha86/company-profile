import { MessageCircle } from 'lucide-react';
import Button from '../ui/Button';

export function WhatsAppCard() {
  const whatsappNumber = '15551234567';
  const whatsappMessage = encodeURIComponent('Hi! I would like to discuss a project with ORREN.');
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

  return (
    <div className="bg-gradient-to-br from-green-500 to-green-600 rounded-2xl p-8 text-center text-white shadow-xl">
      <div className="flex justify-center mb-6">
        <div className="w-16 h-16 rounded-full bg-white/20 flex items-center justify-center backdrop-blur-sm" aria-hidden="true">
          <MessageCircle size={32} className="text-white" />
        </div>
      </div>
      
      <h3 className="text-2xl font-bold mb-3">Quick Connect</h3>
      <p className="text-white/90 mb-6">
        Get instant answers to your questions via WhatsApp
      </p>

      <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" aria-label="Chat on WhatsApp">
        <Button
          variant="secondary"
          size="lg"
          fullWidth
          icon={<MessageCircle size={20} aria-hidden="true" />}
        >
          Chat on WhatsApp
        </Button>
      </a>
    </div>
  );
}