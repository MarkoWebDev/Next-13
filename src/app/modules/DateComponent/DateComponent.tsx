"use client";
import React, { useState } from "react";
import hr from "date-fns/locale/hr";
import { isWeekend, format } from "date-fns";
import { DateRangePicker } from "react-date-range";

interface DateProps {
  startDate: Date;
  endDate: Date;
  key: string;
}

interface handleDateProps extends DateProps {
  handleDate: () => {};
}
const DateComponent = ({ handleDate, startDate, endDate }: handleDateProps) => {
  const dateRange: DateProps = {
    startDate: startDate,
    endDate: endDate,
    key: "selection",
  };

  function customDayContent(day: any) {
    let extraDot = null;
    if (isWeekend(day)) {
      extraDot = (
        <div
          style={{
            height: "5px",
            width: "5px",
            borderRadius: "100%",
            background: "#B39A50",
            position: "absolute",
            top: 2,
            right: 2,
          }}
        />
      );
    }
    return (
      <div>
        {extraDot}
        <span>{format(day, "d")}</span>
      </div>
    );
  }

  return (
    <div className="pt-4">
      <DateRangePicker
        className="text-[#B39A50]"
        onChange={handleDate}
        showSelectionPreview={true}
        moveRangeOnFirstSelection={false}
        dayContentRenderer={customDayContent}
        months={2}
        ranges={[dateRange]}
        direction="horizontal"
        rangeColors={["#B39A50"]}
        minDate={new Date()}
        locale={hr}
      />
    </div>
  );
};

export default DateComponent;
