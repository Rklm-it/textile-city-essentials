import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { WidthRuler, WidthBar } from "@/components/site/width-ruler";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Текстиль-Сити — всё для швейного и мебельного производства" },
      {
        name: "description",
        content:
          "Оптовый склад в Ростове-на-Дону: более 55 000 наименований тканей, фурнитуры, наполнителей и комплектующих для матрасов. Отгрузка рулонами и упаковками.",
      },
      {
        property: "og:title",
        content: "Текстиль-Сити — оптовый склад текстиля в Ростове-на-Дону",
      },
      {
        property: "og:description",
        content:
          "Ткани, швейная фурнитура, наполнители, комплектующие для матрасов, оборудование и упаковка оптом. Работаем с 2009 года.",
      },
    ],
  }),
  component: Index,
});

const MENU = ["Каталог", "Услуги", "Оптовикам", "Доставка", "О компании", "Контакты"];

const STOCK = [
  {
    name: "Ткань Брезент СКПВ",
    width: "Ш-90 см",
    density: "пл. 540 г/м²",
    price: "цена по запросу",
  },
  { name: "Бязь суровая", width: "Ш-165 см", density: "пл. 120 г/м²", price: "цена по запросу" },
  {
    name: 'Ткань Гобелен "Дикая орхидея" цв.1',
    width: "Ш-200 см",
    density: "пл. 325 г/м²",
    price: "цена по запросу",
  },
  { name: "П/лён набивной", width: "Ш-220 см", density: "пл. 140 г/м²", price: "цена по запросу" },
  {
    name: "ткань Сатин-страйп полоса 3 см, белый",
    width: "Ш-280 см",
    density: "—",
    price: "цена по запросу",
  },
];

const DIVISIONS = [
  "Ткани — 153 подраздела",
  "Швейная фурнитура — 80 подразделов",
  "Наполнители и утеплители — 15 подразделов",
  "Комплектующие для матрасов — 11 подразделов",
  "Домашний текстиль — 8 подразделов",
];

const FACTS = [
  "Работаем с 2009 года",
  "Более 55 000 товаров на складе",
  "Новое поступление каждую неделю",
  "Отгружаем во все регионы России",
];

const CATALOG = [
  { title: "Ткани", cm: 280, subs: "Сатин · бязь · брезент · мебельные ткани" },
  { title: "Швейная фурнитура", cm: 150, subs: "Нитки · молнии · резинка · косая бейка" },
  { title: "Наполнители и утеплители", cm: 160, subs: "Синтепон · холлофайбер · поролон · утеплитель «Сиберия»" },
  { title: "Комплектующие для матрасов", cm: 200, subs: "Матрасные ткани · поролон · войлок · фурнитура" },
  { title: "Швейное оборудование", cm: 0, subs: "Иглы Organ · Schmetz · Gamma · лапки · масло" },
  { title: "Упаковка для текстиля", cm: 0, subs: "Пакеты с клапаном · мешки · сумки-чемоданы" },
  { title: "Текстиль для отелей и ресторанов", cm: 280, subs: "Сатин однотонный · сатин жаккард · перкаль · махровое полотно" },
  { title: "Текстиль для детских садов", cm: 220, subs: "Бязь детская · поплин детский" },
  { title: "Домашний текстиль", cm: 220, subs: "Одеяла · подушки · покрывала · наматрасники" },
];

const OPTOVIE = [
  { cond: "Минимальная сумма заказа в интернет-магазине", val: "3 000 ₽, можно набирать из разных отделов" },
  { cond: "Оптовая цена", val: "только целыми рулонами и упаковками" },
  { cond: "Отдел распродажи", val: "оптовая цена на мерный лоскут и отрез от 3 метров" },
  { cond: "Швейная фурнитура и упаковка", val: "оптовая цена от 1 000 ₽, целыми упаковками" },
  { cond: "Швейное оборудование", val: "от 3 000 ₽, запчасти и приспособления от 1 000 ₽" },
  { cond: "Домашний и гостиничный текстиль", val: "от 3 000 ₽" },
  { cond: "Бесплатная доставка", val: "от 100 000 ₽ по Ростовской области, Краснодарскому и Ставропольскому краю, Воронежской области" },
  { cond: "Резерв заказа", val: "до 5 дней" },
  { cond: "Цены", val: "указаны с НДС, юрлицам счёт с выделенным НДС" },
];

