import {NavBarMobile , MenuBarMobile} from "@/layouts/user/mobile/navBar";

const LayOutMobile = () => {
    return ( 
      <>
        <header>
            <NavBarMobile/>
        </header>
        <main>  
        <MenuBarMobile/>
        </main>
        <footer></footer>
      </>
     );
}
 
export default LayOutMobile;