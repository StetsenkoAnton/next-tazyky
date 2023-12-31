import { getDbData } from "@/firebase/db";
import PageHeader from "@/components/PageHeader";
import UiInfoSection from "@/components/UiInfoSection";
import BtnShare from "@/components/BtnShare";
import MediaList from "@/components/MediaList";
import { CAR_EMPTY } from "@/constants";
import UiTextList from "@/components/UiTextList";
import Link from "next/link";

export default async function CarPage({ params }) {
  const id = params.id;
  const carData = await getDbData("cars", id);
  const car = { ...CAR_EMPTY, ...carData };
  const bodyImgList = [...car.imgBody, ...car.imgBodyInner];
  bodyImgList[0].fetchpriority = "high";
  bodyImgList[0].lazy = false;
  return (
    <main className="min-h-screen">
      <PageHeader
        leftSide={(
          <Link
            className="inline-flex gap-2 items-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            href="/"
          >
            Назад
          </Link>
        )}
      >
        <BtnShare title={`Звіт ${car.name}`} />
      </PageHeader>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="lg:flex lg:items-center lg:justify-between mb-3">
          <div className="min-w-0 flex-1">
            <h2
              className="text-2xl font-bold leading-7 capitalize text-gray-900 sm:truncate sm:text-3xl sm:tracking-tight"
            >
              {`${car.name} ${car.engineVolume}`}
            </h2>
            <div className="mt-1 flex flex-col sm:mt-0 sm:flex-row sm:flex-wrap sm:space-x-6">
              <div className="mt-2 flex items-center text-sm text-gray-500">
                <svg className="mr-1.5 h-5 w-5 flex-shrink-0 text-gray-400" viewBox="0 0 20 20" fill="currentColor"
                     aria-hidden="true">
                  <path
                    d="M10.75 10.818v2.614A3.13 3.13 0 0011.888 13c.482-.315.612-.648.612-.875 0-.227-.13-.56-.612-.875a3.13 3.13 0 00-1.138-.432zM8.33 8.62c.053.055.115.11.184.164.208.16.46.284.736.363V6.603a2.45 2.45 0 00-.35.13c-.14.065-.27.143-.386.233-.377.292-.514.627-.514.909 0 .184.058.39.202.592.037.051.08.102.128.152z"/>
                  <path fillRule="evenodd"
                        d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-6a.75.75 0 01.75.75v.316a3.78 3.78 0 011.653.713c.426.33.744.74.925 1.2a.75.75 0 01-1.395.55 1.35 1.35 0 00-.447-.563 2.187 2.187 0 00-.736-.363V9.3c.698.093 1.383.32 1.959.696.787.514 1.29 1.27 1.29 2.13 0 .86-.504 1.616-1.29 2.13-.576.377-1.261.603-1.96.696v.299a.75.75 0 11-1.5 0v-.3c-.697-.092-1.382-.318-1.958-.695-.482-.315-.857-.717-1.078-1.188a.75.75 0 111.359-.636c.08.173.245.376.54.569.313.205.706.353 1.138.432v-2.748a3.782 3.782 0 01-1.653-.713C6.9 9.433 6.5 8.681 6.5 7.875c0-.805.4-1.558 1.097-2.096a3.78 3.78 0 011.653-.713V4.75A.75.75 0 0110 4z"
                        clipRule="evenodd"/>
                </svg>
                {`${car.price}`}
              </div>
              <div className="mt-2 flex items-center text-sm text-gray-500">
                <svg className="mr-1.5 h-5 w-5 flex-shrink-0 text-gray-400" viewBox="0 0 20 20" fill="currentColor"
                     aria-hidden="true">
                  <path fillRule="evenodd"
                        d="M5.75 2a.75.75 0 01.75.75V4h7V2.75a.75.75 0 011.5 0V4h.25A2.75 2.75 0 0118 6.75v8.5A2.75 2.75 0 0115.25 18H4.75A2.75 2.75 0 012 15.25v-8.5A2.75 2.75 0 014.75 4H5V2.75A.75.75 0 015.75 2zm-1 5.5c-.69 0-1.25.56-1.25 1.25v6.5c0 .69.56 1.25 1.25 1.25h10.5c.69 0 1.25-.56 1.25-1.25v-6.5c0-.69-.56-1.25-1.25-1.25H4.75z"
                        clipRule="evenodd"/>
                </svg>
                {new Date(car.id).toLocaleString('uk-UA', { timeZone: 'UTC' })}
              </div>
            </div>
          </div>
        </div>
        <div>
          <p className="text-gray-500 text-sm mb-5">Збільшити зображеня можно зумом як в галереї</p>
          <UiInfoSection title="Огляд зовні" >
            <p>
              Салон на {car.salonResult} з 5{
                car.innerSmell !== 'норм'
                  ? `, має запах ${car.innerSmell}, є ймовірність шо топлена'`
                  : ''
              }.
              {car.bodyInnerNotes && `${car.bodyInnerNotes}.`} Кондиціонер {car.climat}.
            </p>
            <MediaList mediaPaths={bodyImgList} />
          </UiInfoSection>
          <UiInfoSection title="Огляд знизу">
            <p>Рама {car.chassis}. {car.bodyNotes}</p>
            <MediaList mediaPaths={car.imgBodyStrong} />
          </UiInfoSection>
          <UiInfoSection>
            <p>
              <UiTextList
                textObject={{
                  [`Передній міст ${car.fullFront}`]: car.fullFront,
                  [`задній міст ${car.fullRear}`]: car.fullRear,
                  [`роздатка ${car.fullCenter}`]: car.fullCenter,
                  [`коробка ${car.kpp}`]: car.kpp,
                }}
                textAfter=". "
              />
              Тормозні диски передні {car.breakFront} та задні {car.breakRear}, {car.bodyTechnicNotes}.
            </p>
            <MediaList mediaPaths={[...car.imgBodyGear, ...car.imgBodyShrus]} />
          </UiInfoSection>
          <UiInfoSection>
            <p>Рейка {car.gyr}, при поворотах руля {car.noiseGyr}.</p>
            <MediaList mediaPaths={car.imgBodyGyr} />
          </UiInfoSection>
          <UiInfoSection title="Двигун">
            <p>
              Двигун під час запуску
              <UiTextList
                textObject={{
                  [car.startTemp]: car.startTemp,
                  [car.noiseEngine]: car.noiseEngine,
                  [car.engineStartNotes]: car.engineStartNotes,
                }}
                textAfter="."
              />
              Старт на гарячу в порівнянні з першим: {car.secondStart}.
              <UiTextList
                textObject={{
                  [car.engineHotNotes]: car.engineHotNotes,
                }}
                textAfter="."
              />
            </p>
            <p>Емульсія на кришці заливної горловини {car.emulsion}, та {car.bubblesInCool} бульбашок в розширювальному бачку на гарячу, привід ГРМ {car.grm}</p>
            <p>Помилки по OBD2 {car.obd}.</p>
            <MediaList mediaPaths={[...car.imgFirstStart, ...car.imgSmokeEngine]} />
          </UiInfoSection>
          <UiInfoSection>
            <p>Tурбіна {car.turbo}, {car.oilSmell} запах горілого масла при зупинці після покатушек </p>
            <MediaList mediaPaths={car.imgTurbo} />
          </UiInfoSection>
          <UiInfoSection>
            <p>Паливна {car.fuelSystem}</p>
            <MediaList mediaPaths={car.imgFuelSystem} />
          </UiInfoSection>
          <UiInfoSection>
            <p>Pадіатор {car.radiator}</p>
            <MediaList mediaPaths={car.imgRadiator} />
          </UiInfoSection>
          <UiInfoSection>
            {(car.guessEngine.length || !!car.imgGuessEngine.length) && (
              <>
                <p>Напевно {car.guessEngine}</p>
                <MediaList mediaPaths={car.imgGuessEngine} />
              </>
            )}

            <p>{car.engineColdNotes} {car.engineHotNotes && `, ${car.engineHotNotes}`}</p>
          </UiInfoSection>
          <UiInfoSection title="Тест драйв">
            <p>Зчеплення {car.clutch}, гальма {car.brake}, вібрациї на скорості: {car.vibrationSpeed}, динамика прискорення в підлогу 20 - 80км/ч: {car.acceleration}</p>
            {car.transmission.toLowerCase() === "механіка" && (
              <p>
                Коробка {car.isMkppError
                ? (
                  <UiTextList
                    textObject={{
                      "має роздовбану кулісу": car.isErrorMkppSelector,
                      "погано включаються передачі": car.isErrorMkppSynkro,
                      "вибиває": car.isErrorMkppKnocksOut,
                      "має вібрацію": car.isErrorMkppVibration,
                    }}
                    textAfter="."
                  />
                )
                : 'без зауважень.'}
              </p>
            )}
            {car.transmission.toLowerCase() === "автомат" && (
              <p>
                Коробка {car.isAkppError
                ? (
                  <UiTextList
                    textObject={{
                      "має поштовхи при перемиканні селектору": car.isErrorAkppSelector,
                      "має поштовхи при зміні передач": car.isErrorAkppSynkro,
                      "має вібрацію в D": car.isErrorAkppVibration,
                    }}
                    textAfter="."
                  />
                )
                : 'без зауважень'}
              </p>
            )}
            <p>Кермо в нули стоїть {car.helmZero}, люфт {car.helmBacklash}, при повному вивороті шруси {car.helmTurn}, підвіска {car.suspension}</p>
            <p>Повний привід {car.fullDrive}, прискорення-&gt;гальмування мотором-&gt;прискорення - {car.fullDriveBacklash}</p>
            {!!car.driveNotes.length && <p>Test-drive {car.driveNotes}</p>}
          </UiInfoSection>
          <UiInfoSection title="Высновок">
            <MediaList mediaPaths={car.imgOther} />
            <p>{car.otherNotes}</p>
          </UiInfoSection>
        </div>
      </div>
    </main>
  )
}
