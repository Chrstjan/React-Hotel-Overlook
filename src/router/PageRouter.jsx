import { Routes, Route } from "react-router-dom";
import { MainLayout } from "../layouts/MainLayout";
import { paths } from "./Paths";

export const PageRouter = () => {
  return (
    <>
        <Routes>
            <Route path="/" element={<MainLayout />}>
                {paths.map((item) => {
                    return (
                        <Route key={item.name} path={item.path} element={<item.element />}/>
                    )
                })}
            </Route>
        </Routes>
    </>
  )
}