import Home from "./home";

function Router (){
    return(
        <>
      <BrowserRouter>
        <Routes>
         
          <Route path="Home" element={<Home/>} />
          
       
        </Routes>
      </BrowserRouter>
        </>
    )
}
 export default Router