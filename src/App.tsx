import { AppProduct } from "./components/AppProduct/ListProducts/AppProduct";
import { ComponentCounter } from "./components/ComponentCounter/ComponentCounter";
import { ComponentUseEffect } from "./components/ComponentUseEffect/ComponentUseEffect";
import { FormComponent } from "./components/FormComponent/FormComponent";
import { MiPrimerComponent } from "./components/MiPrimerComponent/MiPrimerComponent";

export const App = () => {

    return (
        <div style={{display: "flex", flexDirection:"column"}}>
            <MiPrimerComponent 
                text={"Texto desde propiedades"} 
                color='red' 
                fontSize={3} 
            />
            <ComponentCounter />
            <ComponentUseEffect />
            <FormComponent />
            <AppProduct />
        </div>
    );
};
