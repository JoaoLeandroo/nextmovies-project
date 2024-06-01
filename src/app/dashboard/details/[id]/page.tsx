import { loadDetails } from "@/app/api/service"

const Details = async ({ params }: any) => {
    
    const details = await loadDetails(params.id)

    return ( 
        <div className="flex flex-col gap-3">
            <h1 className="text-7xl font-bold text-white">details</h1>
            {details ? (
                <div className="flex flex-col">
                    <span className="text-white">Serie: {details.name}</span>
                    <span className="text-white">Serie: {details.overview}</span>
                    <span className="text-white">Serie: {details.backdrop_path}</span>
                </div>
            )
            :
            (
                <div className="text-white">
                    carregando...
                </div>
            )
        
        }
        </div>
     );
}
 
export default Details;