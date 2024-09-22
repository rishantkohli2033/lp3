import Head from 'next/head';
import Image from 'next/image';

export default function Home() {
  return (
    <div className="flex flex-col bg-white min-h-screen items-center justify-center py-2">
      <Head>
        <title>Amazon Gift Card</title>
        <meta name="description" content="Get your Amazon gift card now!" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
        {/* Amazon Image */}
             <div className="mt-20">
          <Image
            src="/Amazon_logo.svg" // Path to your image in the public folder
            alt="Amazon Gift Card"
            width={300} // Adjust width based on your design
            height={72} // Adjust height based on your design
            className="rounded-lg"
          />
        </div>

      <main className="flex flex-col items-center justify-center w-full flex-1 px-3 text-center">
        <h1 className="text-3xl text-black font-bold">
          Get Your{' '}
          <span className="text-yellow-500">Amazon Gift Card</span> Today!
        </h1>

        <p className="mt-3 text-xl font-bold text-black">
          Tap below to receive your $750 Amazon gift card!
        </p>

        <div className="flex justify-center items-center mt-6">
          <div className="p-6 mt-4 text-middle w-100 rounded-xl hover:text-yellow-600 focus:text-yellow-600">
            <h2 className="pb-4 text-xl text-black font-bold">1. Click the link below &darr;</h2>
            <h2 className="pb-4 text-xl text-black font-bold">2. Enter your email & basic info</h2>
            <h2 className="pb-4 text-xl text-black font-bold">3. Complete the product review</h2>
            <h2 className="pb-4 text-xl text-black font-bold">4. Complete recommended deals and get to the main end</h2>
            <h2 className="text-xl text-black font-bold">5. Receive your $750 Amazon gift card</h2>
          </div>
        </div>

        <button className="mt-6 bg-yellow-500 text-black py-3 px-6 rounded-full text-xl font-semibold hover:bg-yellow-600">
          Redeem Now
        </button>
      </main>
    </div>
  );
}

