import React from 'react';
import { Button } from '@/components/ui/button';

const WhatsAppIconSvg = () => (
  <svg
    role="img"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    className="h-6 w-6"
    fill="currentColor"
  >
    <path d="M17.472 14.382c-.297-.149-.88-.436-1.017-.486-.137-.05-.282-.074-.427.074-.145.149-.543.618-.667.742-.124.124-.248.149-.496.025-.248-.124-.963-.352-1.835-1.136-.683-.594-1.14-1.328-1.264-1.553-.124-.225-.012-.349.112-.473.112-.112.248-.297.372-.446.124-.149.162-.248.248-.422.086-.174.043-.323-.012-.473-.055-.149-.496-1.2-.683-1.646-.174-.422-.349-.364-.496-.372h-.427c-.149 0-.372.05-.568.272-.197.223-.788.765-.788 1.872 0 1.107.81 2.176.935 2.325.124.149 1.58 2.457 3.832 3.37.543.225.975.364 1.313.463.543.149 1.034.124 1.413.074.427-.05.88-.174 1.017-.349.162-.197.162-.372.112-.473-.05-.1-.297-.174-.568-.323z" />
    <path d="M20.218 3.782A10.437 10.437 0 0012 1.5C6.21 1.5 1.5 6.21 1.5 12c0 1.85.485 3.596 1.348 5.148L1.5 22.5l5.474-1.442A10.437 10.437 0 0012 22.5c5.79 0 10.5-4.71 10.5-10.5a10.437 10.437 0 00-2.282-6.218zM12 21c-1.69 0-3.276-.43-4.646-1.212l-.33-.195-3.447.91.926-3.36-.215-.348A8.937 8.937 0 013 12c0-4.962 4.038-9 9-9s9 4.038 9 9-4.038 9-9 9z" />
  </svg>
);

export function ExpertConnect() {
  return (
    <a
      href="https://wa.me/910000000000" // Replace with CA Tanmay's actual number
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50"
    >
      <Button
        size="lg"
        className="rounded-full shadow-lg bg-accent text-accent-foreground hover:bg-accent/90 h-14 w-14 sm:w-auto sm:px-6"
        aria-label="Consult CA Tanmay on WhatsApp"
      >
        <WhatsAppIconSvg />
        <span className="ml-2 font-semibold hidden sm:inline">
          Consult CA Tanmay
        </span>
      </Button>
    </a>
  );
}
