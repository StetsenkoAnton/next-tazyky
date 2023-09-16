import UiTextArea from "@/components/UiTextArea";
import UiInfoSection from "@/components/UiInfoSection";
import UiInfoRow3 from "@/components/UiInfoRow3";
import UiInfoRow4 from "@/components/UiInfoRow4";
import UiSelect from "@/components/UiSelect";
import UiCheckbox from "@/components/UiCheckbox";
import UiInfoRow from "@/components/UiInfoRow";

export default function CreateSectionDrive({ car, updateCarKey, carId }) {
  return (
    <UiInfoSection title="Авто в русі">
      <UiInfoRow4>
        {[
          (car.transmission === "Механіка" && <UiSelect
            label="Зчеплення"
            value={car.clutch}
            onInput={(e) => updateCarKey("clutch", e)}
            optionList={["Туге, бере спочатку або в середині", "М'яке, бере в кінці"]}
            key={1}
          />),
          <UiSelect
            label="Динамика прискорення в підлогу 20 - 80км/ч"
            value={car.acceleration}
            onInput={(e) => updateCarKey("acceleration", e)}
            optionList={["Ракета", "Норм", "Дуже слабо", "Глохне", "Не перевірили"]}
            key={2}
          />,
          <UiSelect
            label="Гальма"
            value={car.brake}
            onInput={(e) => updateCarKey("brake", e)}
            optionList={["Гарні", "Гарні але є вібрація", "Гарні але уводить", "Слабі", "Мають повітря в системі"]}
            key={3}
          />,
          <UiSelect
            label="Вібрация на скорості"
            value={car.vibrationSpeed}
            onInput={(e) => updateCarKey("vibrationSpeed", e)}
            optionList={["Відсутня", "Є 80-120", "Не їздили на трассі"]}
            key={4}
          />,
        ]}
      </UiInfoRow4>
      {car.transmission === "Механіка" && <UiInfoRow>
        <UiCheckbox
          id={5}
          value={car.isMkppError}
          onInput={(e) => updateCarKey("isMkppError", e)}
          label="МКПП має питання"
         />
      </UiInfoRow>}
      {car.isMkppError && <UiInfoRow4>
        {[
          <UiCheckbox
            label="Роздовбана куліса"
            id={6}
            value={car.isErrorMkppSelector}
            onInput={(e) => updateCarKey("isErrorMkppSelector", e)}
            key={6}
          />,
          <UiCheckbox
            label="Погано включаються передачі (синхронізаторі)"
            id={7}
            value={car.isErrorMkppSynkro}
            onInput={(e) => updateCarKey("isErrorMkppSynkro", e)}
            key={7}
          />,
          <UiCheckbox
            label="Вибиває"
            id={8}
            value={car.isErrorMkppKnocksOut}
            onInput={(e) => updateCarKey("isErrorMkppKnocksOut", e)}
            key={8}
          />,
          <UiCheckbox
            label="Вібрація (пропадає при важатому зчепленні)"
            id={9}
            value={car.isErrorMkppVibration}
            onInput={(e) => updateCarKey("isErrorMkppVibration", e)}
            key={9}
          />,
        ]}
      </UiInfoRow4>}
      <UiInfoRow3>
        {[
          <UiSelect
            label="0 Керма"
            value={car.helmZero}
            onInput={(e) => updateCarKey("helmZero", e)}
            optionList={["Рівно", "Трохи відхилено", "Криво"]}
            key={10}
          />,
          <UiSelect
            label="Люфт керма"
            value={car.helmBacklash}
            onInput={(e) => updateCarKey("helmBacklash", e)}
            optionList={["Відсутній", "Не виликий", "Сильній"]}
            key={12}
          />,
          <UiSelect
            label="Розворот при повному вивороті шруси"
            value={car.helmTurn}
            onInput={(e) => updateCarKey("helmTurn", e)}
            optionList={["Не хрустять", "Хрустять"]}
            key={11}
          />,
        ]}
      </UiInfoRow3>
      <UiInfoRow4>
        {[
          (car.gear === "Повний" && <UiSelect
            label="Повний привід"
            value={car.fullDrive}
            onInput={(e) => updateCarKey("fullDrive", e)}
            optionList={["Працює", "Працює але хрустить", "Не працює"]}
            key={13}
          />),
          <UiSelect
            label="Прискорення - гальмування мотором - прискорення"
            value={car.fullDriveBacklash}
            onInput={(e) => updateCarKey("fullDriveBacklash", e)}
            optionList={["Тихо", "Є стук"]}
            key={14}
          />,
          <UiSelect
            label="Підвіска"
            value={car.suspension}
            onInput={(e) => updateCarKey("suspension", e)}
            optionList={["Тиха, м'яка", "Має стуки", "Б'є в кузов"]}
            key={15}
          />,
          <UiSelect
            label="Запах горілого масла при зупинці"
            value={car.oilSmell}
            onInput={(e) => updateCarKey("oilSmell", e)}
            optionList={["Не відчувається", "Ледве чутно", "Сильний"]}
            key={16}
          />,
        ]}
      </UiInfoRow4>
      <UiInfoRow>
        <UiTextArea label="Примітки Test-drive" value={car.driveNotes} onInput={(e) => updateCarKey("driveNotes", e)}/>
      </UiInfoRow>
    </UiInfoSection>
  )
}
