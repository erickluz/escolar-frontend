interface NavAttributes {
  [propName: string]: any;
}
interface NavWrapper {
  attributes: NavAttributes;
  element: string;
}
interface NavBadge {
  text: string;
  variant: string;
}
interface NavLabel {
  class?: string;
  variant: string;
}

export interface NavData {
  name?: string;
  url?: string;
  icon?: string;
  badge?: NavBadge;
  title?: boolean;
  children?: NavData[];
  variant?: string;
  attributes?: NavAttributes;
  divider?: boolean;
  class?: string;
  label?: NavLabel;
  wrapper?: NavWrapper;
}

export const navItems: NavData[] = [
  {
    name: 'Home',
    url: '/home',
    icon: 'icon-home',   
  },
  {
    title: true,
    name: 'Cadastros'
  },
  {
    name: 'Alunos',
    url: '/cadastro/alunos',
    icon: 'icon-drop'
  },
  {
    name: 'Professores',
    url: '/cadastro/professores',
    icon: 'icon-pencil'
  },
  {
    name: 'Disciplinas',
    url: '/theme/typography',
    icon: 'icon-pencil'
  }
];
