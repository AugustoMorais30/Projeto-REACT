import { Menu } from "../components/Menu";
import img from '../img/home.jpg'

export const Home = () => {
    return(
        <>
        <Menu />
        <img src={img} alt="" className="" />
        <main>
             <h1>Home</h1>
             <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Aut, doloribus possimus.Et asperiores consectetur, ab esse,
                deleniti voluptatibus voluptates illo quo eaque ullam 
                quod! Nulla quod sapiente odio tempore veritatis!F</p>
        </main>        
        </>
    )
}
 