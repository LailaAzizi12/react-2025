import { useParams, useSearchParams } from "react-router";

export default function DetalleProducto() {
  const parametros = useParams();
  const [parametrosGet, setParametrosGet] = useSearchParams();
  return (
    <>
      <h2>Detalles del producto {parametros.id}</h2>
      <p>Info</p>
      <p>Plantilla : {parametrosGet.get("format")}</p>
    </>
  );
}
