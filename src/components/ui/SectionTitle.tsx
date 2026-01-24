interface SectionTitleProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
}

export default function SectionTitle({
  title,
  subtitle,
  centered = true,
}: SectionTitleProps) {
  return (
    <div className={`mb-12 ${centered ? 'text-center' : ''}`}>
      <h2 className="text-3xl md:text-4xl font-bold text-dark mb-4">{title}</h2>
      {subtitle && <p className="text-gray-600 text-lg max-w-2xl mx-auto">{subtitle}</p>}
    </div>
  );
}
