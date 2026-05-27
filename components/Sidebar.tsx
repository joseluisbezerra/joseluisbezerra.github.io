'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  VscAccount,
  VscSettings,
  VscMail,
  VscGithubAlt,
  VscCode,
  VscFiles,
  VscEdit,
} from 'react-icons/vsc';

import styles from '@/styles/Sidebar.module.css';

const sidebarTopItems = [
  { Icon: VscFiles, path: '/' },
  { Icon: VscGithubAlt, path: '/github' },
  { Icon: VscCode, path: '/projects' },
  { Icon: VscMail, path: '/contact' },
];

const sidebarBottomItems = [
  { Icon: VscAccount, path: '/about' },
  { Icon: VscSettings, path: '/settings' },
];

const Sidebar = () => {
  const pathname = usePathname();
  const normalizePath = (value: string) =>
    value.length > 1 && value.endsWith('/') ? value.slice(0, -1) : value;
  const isActive = (path: string) => normalizePath(pathname) === normalizePath(path);

  return (
    <aside className={styles.sidebar}>
      <div className={styles.sidebarTop}>
        {sidebarTopItems.map(({ Icon, path }) => (
          <Link href={path} key={path}>
            <div
              className={`${styles.iconContainer} ${
                isActive(path) ? styles.active : ''
              }`}
            >
              <Icon
                size={16}
                fill={
                  isActive(path)
                    ? 'rgb(225, 228, 232)'
                    : 'rgb(106, 115, 125)'
                }
                className={styles.icon}
              />
            </div>
          </Link>
        ))}
      </div>
      <div className={styles.sidebarBottom}>
        {sidebarBottomItems.map(({ Icon, path }) => (
          <div className={styles.iconContainer} key={path}>
            <Link href={path}>
              <Icon
                fill={
                  isActive(path)
                    ? 'rgb(225, 228, 232)'
                    : 'rgb(106, 115, 125)'
                }
                className={styles.icon}
              />
            </Link>
          </div>
        ))}
      </div>
    </aside>
  );
};

export default Sidebar;
