type Props = {
    params: Promise<{
        id: string;
    }>;
};

export default async function AppDetail({ params }: Props) {
    const { id } =  await params;

    return (
        <div>
            <h1>App: {id}</h1>
            <p>This will show details for the app "{id}" on life.au</p>
        </div>
    );
}