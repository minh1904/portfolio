import { Metadata } from 'next';
import WorkPage from '@/features/work/pages/WorkPage';

export const metadata: Metadata = {
  title: 'Work',
};

export default function WorkRoute() {
  return <WorkPage />;
}

