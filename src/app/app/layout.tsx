import AppLayout from "@/layouts/AppLayout";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return <AppLayout>{children}</AppLayout>;
};

export default Layout;
