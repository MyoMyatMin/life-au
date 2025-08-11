import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Badge } from "../ui/badge";
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "../ui/card";

interface App {
    id: number;
    name: string;
    short_description: string;
    thumbnail_image_url?: string;
    techStack?: string[];
    students?: string[];
    category_name?: string;
}
interface AppCardProps {
    app: App;
}

const AppCard = ({ app }: AppCardProps) => {
    return (
        <>
            <Link href={`/apps/${app.id}`}>
                <Card className="group hover:shadow-2xl transition-all duration-300 shadow-lg bg-white/80 dark:bg-gray-800/60 hover:bg-white/95 dark:hover:bg-gray-700/80 backdrop-blur-md border border-gray-200/60 dark:border-white/10 h-full flex flex-col cursor-pointer">
                    <div className="relative overflow-hidden rounded-t-lg h-48 w-full">
                        {app.thumbnail_image_url ? (
                            <Image
                                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                                src={app.thumbnail_image_url}
                                alt={app.name || "Post thumbnail"}
                                width={400}
                                height={200}
                                style={{ objectFit: "cover" }}
                            />
                        ) : (
                            <div className="flex items-center justify-center w-full h-full bg-gray-100 dark:bg-gray-700 text-muted-foreground">
                                No image available
                            </div>
                        )}


                    </div>

                    {/* Content area with proper flex structure */}
                    <div className="flex flex-col flex-grow">
                        <CardHeader className="pb-3 flex-shrink-0">
                            <CardTitle className="text-lg font-semibold text-gray-900 dark:text-white group-hover:text-red-600 dark:group-hover:text-red-400 transition-colors drop-shadow-sm">
                                {app.name}
                            </CardTitle>
                            <CardDescription className="text-sm text-gray-700 dark:text-gray-200 line-clamp-3 drop-shadow-sm min-h-[4.5rem]">
                                {app.short_description}
                            </CardDescription>
                        </CardHeader>

                        <CardContent className="pt-0 flex-shrink-0">
                            <Badge
                                variant="secondary"
                                className="bg-red-600/95 dark:bg-red-700/90 text-white backdrop-blur-sm border border-white/30 shadow-md"
                            >
                                {app.category_name || "General"}
                            </Badge>
                        </CardContent>
                    </div>

                </Card>
            </Link>
        </>
    )
}

export default AppCard
