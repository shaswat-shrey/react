import Header from "./components/Header";
import Entry from "./components/Entry";
import Data from "./components/jokesData";

function Apping() {
    const dataElements = Data.map((data) => {
        return (<Entry 
            key={data.id}
            entry={data}
            // img={{
            //     src: data.img.src,
            //     alt: data.img.alt 
            // }}
            // country = {data.country}
            // link = {data.googleMapsLink}
            // place = {data.title}
            // date = {data.dates}
            // description= {data.text}
           
        />)
    })
    
    return (
        <>
            <Header />
           {dataElements}
        </>
        
    )
}

export default Apping;