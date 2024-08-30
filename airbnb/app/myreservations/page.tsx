import Image from "next/image";

const MyReservationsPage = () => {
  return (
    <main className="max-w-[1500px] mx-auto px-6 pb-6">
      <h1 className="text-2xl pt-6 pb-2">My Reservations</h1>

      <div>
        <div className="p-5 mt-4 grid grid-cols-4 gap-4 shadow-md border border-gray-300 rounded-xl">
          <div className="col-span-1">
            <div className="relative overflow-hidden aspect-square rounded-xl">
              <Image
                src="/house_island.jpg"
                fill
                className="hover:scale-110 object-cover transition h-full w-full "
                alt="house island"
              />
            </div>
          </div>
          <div className="col-span-3 space-y-2">
            <h2 className="mb-4 text-xl">Property name</h2>
            <p>
              <strong>Check in date:</strong>14/10/2024
            </p>
            <p>
              <strong>Check out date:</strong>20/10/2024
            </p>
            <p>
              <strong>Number of nights:</strong>6
            </p>
            <p>
              <strong>Total Price:</strong>$200
            </p>
          </div>
        </div>
        <div className="p-5 mt-4 grid grid-cols-4 gap-4 shadow-md border border-gray-300 rounded-xl">
          <div className="col-span-1">
            <div className="relative overflow-hidden aspect-square rounded-xl">
              <Image
                src="/house_island.jpg"
                fill
                className="hover:scale-110 object-cover transition h-full w-full "
                alt="house island"
              />
            </div>
          </div>
          <div className="col-span-3 space-y-2">
            <h2 className="mb-4 text-xl">Property name</h2>
            <p>
              <strong>Check in date:</strong>14/10/2024
            </p>
            <p>
              <strong>Check out date:</strong>20/10/2024
            </p>
            <p>
              <strong>Number of nights:</strong>6
            </p>
            <p>
              <strong>Total Price:</strong>$200
            </p>
          </div>
        </div>
        <div className="p-5 mt-4 grid grid-cols-4 gap-4 shadow-md border border-gray-300 rounded-xl">
          <div className="col-span-1">
            <div className="relative overflow-hidden aspect-square rounded-xl">
              <Image
                src="/house_island.jpg"
                fill
                className="hover:scale-110 object-cover transition h-full w-full "
                alt="house island"
              />
            </div>
          </div>
          <div className="col-span-3 space-y-2">
            <h2 className="mb-4 text-xl">Property name</h2>
            <p>
              <strong>Check in date:</strong>14/10/2024
            </p>
            <p>
              <strong>Check out date:</strong>20/10/2024
            </p>
            <p>
              <strong>Number of nights:</strong>6
            </p>
            <p>
              <strong>Total Price:</strong>$200
            </p>
          </div>
        </div>
      </div>
    </main>
  );
};

export default MyReservationsPage;
