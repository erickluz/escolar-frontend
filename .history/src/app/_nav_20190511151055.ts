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
    url: '/cadastro/lista-alunos',
    icon: 'icon-person'
  },
  {
    name: 'Professores',
    url: '/cadastro/lista-professores',
    icon: 'icon-teacher'
  },
  {
    name: 'Disciplinas',
    url: '/cadastro/lista-disciplina',
    icon: 'icon-school'
  }
];