"use client";
import React, { useEffect, useState, useRef } from "react";

const Clock = () => {
  const [clock, setClock] = useState({ days: 100, hours: 10000, min: 1000, sec: 10000 });
    console.log("clock: ", clock);
    
  // Use useRef to store the interval ID
  const intervalRef = useRef<any>(null);

  useEffect(() => {
    // Start the interval and store the ID in the ref
    intervalRef.current = setInterval(() => {
      const date = new Date();
      setClock((prevClock) => ({
        days: date.getDay(),
        hours: date.getHours(),
        min: date.getMinutes(),
        sec: date.getSeconds(),
      }));
    }, 998);

    // Clear the interval when the component unmounts
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, []);

  return (
    <div className="grid grid-flow-col gap-5 text-center auto-cols-max">
      <div className="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
        <span className="countdown font-mono text-5xl">
          <span style={{ "--value": clock.days }}></span>
        </span>
        days
      </div>
      <div className="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
        <span className="countdown font-mono text-5xl">
          <span style={{ "--value": clock.hours }}></span>
        </span>
        hours
      </div>
      <div className="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
        <span className="countdown font-mono text-5xl">
          <span style={{ "--value": clock.min }}></span>
        </span>
        min
      </div>
      <div className="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
        <span className="countdown font-mono text-5xl">
          <span style={{ "--value": clock.sec }}></span>
        </span>
        sec
      </div>
    </div>
  );
};

export default Clock;
