import { forwardRef, InputHTMLAttributes, TextareaHTMLAttributes } from 'react';
import { cn } from '@/lib/cn';

interface BaseInputProps {
  label?: string;
  error?: string;
  required?: boolean;
  type?: 'text' | 'email' | 'tel' | 'password' | 'textarea';
}

type InputProps = BaseInputProps &
  (
    | (InputHTMLAttributes<HTMLInputElement> & { type?: 'text' | 'email' | 'tel' | 'password' })
    | (TextareaHTMLAttributes<HTMLTextAreaElement> & { type: 'textarea'; rows?: number })
  );

const Input = forwardRef<HTMLInputElement | HTMLTextAreaElement, InputProps>(
  ({ label, error, required, type = 'text', className, ...props }, ref) => {
    const baseInputClasses = 'w-full px-4 py-3 rounded-lg border transition-colors outline-none bg-white/70 focus:ring-2 focus:ring-primary/20';
    const inputClasses = cn(
      baseInputClasses,
      error ? 'border-red-400 focus:border-red-400' : 'border-gray-300 focus:border-primary',
      className
    );

    return (
      <div className="w-full">
        {label && (
          <label className="block text-sm font-medium text-gray-700 mb-2">
            {label}
            {required && <span className="text-red-500 ml-1">*</span>}
          </label>
        )}
        {type === 'textarea' ? (
          <textarea
            ref={ref as React.Ref<HTMLTextAreaElement>}
            className={inputClasses}
            required={required}
            {...(props as TextareaHTMLAttributes<HTMLTextAreaElement>)}
          />
        ) : (
          <input
            ref={ref as React.Ref<HTMLInputElement>}
            type={type}
            className={inputClasses}
            required={required}
            {...(props as InputHTMLAttributes<HTMLInputElement>)}
          />
        )}
        {error && <p className="mt-1 text-sm text-red-500">{error}</p>}
      </div>
    );
  }
);

Input.displayName = 'Input';

export default Input;
