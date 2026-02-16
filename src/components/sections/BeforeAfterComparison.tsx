import Image from 'next/image';

interface BeforeAfterComparisonProps {
  beforeImage: string;
  afterImage: string;
  beforeAlt?: string;
  afterAlt?: string;
  title?: string;
}

export function BeforeAfterComparison({
  beforeImage,
  afterImage,
  beforeAlt = 'Before roof work',
  afterAlt = 'After roof work',
  title,
}: BeforeAfterComparisonProps) {
  return (
    <div>
      {title && (
        <h3 className="mb-4 text-xl font-semibold text-primary-900">
          {title}
        </h3>
      )}
      <div className="grid gap-4 sm:grid-cols-2">
        <div className="overflow-hidden rounded-lg">
          <div className="bg-neutral-800 px-3 py-1.5 text-center text-sm font-medium text-white">
            Before
          </div>
          <div className="relative aspect-[4/3]">
            <Image
              src={beforeImage}
              alt={beforeAlt}
              fill
              className="object-cover"
              sizes="(max-width: 640px) 100vw, 50vw"
            />
          </div>
        </div>
        <div className="overflow-hidden rounded-lg">
          <div className="bg-success px-3 py-1.5 text-center text-sm font-medium text-white">
            After
          </div>
          <div className="relative aspect-[4/3]">
            <Image
              src={afterImage}
              alt={afterAlt}
              fill
              className="object-cover"
              sizes="(max-width: 640px) 100vw, 50vw"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
