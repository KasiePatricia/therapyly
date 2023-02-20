import Navigation from "../Navigation";

export default function AppLayout({ children }) {
  return (
    <div className="w-full h-screen bg-white ">
      <div className="w-full h-16 bg-white border-b border-therapyDarkGreen ">
        <Navigation />
      </div>
      <main className="w-full h-[calc(100vh-64px)] bg-white ">{children}</main>
    </div>
  );
}
