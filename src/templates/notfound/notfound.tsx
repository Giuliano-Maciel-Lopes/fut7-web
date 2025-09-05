import { useRouter } from "next/router";
// uma basica jaja ajeito so pa dev  ela direito
export  function NotFoundPage() {
  const router = useRouter();

  return (
    <div className="flex flex-col items-center justify-center h-screen text-center gap-6 bg-gray-100">
      <h1 className="text-[10rem] font-extrabold text-gray-800">404</h1>
      <p className="text-2xl font-semibold">Página não encontrada</p>
      <p className="text-gray-600">A página que você procura não existe.</p>
      <button
        className="mt-4 px-6 py-2 bg-blue-600 text-white font-medium rounded hover:bg-blue-700 transition"
        onClick={() => router.back()}
      >
        Voltar
      </button>
    </div>
  );
}
