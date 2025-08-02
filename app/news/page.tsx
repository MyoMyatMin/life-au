type Props = {
  params: Promise<{
    id: string;
  }>;
};

export default async function News() {
  return (
    <div>
      <h1>News Page</h1>
      <p>This will show the news on life.au</p>
    </div>
  );
}
