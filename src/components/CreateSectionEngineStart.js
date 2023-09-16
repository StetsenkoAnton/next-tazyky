import UiTextArea from "@/components/UiTextArea";
import UiInfoSection from "@/components/UiInfoSection";
import UiMedia from "@/components/UiMedia";
import UiInfoRow3 from "@/components/UiInfoRow3";
import UiSelect from "@/components/UiSelect";
import UiInfoRow from "@/components/UiInfoRow";

export default function CreateSectionEngineStart({ car, updateCarKey, carId }) {
  return (
    <UiInfoSection title="Перший запуску двигуна, бажано на холодну">
      <UiInfoRow>
        <UiMedia
          label="Відео запуску"
          carId={carId}
          value={car.imgFirstStart}
          onInput={(e) => updateCarKey("imgFirstStart", e)}
          noImage
        />
      </UiInfoRow>
      <UiInfoRow3>
        {[
          <UiSelect
            label="Тепмература двигуна під час запуску"
            value={car.startTemp}
            onInput={(e) => updateCarKey("startTemp", e)}
            optionList={["Холодний (-15 +5С)", "Холодний (+5 +25С)", "Теплий", "Гарячий"]}
            key={1}
          />,
          <UiTextArea
            label="Сторонні звуки при запуску та роботі"
            value={car.noiseEngine}
            onInput={(e) => updateCarKey("noiseEngine", e)}
            key={2}
          />,
          <UiSelect
            label="Звук ГУР при повороті руля"
            value={car.noiseGyr}
            onInput={(e) => updateCarKey("noiseGyr", e)}
            optionList={["Тихо", "Напрягається двигун", "Гуде"]}
            key={3}
          />,
        ]}
      </UiInfoRow3>
      <UiInfoRow>
        <UiTextArea label="Примітки" value={car.engineStartNotes} onInput={(e) => updateCarKey("engineStartNotes", e)} />
      </UiInfoRow>
    </UiInfoSection>
  )
}
