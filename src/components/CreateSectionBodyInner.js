import UiTextArea from "@/components/UiTextArea";
import UiInfoSection from "@/components/UiInfoSection";
import UiMedia from "@/components/UiMedia";
import UiInfoRow4 from "@/components/UiInfoRow4";
import UiSelect from "@/components/UiSelect";
import UiInfoRow from "@/components/UiInfoRow";
import UiInfoRow12 from "@/components/UiInfoRow12";

export default function CreateSectionBodyInner({ car, updateCarKey, carId }) {
  return (
    <UiInfoSection title="Огляд салону">
      <UiInfoRow>
        <UiMedia label="Фото салону" carId={carId} />
      </UiInfoRow>
      <UiInfoRow4>
        {[
          <UiSelect
            label="Запах"
            value={car.innerSmell}
            onInput={(e) => updateCarKey("smell", e)}
            optionList={["Все ок", "Вогкості", "Цвілі"]}
            key={1}
          />,
          <UiSelect
            label="Кондиціонер"
            value={car.climat}
            onInput={(e) => updateCarKey("climat", e)}
            optionList={["Працює", "Не працює бо хз", "Треба заправить"]}
            key={2}
          />,
          <UiSelect
            label="Фари / повороти"
            value={car.light}
            onInput={(e) => updateCarKey("light", e)}
            optionList={["Все працює", "Треба лампа"]}
            key={3}
          />,
          <UiSelect
            label="Загальний стан"
            value={car.salonResult}
            onInput={(e) => updateCarKey("salonResult", e)}
            optionList={["1", "2", "3", "4", "5"]}
            key={4}
          />,
        ]}
      </UiInfoRow4>
      <UiInfoRow12>
        {[
          <UiSelect
            label="Читання помилок OBD2 "
            value={car.obd}
            onInput={(e) => updateCarKey("obd", e)}
            optionList={["Не читали", "Чисто", "Є помілки", "Не вдалось прочитати"]}
            key={5}
          />,
          (car.obd === "Є помілки" && <UiMedia label="Скрін помилок" carId={carId} key={6} />),
        ]}
      </UiInfoRow12>
      <UiInfoRow>
        <UiTextArea label="Примітки" value={car.bodyInnerNotes} onInput={(e) => updateCarKey("bodyInnerNotes", e)}/>
      </UiInfoRow>
    </UiInfoSection>
  )
}
