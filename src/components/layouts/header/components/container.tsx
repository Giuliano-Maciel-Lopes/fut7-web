export function HeaderContainer({ children }: { children: React.ReactNode }) {
  return (
    <header className="bg-blue-800 w-full text-md h-20 md:h-24 flex items-center fixed z-50 border-b-2 border-gray-400">
      <div className="container flex items-center justify-between">
        {children}
      </div>
    </header>
  );
}