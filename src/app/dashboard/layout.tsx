import HeaderBar from "@/components/global/HeaderBar";

export default function DashboardLayout({
    children,
  }:{
    children: React.ReactNode;
  }) {
    return (
        <>
          <HeaderBar/>
          {children}        
        </>
    );
  }
  