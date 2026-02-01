import SideNav from "@/components/admin/SideNav";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen flex font-sans bg-slateUI text-white">
      <SideNav />
      <main className="flex-grow p-8 overflow-auto">
        {children}
      </main>
    </div>
  );
}
