import UiTextArea from "@/components/UiTextArea";
import UiInfoSection from "@/components/UiInfoSection";
import UiMedia from "@/components/UiMedia";
import UiInfoRow from "@/components/UiInfoRow";

export default function CreateSectionOther({ car, updateCarKey, carId }) {
  return (
    <UiInfoSection title="Висновок, додаткова інфа">
      <UiInfoRow>
        <UiMedia
          label="Додаткові медіа"
          value={car.imgOther}
          onInput={(e) => updateCarKey("imgOther", e)}
          carId={carId}
        />
      </UiInfoRow>
      <UiInfoRow>
        <UiTextArea label="Висновок" value={car.otherNotes} onInput={(e) => updateCarKey("otherNotes", e)}/>
      </UiInfoRow>
    </UiInfoSection>
  )
}
