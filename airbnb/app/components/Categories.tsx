import Image from "next/image";

const Categories = () => {
    return (
        <div className="pt-3 pb-6 flex items-center space-x-12  cursor-pointer">
            <div className="pb-4 flex flex-col items-center space-y-2 border-b-2 border-white opacity-60 hover:border-gray-200 hover:opacity-100">
                <Image src="/icn_category_pool.jpg"
                    alt="Category - Pool"
                    width={20}
                height={20}/>
                <span className="text-xs">Pool</span>
            </div>
            <div className="pb-4 flex flex-col items-center space-y-2 border-b-2 border-white opacity-60 hover:border-gray-200 hover:opacity-100">
                <Image src="/icn_category_farm.jpg"
                    alt="Category - farm"
                    width={20}
                height={20}/>
                <span className="text-xs">Farm</span>
            </div>
            <div className="pb-4 flex flex-col items-center space-y-2 border-b-2 border-white opacity-60 hover:border-gray-200 hover:opacity-100">
                <Image src="/icn_category_containers.jpg"
                    alt="Category - containers"
                    width={20}
                height={20}/>
                <span className="text-xs">Containers</span>
            </div>
            <div className="pb-4 flex flex-col items-center space-y-2 border-b-2 border-white opacity-60 hover:border-gray-200 hover:opacity-100">
                <Image src="/icn_category_castles.jpg"
                    alt="Category - castles"
                    width={20}
                height={20}/>
                <span className="text-xs">Castles</span>
            </div>
            <div className="pb-4 flex flex-col items-center space-y-2 border-b-2 border-white opacity-60 hover:border-gray-200 hover:opacity-100">
                <Image src="/icn_category_amazing_view.jpg"
                    alt="Category - amazing_view"
                    width={20}
                height={20}/>
                <span className="text-xs">Amazing View</span>
            </div>
        </div>
    )
}

export default Categories;