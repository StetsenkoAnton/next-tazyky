"use client"

import {useParams, useRouter} from "next/navigation";
import {useEffect, useMemo, useState} from "react";
import PageHeader from "@/components/PageHeader";
import UiInput from "@/components/UiInput";
import UiCheckbox from "@/components/UiCheckbox";
import UIAddPhoto from "@/components/UIAddPhoto";
import UiTextArea from "@/components/UiTextArea";
import UiInfoSection from "@/components/UiInfoSection";
import UiInfoRow4 from "@/components/UiInfoRow4";
import UiInfoRow3 from "@/components/UiInfoRow3";
import { getUiCarData } from "@/services/getUiCarData";
import {setDbData} from "@/firebase/db";
import {MARKS, CAR_EMPTY} from "@/constants";
import {getRtDbData, updateRtDbData} from "@/firebase/rtDb";

const dataListMarks = Object.keys(MARKS);
export default function CreatePage() {
  const router = useRouter();
  const params = useParams();
  const [car, setCar] = useState(CAR_EMPTY);

  useEffect(() => {
    const unsubscribe = getRtDbData(params.id,(d) => {
      if (!d || JSON.stringify(car) === JSON.stringify(d)) return;
      setCar(d)
    })
    return () => {
      unsubscribe();
    };
  }, []);



  function updateCarKey(key, value) {
    const cloneCar = {...car};
    cloneCar[key] = value;
    updateRtDbData(params.id, cloneCar).then();
  }
  const dataListModel = useMemo(() => MARKS[car?.marka]?.sort(), [car?.marka]);
  function onSubmit(e) {
    e.preventDefault();
    const uiCar = getUiCarData(car);
    setDbData("cars", params.id, uiCar).then(() => {
      router.push(`/car/${params.id}`)
    });
  }
  return (
    <main className="min-h-screen">
      <PageHeader />
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <form onSubmit={onSubmit}>
          <div className="space-y-12">
            <UiInfoSection title="Головна">
              <UiInfoRow3>
                {[
                  <UiInput
                    required
                    label="Марка"
                    value={car.marka}
                    onInput={(e) => updateCarKey("marka", e)}
                    dataList={dataListMarks}
                    dataListName="marks"
                    key={1}
                  />,
                  <UiInput
                    required
                    label="Модель"
                    value={car.model}
                    onInput={(e) => updateCarKey("model", e)}
                    dataList={dataListModel}
                    dataListName="model"
                    key={2}
                  />,
                  <UiInput
                    required
                    label="Ціна"
                    value={car.priceNum}
                    onInput={(e) => updateCarKey("priceNum", e)}
                    afterSelect={['€', 'pln', 'грн', '$']}
                    valueSelect={car.priceCurrency}
                    onSelect={(e) => updateCarKey("priceCurrency", e)}
                    key={3}
                  />
                ]}
              </UiInfoRow3>
              <UiInfoRow4>
                {[
                  <UiInput required label="рік" value={car.year} onInput={(e) => updateCarKey("year", e)} key={1} />,
                  <UiInput required label="пробіг" value={car.mileage} onInput={(e) => updateCarKey("mileage", e)} key={2} />,
                  <UiInput required label="обьем" value={car.engineVolume} onInput={(e) => updateCarKey("engineVolume", e)} key={3} />,
                  <UiCheckbox id={1} value={car.hasTO} onInput={(e) => updateCarKey("hasTO", e)} label="ТО + страховка" key={4} />
                ]}
              </UiInfoRow4>
            </UiInfoSection>
            <UiInfoSection title="Внешний остмотр кузов">
              <div className="mt-10 gap-x-6 gap-y-8 sm:grid-cols-6">
                <input type="file" multiple />

                {/*<UIAddPhoto label="фото рамы/лонжеронов" notate=" + места крепления кузова к раме"/>*/}
                <div>
                  <UiTextArea label="Примітки" value={car.bodyNotes} onInput={(e) => updateCarKey("bodyNotes", e)}/>
                </div>
              </div>
            </UiInfoSection>
          </div>

          <div className="mt-6 flex items-center justify-end gap-x-6">
            <button type="button" className="text-sm font-semibold leading-6 text-gray-900">Відалити</button>
            <button
              type="submit"
              className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              // onClick={onSubmit}
            >
              Зберегти та перейти до огляду
            </button>
          </div>
        </form>
      </div>
      <div>
        <h1>Внешний остмотр техника</h1>
        <p>? передние диски замена</p>
        <p>? задние диски замена</p>
        <p>? рейка течет</p>
        <p>? шрусы сухие</p>
        <p>? состяние мостов и роздатки</p>
        <p>? состяние крестовин</p>
        <p>фото</p>
      </div>
      <div>
        <h1>Осмотр двигателя (холодный)</h1>
        <p>? эмульсия в заливной</p>
        <p>когда менялся ГРМ</p>
        <p>? сухая турбина и патрубки до интеркуллера</p>
        <p>? сухая топливная</p>
        <p>? течь по двигателю</p>
        <p>? состояние и чистота радиатора</p>
        <p>фото</p>
      </div>
      <div>
        <h1>запуск двигателя (видео)</h1>
        <p>время запуска на холодную</p>
        <p>? гудит ли ГУР</p>
        <p>? посторонние звуки / громкое клацанье ТНВД или Клапанов</p>
      </div>
      <div>
        <h1>Осмотр салона</h1>
        <p>? общая оценка</p>
        <p>? запах плесени/сырости</p>
        <p>? кондиционер</p>
        <p>? електро пакет зеркала</p>
        <p>? електро пакет стеклоподьемники</p>
        <p>фото</p>
      </div>
      <div>
        <h1>авто в движении</h1>
        <p>коробка</p>
        <p>запах горелого масла</p>
        <p>дім с вихлопной</p>
        <p>сцепление</p>
        <p>полній привод</p>
        <p>стук подвески</p>
        <p>стук руля</p>
        <p>люфт руля</p>
        <p>динамика разгона от 20км/ч до 60км/ч</p>
        <p>тормоза</p>
      </div>
      <div>
        <h1>Осмотр двигателя (гарячий)</h1>
        <p>дим с заливной</p>
        <p>дис с щупа</p>
        <p>пузирі в расширительном</p>
        <p>время запуска на гарячую</p>
      </div>
      <div>
        <h1>резюме</h1>
        <p>общее впечатление</p>
      </div>
    </main>
  )
}
