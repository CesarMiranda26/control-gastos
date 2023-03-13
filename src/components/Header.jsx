import ControlPresupuesto from "./ControlPresupuesto"
import NuevoPresupuesto from "./NuevoPresupuesto"

const Header = ({ gastos, presupuesto, setPresupuesto, isValidPresupuesto, setIsValidPresupuesto, setGastos }) => {
  return (
    <header>
      <h1>Planificador de Gastos</h1>

      {isValidPresupuesto ? (
        <ControlPresupuesto 
          presupuesto={Number(presupuesto)}
          gastos={gastos}
          setPresupuesto={setPresupuesto}
          setGastos={setGastos}
          setIsValidPresupuesto={setIsValidPresupuesto}
        />
      ) : (
        <NuevoPresupuesto 
          presupuesto={Number(presupuesto)}
          setPresupuesto={setPresupuesto}
          setIsValidPresupuesto={setIsValidPresupuesto}
        />
      )}
      
    </header>
  )
}

export default Header