import UiTextArea from "@/components/UiTextArea";
import UiInfoSection from "@/components/UiInfoSection";
import UiMedia from "@/components/UiMedia";
import UiSelect from "@/components/UiSelect";
import UiInfoRow3 from "@/components/UiInfoRow3";
import UiInfoRow4 from "@/components/UiInfoRow4";
import UiInfoRow21 from "@/components/UiInfoRow21";
import UiInfoRow from "@/components/UiInfoRow";

export default function CreateSectionBodyTechnic({ car, updateCarKey, carId }) {
  return (
    <UiInfoSection title="Зовнішній огляд, техніка">
      <UiInfoRow>
        <UiMedia label="Фото мости, хрестовини, роздатка та коробка" carId={carId} />
      </UiInfoRow>
      <UiInfoRow4>
        {[
          (car.gear === "Повний" && <UiSelect
            label="Передній міст"
            value={car.fullFront}
            onInput={(e) => updateCarKey("fullFront", e)}
            optionList={["Сухий", "Спітнілий", "Тече"]}
            key={1}
          />),
          (car.gear === "Повний" && <UiSelect
            label="Роздатка"
            value={car.fullCenter}
            onInput={(e) => updateCarKey("fullCenter", e)}
            optionList={["Суха", "Спітніла", "Тече"]}
            key={2}
          />),
          (car.gear !== "Передній" && <UiSelect
            label="Задній міст"
            value={car.fullRear}
            onInput={(e) => updateCarKey("fullRear", e)}
            optionList={["Сухий", "Спітнілий", "Тече"]}
            key={3}
          />),
          <UiSelect
            label="Коробка"
            value={car.kpp}
            onInput={(e) => updateCarKey("kpp", e)}
            optionList={["Сухий", "Спітнілий", "Тече"]}
            key={3}
          />,
        ]}
      </UiInfoRow4>
      <UiInfoRow>
        <UiMedia label="Фото шруси та пильники" carId={carId} />
      </UiInfoRow>
      <UiInfoRow21>
        {[
          <UiMedia label="Фото рейки ГУР" carId={carId}  key={4}/>,
          <UiSelect
            label="Рейка"
            value={car.gyr}
            onInput={(e) => updateCarKey("gyr", e)}
            optionList={["Суха", "Спітніла", "Тече"]}
            key={4}
          />,
        ]}
      </UiInfoRow21>
      <UiInfoRow3>
        {[
          <UiSelect
            label="Стан передніх дисків"
            value={car.breakFront}
            onInput={(e) => updateCarKey("breakFront", e)}
            optionList={["Норма", "Під заміну", "Барабанні"]}
            key={5}
          />,
          <UiSelect
            label="Стан задніх дисків"
            value={car.breakRear}
            onInput={(e) => updateCarKey("breakRear", e)}
            optionList={["Норма", "Під заміну", "Барабанні"]}
            key={6}
          />,
        ]}
      </UiInfoRow3>
      <UiInfoRow>
        <UiTextArea label="Примітки" value={car.bodyTechnicNotes} onInput={(e) => updateCarKey("bodyTechnicNotes", e)}/>
      </UiInfoRow>
    </UiInfoSection>
  )
}
