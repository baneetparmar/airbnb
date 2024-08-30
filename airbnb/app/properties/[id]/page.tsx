import ReservationSidebar from "@/app/components/properties/ReservationSidebar";
import Image from "next/image";

const PropertyDetailPage = () => {
  return (
    <main className="max-w-[1500px] mx-auto px-6 pb-6">
      <div className="w-full h-[64vh] mb-4 overflow-hidden rounded-xl relative">
        <Image
          src="/house_island.jpg"
          fill
          className="object-cover w-full h-full"
          alt="house island"
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
        <div className="col-span-3 py-6 pr-6">
          <h1 className="mb-4 text-4xl">property name</h1>
          <span className="mb-6 block text-lg text-gray-600">
            4 guests - 2 bedroom - 1 bathroom
          </span>
          <hr />
          <div className="py-6 flex items-center space-x-4">
            <Image
              src="/profile_1.jpg"
              width={50}
              height={50}
              className="rounded-full"
              alt="user profile"
            />
            <p>
              <strong>John Doe</strong> is your host
            </p>
          </div>
          <hr />
          <p className="mt-6 text-lg">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta
            error modi quasi pariatur molestias dolore maiores eveniet. Ducimus
            aliquam nisi, nostrum deserunt expedita suscipit in, nobis
            consectetur atque voluptas recusandae.
          </p>
        </div>
        <ReservationSidebar />
      </div>
    </main>
  );
};
export default PropertyDetailPage;
