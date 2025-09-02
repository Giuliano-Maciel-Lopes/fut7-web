type Props = {
  children: React.ReactNode;
  bgImage?: string;
  className?: string;
};

export function PlayerLayout({ children, bgImage, className }: Props) {
  return (
    <div
      className={`relative w-screen h-screen flex flex-col justify-center z-0 ${
        className ?? ""
      }`}
    >
      {bgImage && (
        <div
          className="hidden md:flex absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${bgImage})` }}
        >
          <div className="absolute inset-0 bg-black/60"></div>
        </div>
      )}

      <section className="z-10">{children}</section>
    </div>
  );
}
