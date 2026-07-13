export default function LayoutAuth({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className=" w-full h-full flex items-center justify-center bg-white min-h-screen ">
      {children}
    </div>
  );
}
