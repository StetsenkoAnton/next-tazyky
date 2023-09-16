import UiTextArea from "@/components/UiTextArea";
import UiInfoSection from "@/components/UiInfoSection";
import UiInfoRow from "@/components/UiInfoRow";
import UiMedia from "@/components/UiMedia";
import UiInfoRow21 from "@/components/UiInfoRow21";
import UiSelect from "@/components/UiSelect";

export default function CreateSectionBody({ car, updateCarKey, carId }) {
  return (
    <UiInfoSection title="Зовнішній огляд">
      <UiInfoRow>
        <UiMedia
          label="Фото зовні"
          notate="Перше фото буде для заставки"
          value={car.imgBody}
          onInput={(e) => updateCarKey("imgBody", e)}
          carId={carId}
        />
      </UiInfoRow>
      <UiInfoRow21>
        {[
          <UiMedia
            label="Фото силової частини"
            notate="рама/лонжерони, місця кріплення кузова до рами"
            value={car.imgBodyStrong}
            onInput={(e) => updateCarKey("imgBodyStrong", e)}
            carId={carId}
            key={1}
          />,
          <UiSelect
            label="Рама"
            value={car.chassis}
            onInput={(e) => updateCarKey("chassis", e)}
            optionList={["Дуже гарна", "Жива", "Під заміну"]}
            key={2}
          />,
        ]}
      </UiInfoRow21>
      <UiInfoRow>
        <UiTextArea label="Примітки по силовій частині" value={car.bodyNotes} onInput={(e) => updateCarKey("bodyNotes", e)}/>
      </UiInfoRow>
    </UiInfoSection>
  )
}