const DELIVERY =
  "Деловые Линии, ПЭК, КИТ, Байкал-Сервис, НЕВА, Энергия, ЦАП, СДЭК, Почта России. До терминала в Ростове-на-Дону от 250 ₽. Отправка по будним дням, трек-номер приходит на почту.";

const SERVICES = [
  {
    title: "Пошив постельного белья",
    img: "poshiv-postelnogo-belya",
    text: "Для гостиниц, пансионатов, больниц, детских садов и других учреждений по индивидуальным заказам, с учётом всех требований заказчика. Материалы можно выбрать на сайте или приехать на склад, образцы тканей отправляют по запросу. Популярные ткани для пошива: страйп-сатин, сатин, перкаль, бязь, махровое полотно. Срок пошива от 3 до 10 дней. На каждый заказ подписывается спецификация с точными параметрами; если заказ пришёл не по параметрам — меняют бесплатно.",
    tech: "срок: от 3 до 10 дней · минимальный объём: [N]",
  },
  {
    title: "Вышивка логотипа под заказ",
    img: "vyshivka-logotipa",
    text: "Для гостиниц, отелей, салонов красоты и ресторанов: постельное бельё, полотенца, халаты, скатерти, салфетки. Машинная вышивка нитками «Гутерманн» (Германия). Вышитый логотип не линяет, не выцветает и не деформируется.",
    tech: "срок: [N] · минимальный объём: [N]",
  },
  {
    title: "Изготовление ткани с логотипом заказчика",
    img: "tkan-s-logotipom",
    text: "Для мебельного и матрасного производства, пошива подушек и одеял. Метраж от 15 000 м.п., срок выполнения от 2,5 месяцев, предоставляются отгрузочные образцы.",
    tech: "срок: от 2,5 месяцев · минимальный объём: от 15 000 м.п.",
  },
];

const TASKS = [
  "Пошив постельного белья",
  "Пошив спецодежды",
  "Мебельное и матрасное производство",
  "Отели и рестораны",
  "Детские сады",
  "Пологи, тенты, туристическое снаряжение",
];

const PRODUCTS = [
  {
    name: "ткань Сатин-страйп полоса 3 см, белый, Ш-280 см",
    tech: "Ш-280 см · пл. [N] г/м² · 100% хлопок · минимальный отрез [N] м",
  },
  {
    name: "Ткань Брезент СКПВ Ш-90 пл.540гр 511252-СКПВ, м",
    tech: "Ш-90 см · пл. 540 г/м² · 100% хлопок · минимальный отрез [N] м",
  },
  {
    name: "ткань Бязь отбеленная ГОСТ, Ш-220 см",
    tech: "Ш-220 см · пл. [N] г/м² · 100% хлопок · минимальный отрез [N] м",
  },
  {
    name: "Мех искусственный Норка Ш-190 см цв.коричневый 90-222-Н, м",
    tech: "Ш-190 см · пл. [N] г/м² · состав [N] · минимальный отрез [N] м",
  },
  {
    name: "ткань Перкаль «Текстура \"Горный ветер 2\"»",
    tech: "Ш-[N] см · пл. [N] г/м² · 100% хлопок · минимальный отрез [N] м",
  },
  {
    name: "ткань вафельная «Бабочки»",
    tech: "Ш-[N] см · пл. [N] г/м² · 100% хлопок · минимальный отрез [N] м",
  },
];

