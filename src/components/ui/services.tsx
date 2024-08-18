'use client';

import { BentoGrid, BentoGridItem } from '@/components/ui/bento-grid.tsx';

export function Services() {
  return (
    <BentoGrid className="max-w-4xl mx-auto md:auto-rows-[16rem] my-4">
      {items.map((item, i) => (
        <BentoGridItem
          key={i}
          title={item.title}
          description={item.description}
          header={item.header}
          className={item.className}
        />
      ))}
    </BentoGrid>
  );
}
const Skeleton = () => (
  <div className="flex flex-1 w-full h-full rounded-xl bg-dot-thick-white/[0.2] [mask-image:radial-gradient(ellipse_at_center,white,transparent)] border border-white bg-black"></div>
);
const items = [
  {
    title: 'Software Development',
    description:
      'Deliver end-to-end software development solutions, including web and mobile applications, enterprise software, and custom systems. Focus on building scalable, secure, and high-performance products tailored to client needs.',
    header: <Skeleton />,
    className: 'md:col-span-2',
  },
  {
    title: 'Data Analytics and Visualization',
    description:
      'Transform raw data into actionable insights through advanced analytics and visualization techniques. Create interactive dashboards, reports, and tools that enable clients to make data-driven decisions.',
    header: <Skeleton />,
    className: 'md:col-span-1',
  },
  {
    title: 'Consulting and Technical Advisory',
    description:
      'Provide expert guidance on technology strategy, software architecture, and project management. Help clients make informed decisions, select the right technologies, and ensure successful project execution.',
    header: <Skeleton />,
    className: 'md:col-span-1',
  },
  {
    title: 'Product Design',
    description:
      ' Offer comprehensive product design services, from initial concept to interactive prototypes. Focus on user-centered design, ensuring that software solutions are intuitive, engaging, and aligned with business goals.',
    header: <Skeleton />,
    className: 'md:col-span-2',
  },
];
