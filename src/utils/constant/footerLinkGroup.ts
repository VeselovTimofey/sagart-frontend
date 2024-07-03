import type { IFooterLinkGroup } from '../../elements/FooterLinkGroup/ui/index';
import { PREFIXPATH } from './routes';

interface IFooterLinkGroups extends Array<IFooterLinkGroup> {}

const FOOTERLINKGROUPS: IFooterLinkGroups = [
  {
    name: 'КАТАЛОГ',
    links: [
      { name: 'Авторы', link: PREFIXPATH },
      { name: 'Живопись', link: PREFIXPATH },
      { name: 'Графика', link: PREFIXPATH },
      { name: 'Digital', link: PREFIXPATH },
      { name: 'Инвестируй в искусство', link: PREFIXPATH },
    ],
  },
  {
    name: 'ПОКУПАТЕЛЯМ',
    links: [
      { name: 'Личный кабинет', link: PREFIXPATH },
      { name: 'Доставка и оплата', link: PREFIXPATH },
      { name: 'Возврат', link: PREFIXPATH },
      { name: 'Сертификаты', link: PREFIXPATH },
      { name: 'Подписка', link: PREFIXPATH },
    ],
  },
  {
    name: 'ПОДДЕРЖКА',
    links: [
      { name: 'Справочный цент', link: PREFIXPATH },
      { name: 'Контакты', link: PREFIXPATH },
      { name: 'Условия продажи', link: PREFIXPATH },
      { name: 'Вопрос-ответ', link: PREFIXPATH },
    ],
  },
  {
    name: 'КОМПАНИЯ',
    links: [
      { name: 'О нас', link: PREFIXPATH },
      { name: 'Пользовательское соглашение', link: PREFIXPATH },
      { name: 'Политика использования cookies-файлов', link: PREFIXPATH },
      { name: 'Политика обработки персональных данных', link: PREFIXPATH },
    ],
  },
];

export default FOOTERLINKGROUPS;
