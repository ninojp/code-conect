'use client';
import styles from './MenuLateral.module.css';
import Image from "next/image";
import IconFeed from './feed.svg';
import IconAccount from './account.svg';
import IconInfo from './info.svg';
import IconLogout from './logout.svg';
import Link from "next/link";
import Button from '../Button/Button';

export default function MenuLateral() {
    return (
        <nav>
            <ul className={styles.ulContainerMenu}>
                <li>
                    <Button>Publicar</Button>
                </li>
                <li>
                    <Link href='/' className={`${styles.liMenuLink} ${styles.liMenuLinkAtivo}`}>
                        <Image className={styles.icon} src={IconFeed} alt='ícone Feed' width={32} height={32} style={{ color: '#81FE88' }} />
                        {/* <IconFeed className={styles.icon} role="img" aria-label="ícone Feed" /> */}
                        <span>Feed</span>
                    </Link>
                </li>
                <li>
                    <Link href='/login/' className={styles.liMenuLink}>
                        <Image src={IconAccount} alt='ícone Perfil' width={32} height={32} />
                        {/* <IconAccount className={styles.icon} role="img" aria-label="ícone Perfil" /> */}
                        <span>Login/Perfil</span>
                    </Link>
                </li>
                <li>
                    <Link href='#' className={styles.liMenuLink}>
                        <Image src={IconInfo} alt='ícone Informações' width={32} height={32} />
                        {/* <IconInfo className={styles.icon} role="img" aria-label="ícone Informações" /> */}
                        <span>Sobre nós</span>
                    </Link>
                </li>
                <li>
                    <Link href='#' className={styles.liMenuLink}>
                        <Image src={IconLogout} alt='ícone Logout' width={32} height={32} />
                        {/* <IconLogout className={styles.icon} role="img" aria-label="ícone Logout" /> */}
                        <span>Sair</span>
                    </Link>
                </li>
            </ul>
        </nav>
    );
};

//PROBLEMAS COM SVG E NEXTJS
//1 - instalar o svgr: npm install @svgr/webpack --save-dev
//2 - configurar o next.config.js (ou .mjs) para usar o svgr
//   webpack(config) {
//     config.module.rules.push({
//       test: /\.svg$/i,
//       issuer: /\.[jt]sx?$/,
//       use: ['@svgr/webpack'],
//     });
//     return config;
//   },
//3 - criar ou ajustar o arquivo de tipagens para reconhecer importações de SVG como componentes React
// SVG.D.TS
// declare module '*.svg' {
//   import * as React from 'react';
//   const ReactComponent: React.FunctionComponent<
//     React.SVGProps<SVGSVGElement> & { title?: string }
//   >;
//   export default ReactComponent;
// }
//4 - ajustar o CSS para controlar a cor do SVG via CSS
