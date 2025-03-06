import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Header from "./Header";


export const Navigation = () => {
    return (
        <>
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
            </Routes>
        </>
  )
}