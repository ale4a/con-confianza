import React from "react";
import TableMarket from "./components/TableMarket";
import SharedLayout from "~~/components/SharedLayout";

const page = () => {
  return (
    <SharedLayout>
      <div className="h-full px-4 py-2">
        <div className="flex h-full text-black bg-white p-10 rounded-lg">
          <TableMarket />
        </div>
      </div>
    </SharedLayout>
  );
};

export default page;
