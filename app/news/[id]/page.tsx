type Props = {
  params: Promise<{
    id: string;
  }>;
};

export default async function NewsDetail({ params }: Props) {
  const { id } = await params;

  return (
    <div>
      <h1>News: {id}</h1>
      <p>This will show details for the news &apos;{id}&apos; on life.au</p>
    </div>
  );
}
