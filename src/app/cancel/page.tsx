import Link from 'next/link';

export default function CancelPage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24 text-center bg-gray-300">
      <h1 className="text-3xl font-bold mb-4 text-[#a43a3a]">Payment Canceled</h1>
      <p className="text-gray-600 mb-8 max-w-md">
        Your payment was canceled, and no charges were made to your account. You can return whenever you are ready.
      </p>
      <Link
        href="/"
        className="bg-[#a43a3a] hover:bg-gray-400 text-white font-medium py-2.5 px-5 rounded-lg transition"
      >
        Return to Home
      </Link>
    </main>
  );
}