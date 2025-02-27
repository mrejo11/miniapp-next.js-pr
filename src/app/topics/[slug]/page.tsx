interface TopicsShowPageProps {
  params: {
    slug: string;
  };
}

export default function TopicsShowPage({ params }: TopicsShowPageProps) {
  const { slug } = params;
  return (
    <div className="grid grid-cols-4 gap-4 p-4 border-t">
      <div className="col-span-3">
        <h1 className="text-2xl font-bold mb-2">{slug}</h1>
      </div>

      <div></div>
    </div>
  );
}
