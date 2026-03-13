import { Metadata } from 'next';
import ContactPage from '@/features/contact/pages/ContactPage';

export const metadata: Metadata = {
  title: 'Contact',
};

export default function ContactRoute() {
  return <ContactPage />;
}
