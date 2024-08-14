import React from "react";

const ListItemLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return <div className="w-full h-full">{children}</div>;
};

export default ListItemLayout;
