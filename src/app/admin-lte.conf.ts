export const adminLteConf = {
  skin: 'red',
  // isSidebarLeftCollapsed: false,
  // isSidebarLeftExpandOnOver: false,
  // isSidebarLeftMouseOver: false,
  // isSidebarLeftMini: true,
  // sidebarRightSkin: 'dark',
  // isSidebarRightCollapsed: true,
  // isSidebarRightOverContent: true,
  // layout: 'normal',
  sidebarLeftMenu: [
    {label: 'Navegação', separator: true},
    {label: 'HOME', route: '/', iconClasses: 'fa fa-school'},
    {label: 'Cursos', route: 'cursos', iconClasses: 'fa fa-th-list', children: [
        {label: 'Disciplinas', route: 'disciplinas'},
        {label: 'Turmas', route: 'turmas'},
        {label: 'Aulas', route: 'aulas'},
      ]},
    {label: 'Alunos', route: 'alunos', iconClasses: 'fa fa-male'},
    {label: 'Professores', route: 'professores', iconClasses: 'fa fa-graduation-cap'},
  ]
};