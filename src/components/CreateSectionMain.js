import { useMemo } from "react";
import UiInfoSection from "@/components/UiInfoSection";
import UiInfoRow3 from "@/components/UiInfoRow3";
import UiInput from "@/components/UiInput";
import UiInfoRow4 from "@/components/UiInfoRow4";
import UiCheckbox from "@/components/UiCheckbox";
import { MARKS } from "@/constants";
import UiSelect from "@/components/UiSelect";

export default function CreateSectionMain({ car, updateCarKey }) {
  const dataListMarks = Object.keys(MARKS);
  const dataListModel = useMemo(() => MARKS[car?.marka]?.sort(), [car?.marka]);
  return (
    <UiInfoSection title="Головна">
      <UiInfoRow3>
        {[
          <UiInput
            label="Марка"
            value={car.marka}
            onInput={(e) => updateCarKey("marka", e)}
            dataList={dataListMarks}
            dataListName="marks"
            key={1}
          />,
          <UiInput
            label="Модель"
            value={car.model}
            onInput={(e) => updateCarKey("model", e)}
            dataList={dataListModel}
            dataListName="model"
            key={2}
          />,
          <UiInput
            label="Ціна"
            type="number"
            value={car.priceNum}
            onInput={(e) => updateCarKey("priceNum", e)}
            afterSelect={['pln', '€', 'грн', '$']}
            valueSelect={car.priceCurrency}
            onSelect={(e) => updateCarKey("priceCurrency", e)}
            key={3}
          />
        ]}
      </UiInfoRow3>
      <UiInfoRow3>
        {[
          <UiInput label="рік" type="number" value={car.year} onInput={(e) => updateCarKey("year", e)} key={4} />,
          <UiInput label="пробіг, тис." type="number" value={car.mileage} onInput={(e) => updateCarKey("mileage", e)} key={5} />,
          <UiInput label="обьем" type="number" value={car.engineVolume} onInput={(e) => updateCarKey("engineVolume", e)} key={6} />,
        ]}
      </UiInfoRow3>
      <UiInfoRow4>
        {[
          <UiSelect
            label="КПП"
            value={car.transmission}
            onInput={(e) => updateCarKey("transmission", e)}
            optionList={["Механіка", "Автомат"]}
            key={7}
          />,
          <UiSelect
            label="Привід"
            value={car.gear}
            onInput={(e) => updateCarKey("gear", e)}
            optionList={["Повний", "Передній", "Задній"]}
            key={8}
          />,
          <UiCheckbox id={9} value={car.isTO} onInput={(e) => updateCarKey("isTO", e)} label="ТО + страховка" key={9} />,
          <UiCheckbox id={10} value={car.isVin} onInput={(e) => updateCarKey("isVin", e)} label="Vin відповідає документам" key={10} />,
        ]}
      </UiInfoRow4>
    </UiInfoSection>
  )
}
