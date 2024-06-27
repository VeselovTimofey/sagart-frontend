import type { IFooterLinkGroup } from '../../elements/FooterLinkGroup/ui/index';

interface IFooterLinkGroups extends Array<IFooterLinkGroup> {}

const FOOTERLINKGROUPS: IFooterLinkGroups = [
  {
    name: 'КАТАЛОГ',
    links: [
      { name: 'Авторы', link: '#' },
      { name: 'Живопись', link: '#' },
      { name: 'Графика', link: '#' },
      { name: 'Digital', link: '#' },
      { name: 'Инвестируй в искусство', link: '#' },
    ],
  },
  {
    name: 'ПОКУПАТЕЛЯМ',
    links: [
      { name: 'Личный кабинет', link: '#' },
      { name: 'Доставка и оплата', link: '#' },
      { name: 'Возврат', link: '#' },
      { name: 'Сертификаты', link: '#' },
      { name: 'Подписка', link: '#' },
    ],
  },
  {
    name: 'ПОДДЕРЖКА',
    links: [
      { name: 'Справочный цент', link: '#' },
      { name: 'Контакты', link: '#' },
      { name: 'Условия продажи', link: '#' },
      { name: 'Вопрос-ответ', link: '#' },
    ],
  },
  {
    name: 'КОМПАНИЯ',
    links: [
      { name: 'О нас', link: '#' },
      { name: 'Пользовательское соглашение', link: '#' },
      { name: 'Политика использования cookies-файлов', link: '#' },
      { name: 'Политика обработки персональных данных', link: '#' },
    ],
  },
];

export default FOOTERLINKGROUPS;