function Index() {
  const [minWidth, setMinWidth] = useState(200);

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Шапка */}
      <header className="border-b border-foreground/20">
        <div className="shell grid grid-cols-[minmax(0,1fr)_auto] items-center gap-4 py-4 lg:flex lg:justify-between">
          <a href="/" className="min-w-0 truncate font-display text-lg lg:text-xl">
            Текстиль-Сити
          </a>
          <nav className="order-3 col-span-2 -mx-4 overflow-x-auto px-4 lg:order-none lg:mx-0 lg:overflow-visible lg:px-0">
            <ul className="flex items-center gap-5 whitespace-nowrap text-[15px] lg:gap-6">
              {MENU.map((item) => (
                <li key={item}>
                  <a href="#zaglushka" className="hover:text-accent">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
          <div className="flex shrink-0 items-center gap-4">
            <a href="tel:+78632732350" className="tech-line hidden lg:inline">
              +7 (863) 273-23-50
            </a>
            <a
              href="#zapros"
              className="rounded-sm bg-accent px-4 py-2 text-[15px] font-semibold text-accent-foreground"
            >
              Запросить прайс
            </a>
          </div>
        </div>
      </header>

      {/* Линейка ширины ткани во всю ширину окна, заголовок стоит на ней */}
      <div className="shell pt-8 md:pt-12">
        <p className="pb-2 text-[15px] font-semibold md:text-base">
          Оптовый склад тканей и комплектующих — Ростов-на-Дону
        </p>
        <WidthRuler />
      </div>

      {/* Первый экран */}
      <section className="shell grid grid-cols-1 gap-10 pb-14 pt-6 md:pb-24 md:pt-8 lg:grid-cols-2 lg:gap-16">
        <div>
          <div className="fluid-figure">
            <span>55 000</span>
          </div>
          <p className="measure mt-6">
            наименований на складе в Ростове-на-Дону. Девять разделов, 300 подразделов, отгрузка
            целыми рулонами и упаковками
          </p>
          <a
            href="#zapros"
            className="mt-8 inline-block rounded-sm bg-accent px-6 py-3 font-semibold text-accent-foreground"
          >
            Запросить прайс
          </a>
        </div>

        <div className="min-w-0">
          {/* Складская ведомость */}
          <div className="hidden md:block">
            <div className="tech-line grid grid-cols-[minmax(0,1fr)_88px_120px_140px] gap-4 border-b border-foreground pb-2 font-semibold">
              <span>Наименование</span>
              <span>Ширина</span>
              <span>Плотность</span>
              <span>Цена</span>
            </div>
            {STOCK.map((row) => (
              <div
                key={row.name}
                className="tech-line grid grid-cols-[minmax(0,1fr)_88px_120px_140px] gap-4 border-b border-foreground/20 py-3"
              >
                <span className="min-w-0">{row.name}</span>
                <span>{row.width}</span>
                <span>{row.density}</span>
                <span>{row.price}</span>
              </div>
            ))}
          </div>

          {/* Телефон: строка разворачивается в две */}
          <div className="md:hidden">
            {STOCK.map((row) => (
              <div key={row.name} className="border-b border-foreground/20 py-3">
                <p className="tech-line font-semibold">{row.name}</p>
                <p className="tech-line text-muted-foreground">
                  {row.width} · {row.density} · {row.price}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-8 border-t-2 border-foreground pt-4">
            {DIVISIONS.map((d) => (
              <a
                key={d}
                href="#katalog"
                className="tech-line block border-b border-foreground/20 py-3 hover:text-accent"
              >
                {d}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Полоса фактов */}
      <section className="border-y border-foreground/20">
        <div className="shell grid grid-cols-1 gap-4 py-8 sm:grid-cols-2 lg:grid-cols-4 lg:py-10">
          {FACTS.map((f) => (
            <p key={f} className="text-[15px] font-semibold md:text-base">
              {f}
            </p>
          ))}
        </div>
      </section>

      {/* Единственная фотография во всю ширину */}
      <img
        src="/images/sklad-tekstil-city-rostov.jpg"
        alt="Склад «Текстиль-Сити» в Ростове-на-Дону: рулоны тканей на стеллажах"
        className="h-[260px] w-full object-cover md:h-[520px]"
        loading="lazy"
      />

      {/* О компании / раздел с H2 */}
      <section className="shell section-y">
        <h1 className="h2-display measure">Всё для швейного и мебельного производства</h1>
        <p className="measure mt-6">
          «Текстиль-Сити» работает с 2009 года и снабжает швейные и мебельные производства юга
          России: ткани, швейная фурнитура, наполнители и утеплители, комплектующие для матрасов,
          швейное оборудование, упаковка для текстиля, домашний и гостиничный текстиль.
        </p>
        <p className="measure mt-4">
          С 2011 года — официальный представитель компании «Фортекс», комплектующие для
          ортопедических матрасов.
        </p>
      </section>

      {/* Каталог: девять разделов строками во всю ширину */}
      <section id="katalog" className="shell section-y border-t border-foreground/20">
        <h2 className="h2-display">Каталог</h2>
        <div className="mt-10">
          {CATALOG.map((c) => (
            <a
              key={c.title}
              href="#zaglushka"
              className="group grid grid-cols-1 items-center gap-2 border-b border-foreground/20 py-6 first:border-t hover:text-accent md:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] md:gap-10"
            >
              <div className="min-w-0">
                <h3 className="text-[17px] font-semibold md:text-lg">{c.title}</h3>
                <p className="tech-line mt-1 opacity-70">{c.subs}</p>
              </div>
              {c.cm > 0 ? (
                <WidthBar cm={c.cm} label={`Ш-${c.cm} см`} />
              ) : (
                <span className="tech-line opacity-50">—</span>
              )}
            </a>
          ))}
        </div>

        {/* Подбор по задаче */}
        <div className="mt-16 border-t-2 border-foreground pt-8">
          <h3 className="text-xl font-semibold md:text-2xl">Подбор по задаче</h3>
          <div className="mt-6 grid grid-cols-1 gap-px bg-foreground/20 sm:grid-cols-2 lg:grid-cols-3">
            {TASKS.map((t) => (
              <a key={t} href="#zapros" className="block bg-background p-5 hover:text-accent">
                <p className="text-[15px] font-semibold md:text-base">{t}</p>
              </a>
            ))}
          </div>
        </div>

        {/* Карточки товара: цена по запросу, как на их сайте */}
        <p className="tech-line mt-16 opacity-70">Актуальные цены и наличие по запросу</p>
        <div className="mt-4 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {PRODUCTS.map((p) => (
            <article key={p.name} className="rounded-sm bg-card p-5 text-card-foreground">
              <img
                src={`/images/tovar-${p.name
                  .toLowerCase()
                  .replace(/[^а-яё0-9]+/gi, "-")
                  .replace(/^-|-$/g, "")}.jpg`}
                alt={p.name}
                className="mb-4 aspect-[4/3] w-full rounded-sm object-cover"
                loading="lazy"
              />
              <h4 className="text-[17px] font-semibold leading-snug">{p.name}</h4>
              <p className="tech-line mt-2 text-muted-foreground">{p.tech}</p>
              <div className="mt-5 flex items-center justify-between gap-3">
                <p className="text-[15px] font-semibold">Цена по запросу</p>
                <a
                  href="#zapros"
                  className="shrink-0 rounded-sm border border-foreground px-4 py-2 text-[15px] font-semibold hover:bg-accent hover:text-accent-foreground"
                >
                  Узнать цену
                </a>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Услуги: три горизонтальные полосы во всю ширину */}
      <section id="uslugi" className="shell section-y border-t border-foreground/20">
        <p className="h2-display">Мы не только продаём ткань — мы шьём</p>
        <div className="mt-12">
          {SERVICES.map((s) => (
            <article
              key={s.title}
              className="grid grid-cols-1 gap-6 border-b border-foreground/20 py-10 first:border-t md:grid-cols-[minmax(0,1fr)_minmax(0,1.4fr)] md:gap-10"
            >
              <img
                src={`/images/usluga-${s.img}.jpg`}
                alt={s.title}
                className="aspect-[2/1] w-full rounded-sm object-cover"
                loading="lazy"
              />
              <div className="min-w-0">
                <h3 className="text-xl font-semibold md:text-2xl">{s.title}</h3>
                <p className="measure mt-4">{s.text}</p>
                <p className="tech-line mt-4 text-muted-foreground">{s.tech}</p>
                <a
                  href="#zapros"
                  className="mt-6 inline-block rounded-sm bg-accent px-6 py-3 font-semibold text-accent-foreground"
                >
                  Обсудить заказ
                </a>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Подбор по ширине */}
      <section className="shell section-y border-t border-foreground/20">
        <h2 className="h2-display">Подбор по ширине рулона</h2>
        <p className="measure mt-4">
          Первый вопрос при раскладке — влезет ли ткань. Задайте нужную ширину, и мы пришлём
          подходящие позиции со склада.
        </p>
        <div className="mt-10 max-w-3xl">
          <p className="tech-line mb-4">нужна ткань шире {minWidth} см</p>
          <input
            type="range"
            min={0}
            max={330}
            step={5}
            value={minWidth}
            onChange={(e) => setMinWidth(Number(e.target.value))}
            aria-label="Минимальная ширина ткани, см"
            className="w-full accent-[var(--accent)]"
          />
          <WidthRuler className="mt-2" />
        </div>
      </section>

      {/* Оптовикам: правила отпуска товаром — таблица без карточек */}
      <section id="optovikam" className="shell section-y border-t border-foreground/20">
        <h2 className="h2-display">Оптовикам</h2>
        <div className="mt-10">
          <div className="tech-line grid grid-cols-[minmax(0,1.2fr)_minmax(0,1fr)] gap-4 border-b border-foreground pb-2 font-semibold">
            <span>Условие</span>
            <span>Значение</span>
          </div>
          {OPTOVIE.map((r) => (
            <div
              key={r.cond}
              className="grid grid-cols-[minmax(0,1.2fr)_minmax(0,1fr)] gap-4 border-b border-foreground/20 py-3"
            >
              <span className="min-w-0">{r.cond}</span>
              <span className="min-w-0">{r.val}</span>
            </div>
          ))}
        </div>
        <p className="mt-6">
          Нужен меньший метраж — наш розничный магазин{" "}
          <a href="https://lubodom.com" className="underline underline-offset-4">
            Любодом, lubodom.com
          </a>
        </p>
      </section>

      {/* Доставка одной строкой */}
      <section id="dostavka" className="shell section-y border-t border-foreground/20">
        <h2 className="h2-display">Доставка</h2>
        <p className="measure mt-6">{DELIVERY}</p>
      </section>

      {/* Заявка: форма, рядом телефоны и режим работы */}
      <section id="zapros" className="shell section-y border-t border-foreground/20">
        <p className="h2-display">Пришлём прайс и наличие, подберём ткань под изделие</p>
        <div className="mt-12 grid grid-cols-1 gap-12 md:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)] md:gap-16">
          <form onSubmit={(e) => e.preventDefault()} className="min-w-0 space-y-5">
            <label className="block">
              <span className="tech-line">Что нужно</span>
              <textarea
                name="what"
                rows={3}
                className="mt-2 w-full rounded-sm border border-foreground/40 bg-card px-3 py-2 text-[15px] outline-none focus:border-accent"
              />
            </label>
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
              <label className="block">
                <span className="tech-line">Имя</span>
                <input
                  type="text"
                  name="name"
                  className="mt-2 w-full rounded-sm border border-foreground/40 bg-card px-3 py-2 text-[15px] outline-none focus:border-accent"
                />
              </label>
              <label className="block">
                <span className="tech-line">Телефон</span>
                <input
                  type="tel"
                  name="phone"
                  className="mt-2 w-full rounded-sm border border-foreground/40 bg-card px-3 py-2 text-[15px] outline-none focus:border-accent"
                />
              </label>
            </div>
            <label className="block">
              <span className="tech-line">E-mail</span>
              <input
                type="email"
                name="email"
                className="mt-2 w-full rounded-sm border border-foreground/40 bg-card px-3 py-2 text-[15px] outline-none focus:border-accent"
              />
            </label>
            <label className="flex items-start gap-3 text-[15px]">
              <input type="checkbox" name="consent" required className="mt-1 accent-[var(--accent)]" />
              <span>
                Согласен на обработку персональных данных согласно{" "}
                <a href="#privacy" className="underline underline-offset-4">
                  политике конфиденциальности
                </a>
              </span>
            </label>
            <button
              type="submit"
              className="rounded-sm bg-accent px-6 py-3 font-semibold text-accent-foreground"
            >
              Отправить заявку
            </button>
          </form>

          <div className="tech-line space-y-4">
            <div className="space-y-2">
              <p>
                <a href="tel:+78632732350">+7 (863) 273-23-50</a> — склад, многоканальный
              </p>
              <p>
                <a href="tel:88007004475">8-800-700-44-75</a> — бесплатный по России
              </p>
              <p>
                <a href="tel:+79182730095">+7 918 273-00-95</a> — Viber и WhatsApp
              </p>
            </div>
            <div className="space-y-2">
              <p>Пн–Пт 9:30–17:30</p>
              <p>Сб 10:00–16:00</p>
              <p>Вс — выходной</p>
            </div>
          </div>
        </div>
      </section>

      {/* Подвал */}
      <footer className="border-t border-foreground/20">
        <div className="shell grid grid-cols-1 gap-10 py-14 md:grid-cols-2 lg:grid-cols-4 lg:py-20">
          <div>
            <p className="font-display text-lg">Текстиль-Сити</p>
            <p className="mt-4 text-[15px]">
              344064, Ростов-на-Дону, пер. Технологический, 4 (вход с ул. Вавилова, 56)
            </p>
          </div>
          <div className="tech-line space-y-2">
            <p>
              <a href="tel:+78632732350">+7 (863) 273-23-50</a> — склад, многоканальный
            </p>
            <p>
              <a href="tel:88007004475">8-800-700-44-75</a> — бесплатный по России
            </p>
            <p>
              <a href="tel:+79182730095">+7 918 273-00-95</a> — Viber и WhatsApp
            </p>
            <p>
              <a href="mailto:info@textileopt.ru">info@textileopt.ru</a>
            </p>
            <p>
              <a href="mailto:textil-city@yandex.ru">textil-city@yandex.ru</a>
            </p>
          </div>
          <div className="tech-line space-y-2">
            <p>Пн–Пт 9:30–17:30</p>
            <p>Сб 10:00–16:00</p>
            <p>Вс — выходной</p>
          </div>
          <div className="tech-line space-y-2 text-muted-foreground">
            <p>ИП Костанова Татьяна Николаевна</p>
            <p>ИНН 616112762674</p>
            <p>ОГРНИП 309619317300075</p>
            <p>
              <a href="#zaglushka" className="underline underline-offset-4">
                Политика конфиденциальности
              </a>
            </p>
          </div>
        </div>
        <div className="shell border-t border-foreground/20 py-6">
          <p className="tech-line">
            Розничный магазин — Любодом,{" "}
            <a href="https://lubodom.com" className="underline underline-offset-4">
              lubodom.com
            </a>
          </p>
        </div>
      </footer>
    </div>
  );
}
