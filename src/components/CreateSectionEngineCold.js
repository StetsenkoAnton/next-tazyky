import UiTextArea from "@/components/UiTextArea";
import UiInfoSection from "@/components/UiInfoSection";
import UiMedia from "@/components/UiMedia";
import UiInfoRow3 from "@/components/UiInfoRow3";
import UiSelect from "@/components/UiSelect";
import UiInfoRow21 from "@/components/UiInfoRow21";
import UiInfoRow from "@/components/UiInfoRow";

export default function CreateSectionEngineCold({ car, updateCarKey, carId }) {
  return (
    <UiInfoSection title="Огляд двигуна">
      <UiInfoRow3>
        {[
          <UiSelect
            label="Емульсія на кришці заливної горловини"
            value={car.emulsion}
            onInput={(e) => updateCarKey("emulsion", e)}
            optionList={["Відсутня", "Є"]}
            key={1}
          />,
          <UiSelect
            label="Охолоджуюча рідина в бачку"
            value={car.coolantFluid}
            onInput={(e) => updateCarKey("coolantFluid", e)}
            optionList={["Антифриз", "Вода", "Є плями на поверхні"]}
            key={2}
          />,
          <UiSelect
            label="Привід ГРМ"
            value={car.grm}
            onInput={(e) => updateCarKey("grm", e)}
            optionList={["Новій", "Час міняти", "Невідомо коли міняли"]}
            key={3}
          />,
        ]}
      </UiInfoRow3>
      <UiInfoRow21>
        {[
          <UiMedia
            label="Фото турбіни"
            carId={carId}
            value={car.imgTurbo}
            onInput={(e) => updateCarKey("imgTurbo", e)}
            key={4}
          />,
          <UiSelect
            label="Турбіна та патрубки до интеркуллера"
            value={car.turbo}
            onInput={(e) => updateCarKey("turbo", e)}
            optionList={["Суха", "Спітніла", "Тече"]}
            key={4}
          />,
        ]}
      </UiInfoRow21>
      <UiInfoRow21>
        {[
          <UiMedia
            label="Фото форсунок"
            carId={carId}
            value={car.imgFuelSystem}
            onInput={(e) => updateCarKey("imgFuelSystem", e)}
            key={4}
          />,
          <UiSelect
            label="Паливна"
            value={car.fuelSystem}
            onInput={(e) => updateCarKey("fuelSystem", e)}
            optionList={["Суха", "Спітніла", "Тече"]}
            key={5}
          />,
        ]}
      </UiInfoRow21>
      <UiInfoRow21>
        {[
          <UiMedia
            label="Фото де тече двигун"
            carId={carId}
            value={car.imgGuessEngine}
            onInput={(e) => updateCarKey("imgGuessEngine", e)}
            key={4}
          />,
          <UiTextArea
            label="Припущення звідки тече"
            value={car.guessEngine}
            onInput={(e) => updateCarKey("guessEngine", e)}
            key={6}
          />,
        ]}
      </UiInfoRow21>
      <UiInfoRow21>
        {[
          <UiMedia
            label="Фото головного радіатора"
            carId={carId}
            value={car.imgRadiator}
            onInput={(e) => updateCarKey("imgRadiator", e)}
            key={7}
          />,
          <UiSelect
            label="Радіатор"
            value={car.radiator}
            onInput={(e) => updateCarKey("radiator", e)}
            optionList={["Чистий", "Треба мити", "Під заміну"]}
            key={8}
          />,
        ]}
      </UiInfoRow21>
      <UiInfoRow>
        <UiTextArea label="Примітки" value={car.engineColdNotes} onInput={(e) => updateCarKey("engineColdNotes", e)} />
      </UiInfoRow>
    </UiInfoSection>
  )
}
