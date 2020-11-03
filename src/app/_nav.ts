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

// app-sidebar-nav-link
export const navItems: NavData[] = [
  // {
  //   name: 'Menu cấp 2',
  //   url: '/admin/base',
  //   icon: 'icon-puzzle',
  //   divider: false,
  //   children: [
  //     {
  //       name: 'menu câp 3',
  //       url: '/admin/base/cards',
  //       icon: 'icon-puzzle'
  //     }
  //   ]
  // },
  // {
  //   name: 'menu cấp 2',
  //   url: '/admin/buttons',
  //   icon: 'icon-cursor',
  //   divider: false,
  //   children: [
  //     {
  //       name: 'menu cấp 2.1',
  //       url: '/admin/buttons/buttons',
  //       icon: 'icon-cursor'
  //     },
  //     {
  //       name: 'menu cấp 2.3',
  //       url: '/admin/buttons/dropdowns',
  //       icon: 'icon-cursor'
  //     }
  //   ]
  // },
  // {
  //   name: 'Disabled',
  //   url: '/admin/dashboard',
  //   icon: 'icon-ban',
  //   badge: {
  //     variant: 'secondary',
  //     text: 'FPT'
  //   },
  //   attributes: { disabled: true },
  // },
  {
    name: 'Quản lý',
    url: '/default',
    icon: 'icon-speedometer',
    children: [
      {
        name: 'Quản lý người dùng',
        url: '/default/admin',
        icon: 'icon-cursor'
      },
      {
        name: 'Quản lý khách hàng',
        url: '/default/client',
        icon: 'icon-cursor'
      }
    ]
  }
];



