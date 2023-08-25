"use client"

import {useRouter} from "next/navigation";
import PageHeader from "@/components/PageHeader";
import UiInput from "@/components/UiInput";
import UiCheckbox from "@/components/UiCheckbox";
import UIAddPhoto from "@/components/UIAddPhoto";
import UiTextArea from "@/components/UiTextArea";
import {useEffect, useState} from "react";

export default function CreatePage() {
  // const {asPath, pathname} = useRouter();
  // console.log(asPath, pathname);
  const [car, setCar] = useState({

  });
  const cartResult = {
    id: Date.now(),
    name: "",
    price: "",
    engineVolume: "",
    images: [],
    info: [
      {title: "", }
    ],
  }
  function updateCarKey(key, value) {
    car[key] = value;
    setCar({...car});
  }

  useEffect(() => {
    console.log(car);
  }, [car]);
  return (
    <main className="min-h-screen">
      <PageHeader />
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <form>
          <div className="space-y-12">
            <div className="border-b border-gray-900/10 pb-12">
              <h2 className="text-base font-semibold leading-7 text-gray-900">Головна</h2>
              <div className="col-span-full">
                <UiInput label="Лінка на авто" value={car.link} onInput={(value) => updateCarKey("link", value)} />
              </div>

              <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                <div className="sm:col-span-2 sm:col-start-1">
                  <UiInput label="Марка" />
                </div>
                <div className="sm:col-span-2">
                  <UiInput label="Модель" />
                </div>
                <div className="sm:col-span-2">
                  <div>

                  </div>
                </div>
              </div>
              <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-12">
                <div className="sm:col-span-3 sm:col-start-1">
                  <UiInput label="рік" />
                </div>
                <div className="sm:col-span-3">
                  <UiInput label="пробіг" />
                </div>
                <div className="sm:col-span-3">
                  <UiInput label="обьем" />
                </div>
                <div className="sm:col-span-3">
                  <UiCheckbox id={1} label="проблемы с ТО" />
                </div>
              </div>
            </div>
            <div className="border-b border-gray-900/10 pb-12">
              <h2 className="text-base font-semibold leading-7 text-gray-900">Внешний остмотр кузов</h2>
              <div className="mt-10 gap-x-6 gap-y-8 sm:grid-cols-6">
                <UIAddPhoto label="Aото кузова" notate="couple common fotos and bed photos + состояние шин"/>
                <div>
                  <input type="file" multiple />
                </div>

                {/*<UIAddPhoto label="фото рамы/лонжеронов" notate=" + места крепления кузова к раме"/>*/}
                <div>
                  <UiTextArea label="Заметки"/>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-6 flex items-center justify-end gap-x-6">
            <button type="button" className="text-sm font-semibold leading-6 text-gray-900">Cancel</button>
            <button type="submit" className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Save</button>
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
