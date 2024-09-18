import { Badge } from '@/components/ui/badge'

const JobsByLocation = () => (
    <section className="py-16 bg-gray-100 dark:bg-zinc-900 transition-colors duration-200">
        <div className="container mx-auto px-4">
            <h2 className="text-2xl font-bold mb-8 dark:text-white">Jobs by Location</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                {['Paris', 'London', 'New York', 'Amsterdam', 'Copenhagen', 'Berlin'].map((city) => (
                    <div key={city} className="relative rounded-lg overflow-hidden aspect-video">
                        {/* <Image
                            src={`/${city.toLowerCase()}.jpg`}
                            alt={city}
                            layout="fill"
                            objectFit="cover"
                        /> */}
                        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                            <div className="text-center">
                                <h3 className="text-white text-xl font-bold mb-2">{city}</h3>
                                <Badge variant="secondary">120 Jobs</Badge>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </section>
)

export default JobsByLocation