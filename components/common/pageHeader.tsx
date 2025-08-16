interface PageHeaderProps {
  title: string;
  description: string;
}

export default function PageHeader({ title, description }: PageHeaderProps) {
  return (
    <section className="relative pt-24 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden min-h-[300px] flex items-center justify-center">
      <div className="absolute inset-0 bg-header-gradient">
        <div className="absolute inset-0 bg-black/20 dark:bg-black/30"></div>
      </div>
      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 drop-shadow-lg">
          {title}
        </h1>
        <p className="text-xl sm:text-2xl text-white/90 drop-shadow-md max-w-2xl mx-auto">
          {description}
        </p>
      </div>
    </section>
  );
}
