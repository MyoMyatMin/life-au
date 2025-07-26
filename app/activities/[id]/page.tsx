type Props = {
    params: Promise<{
        id: string;
    }>;
};

export default async function ActivityDetail({ params }: Props) {
    const { id } = await params;

    return (
        <div>
            <h1>Activity: {id}</h1>
            <p>This will show details for the activity "{id}" on life.au</p>
        </div>
    );
}