export default function SkeletonGrid({ count = 9 }) {
  return (
    <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
      {Array.from({ length: count }).map((_, i) => (
        <div key={i} className="mania-card overflow-hidden">
          <div className="h-44 skeleton" />
          <div className="p-5 space-y-3">
            <div className="h-4 w-3/4 skeleton" />
            <div className="h-4 w-1/2 skeleton" />
            <div className="h-8 w-32 skeleton" />
          </div>
        </div>
      ))}
    </div>
  );
}
