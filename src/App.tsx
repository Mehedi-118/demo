import React, { useEffect, useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Demo from "./Components/demo";
import * as StudentSerive from "../src/Services/StudentService";
import { Student } from "./Model/Student";

export default function App() {
  const [data, setData] = useState<Student[]>([]);

  useEffect(() => {
    StudentSerive.getAllAsync().then((res) => {
      {
        setData(res.data);
        console.log(res.data);
      }
    });
  }, []);
  return <div>App</div>;
}
