import Select from "../Select/Select";

export default function Languages() {
  const arr = [{value: "EN", label: "EN"},{value: "FR", label: "FR"},{value: "CH", label: "CH"}]
  return (
    <Select primary="EN" options={arr}/>
  )
}  