import { MainLayoutInterface } from "./main-layout-props";

export const MainLayout = (props: MainLayoutInterface) => {
  const { children } = props;
  return (
    <div className="px-8 py-24 mx-auto min-w-screen h-dvh bg-slate-600">
      {children}
    </div>
  );
};
