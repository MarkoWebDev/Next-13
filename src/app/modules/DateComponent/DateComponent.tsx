"use client";
import React, { useState } from "react";
import { addDays } from "date-fns";
import { DateRangePicker } from "react-date-range";

type DateProps = [
  {
    startDate: Date;
    endDate: Date;
    key: string;
  }
];

const DateComponent = () => {
  const [state, setState] = useState<DateProps | any>([
    {
      startDate: new Date(),
      endDate: addDays(new Date(), 7),
      key: "selection",
    },
  ]);

  return (
    <div className="pt-4">
      <DateRangePicker
        className="text-[#B39A50 "
        onChange={(item) => setState([item.selection])}
        showSelectionPreview={true}
        moveRangeOnFirstSelection={false}
        months={2}
        ranges={state}
        direction="horizontal"
        rangeColors={["#B39A50"]}
      />
      ;
    </div>
  );
};

export default DateComponent;
