import UiTextArea from "@/components/UiTextArea";
import UiInfoSection from "@/components/UiInfoSection";
import UiMedia from "@/components/UiMedia";
import UiInfoRow from "@/components/UiInfoRow";

export default function CreateSectionOther({ car, updateCarKey, carId }) {
  return (
    <UiInfoSection title="Pезюме / додаткова інфа">
      <UiInfoRow>
        <UiMedia label="додатково" carId={carId} />
      </UiInfoRow>
      <UiInfoRow>
        <UiTextArea label="Примітки" value={car.otherNotes} onInput={(e) => updateCarKey("otherNotes", e)}/>
      </UiInfoRow>
    </UiInfoSection>
  )
}
