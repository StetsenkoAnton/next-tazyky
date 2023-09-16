import UiTextArea from "@/components/UiTextArea";
import UiInfoSection from "@/components/UiInfoSection";
import UiMedia from "@/components/UiMedia";
import UiInfoRow3 from "@/components/UiInfoRow3";
import UiSelect from "@/components/UiSelect";
import UiInfoRow from "@/components/UiInfoRow";

export default function CreateSectionEngineHot({ car, updateCarKey, carId }) {
  return (
    <UiInfoSection title="Двигун на гарячу">
      <UiInfoRow>
        <UiMedia
          label="Відео диму з заливної горловини та щупу"
          carId={carId}
          value={car.imgSmokeEngine}
          onInput={(e) => updateCarKey("imgSmokeEngine", e)}
          noImage
        />
      </UiInfoRow>
      <UiInfoRow3>
        {[
          <UiSelect
            label="Дим двигуна"
            value={car.smokeEngine}
            onInput={(e) => updateCarKey("smokeEngine", e)}
            optionList={["Не має", "Трохи є", "Паровоз"]}
            key={1}
          />,
          <UiSelect
            label="Бульбашки в розширювальному бачку"
            value={car.bubblesInCool}
            onInput={(e) => updateCarKey("bubblesInCool", e)}
            optionList={["Відсутні", "Є", "Система не дозволяє перевірити"]}
            key={2}
          />,
          <UiSelect
            label="Запуск на гарячу в порівнянні з першим"
            value={car.secondStart}
            onInput={(e) => updateCarKey("secondStart", e)}
            optionList={["Краще", "Так само", "Гірше", "Дуже погано", "Не завівся"]}
            key={3}
          />,
        ]}
      </UiInfoRow3>
      <UiInfoRow>
        <UiTextArea label="Примітки" value={car.engineHotNotes} onInput={(e) => updateCarKey("engineHotNotes", e)}/>
      </UiInfoRow>
    </UiInfoSection>
  )
}
