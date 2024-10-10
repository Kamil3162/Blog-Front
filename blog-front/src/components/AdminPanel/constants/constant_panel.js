import monitor from '../../../assets/admin_icons/monitor.png';
import table from '../../../assets/admin_icons/table.png';
import categories from '../../../assets/icons/categories.png';
import user from '../../../assets/admin_icons/user.png';
import enter from '../../../assets/admin_icons/enter.png';
import power_off from '../../../assets/admin_icons/power-off.png';
import money from '../../../assets/icons/money-bag.png';
import group from '../../../assets/icons/group.png';
import view from '../../../assets/icons/view.png';


export const PANEL_ITEMS = [
    { icon: monitor, text: 'Dashboard' },
    { icon: table, text: 'Table' },
    { icon: categories, text: 'Categories' },
];

export const ACCOUNT_ITEMS = [
    { icon: user, text: 'Register' },
    { icon: enter, text: 'Login' },
    { icon: power_off, text: 'Logout' },
];

export const DASHBOARD_INFO = [
    { title: 'Money', value: '$54,000', icon: money },
    { title: 'Users', value: '321', icon: group },
    { title: 'Views', value: '4,000', icon: view },
];