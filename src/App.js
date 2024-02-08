import { useState } from "react";
import Layout from "./Layout";
import NavPage from "./NavPage";
import Search from "./Search";
import Trending from "./Trending";
import SecoondImg from "./SecoondImg";
import Tvrate from "./Tvrate";


function App() {

  return (
    <div className="w-full h-screen ">
     {/* navigation */}
     <Layout>
     {/* search area */}
     <Search/>
      <SecoondImg/>
     {/* Trending area */}
     <Trending/>
     <Tvrate/>
     </Layout>
    </div>
  );
}

export default App;
