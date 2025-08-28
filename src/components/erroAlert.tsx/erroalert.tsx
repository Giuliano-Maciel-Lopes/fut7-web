type Props = {
  message: string;
};

export function ErrorAlert({ message }: Props) {
  return (
    <div className="w-full p-3 border border-red-600 bg-red-100 text-red-700 rounded-md">
      {message}
    </div>
  );
}
