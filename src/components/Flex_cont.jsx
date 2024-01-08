import { useState } from "react"
import Hero_card from "./Hero_card"
import { Flex} from "@chakra-ui/react"

const Flex_cont=({onData,data,mx})=>{
    let dataarr=[...data];
    console.log(dataarr);
    const [flex_data,set_flex_data]=useState(dataarr);
    console.log({flex_data});
    const handleCardData = (fdata) => {
        // Update data received from child component
        let updated_data=flex_data.filter((element)=>{
            return element.id!==fdata.id;

        })
        updated_data.splice(fdata.id-1,0,fdata);
        set_flex_data(updated_data);
        onData(updated_data);
      };
   return (<Flex justify="space-between" wrap="wrap" mx={mx}>
    {flex_data.map((card)=>{
        
        return(<Hero_card onflexData={handleCardData} key={card.id} id={card.id} Imagesrc={card.src} Hp={card.Hp} Description={card.Description} Heroname={card.Heroname}></Hero_card>)
    })}
    </Flex>)
}
export default Flex_cont;