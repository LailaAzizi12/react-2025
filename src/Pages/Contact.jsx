import { useSearchParams } from "react-router";

export default function Contact() {
  const [parametrosGet, setParametrosGet] = useSearchParams();
  return (
    <>
      <h2>info contacto de la sede de {parametrosGet.get("sede")}</h2>
      <p>
        nuestras sedes y personas de contacto {parametrosGet.get("persona")}
      </p>
    </>
  );
}
