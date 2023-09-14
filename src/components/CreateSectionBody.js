import UiTextArea from "@/components/UiTextArea";
import UiInfoSection from "@/components/UiInfoSection";
import UiInfoRow from "@/components/UiInfoRow";
import UiMedia from "@/components/UiMedia";

export default function CreateSectionBody({ car, updateCarKey, carId }) {
  return (
    <UiInfoSection title="Зовнішній огляд">
      <UiInfoRow>
        <UiMedia label="Фото зовні" carId={carId} />
      </UiInfoRow>
      <UiInfoRow>
        <UiMedia label="Фото силової частини" notate="рама/лонжерони, місця кріплення кузова до рами" carId={carId} />
      </UiInfoRow>
      <UiInfoRow>
        <UiTextArea label="Примітки" value={car.bodyNotes} onInput={(e) => updateCarKey("bodyNotes", e)}/>
      </UiInfoRow>
    </UiInfoSection>
  )
}
