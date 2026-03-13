import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Work',
};

const WorkPage = () => {
  return (
    <div>
      <Link href="/">Home</Link>
    </div>
  );
};

export default WorkPage;
