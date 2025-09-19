'use client';
import { useState } from "react";
import styles from './login.module.css';
import Image from "next/image";
import imgMulherPc from '../../assets/imgs/mulher-pc-login.png';
import H1Titulo from "@/components/H1Titulo/H1Titulo";
import H2Subtitulo from "@/components/H2Subtitulo/H2Subtitulo";
import CompoDeDigitacao from "@/components/CampoDigitacao/CampoDigitacao";
import Container from "@/components/ContainerFlex/ContainerFlex";
import Button from "@/components/Button/Button";
import CheckBox from '@/components/CheckBox/CheckBox';
import Link from 'next/link';
import Texto from '@/components/Texto/Texto';
import ItemRedesSociais from '@/components/ItemRedesSociais/ItemRedesSociais';
import imgGithub from '../../assets/github.svg';
import imgGoogle from '../../assets/google.svg';

export default function PageLogin() {
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    //=========================================================
    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        console.log('E-Mail: ', email, '\n', 'Senha: ', senha);
        setEmail('');
        setSenha('');
    };
    //=========================================================
    return (
        <Container className={styles['container-login']}>
            <Image src={imgMulherPc} alt="Mulher de óculos no pc" width={407} height={636} priority={true} />
            <section>
                <form onSubmit={handleSubmit}>
                    <H1Titulo className={styles['form__titulo']}>Login</H1Titulo>
                    <H2Subtitulo className={styles['form__texto']}>Boas-Vindas! Faça seu Login!</H2Subtitulo>
                    <CompoDeDigitacao
                        id="1"
                        htmlFor='1'
                        label="E-mail ou Usuário"
                        tipo="email"
                        placeholder="Digite seu e-mail ou Usuário"
                        required
                        valor={email}
                        setvalor={setEmail}
                    />
                    <CompoDeDigitacao
                        id="2"
                        htmlFor='2'
                        label="Senha"
                        tipo="password"
                        placeholder="Digite sua senha"
                        required
                        valor={senha}
                        setvalor={setSenha}
                    />
                    <fieldset className={styles.form__opcoes}>
                        <CheckBox/>
                        <p>
                            <Link href='#' aria-label='Recuperar senha esquecida'>Esqueci a senha</Link>
                        </p>
                    </fieldset>
                    <Button type="submit" className={styles.form__botao}>Login</Button>
                </form>
                <div className={styles['container-links']}>
                    <Texto classe={styles['container-links__titulo']}>Ou entre com outras contas</Texto>
                    <ul>
                        <ItemRedesSociais link='https://www.github.com' imgSrc={imgGithub} nome='GitHub' />
                        <ItemRedesSociais link='https://www.google.com.br' imgSrc={imgGoogle} nome='Google' />
                    </ul>
                    <Texto classe={styles['container-links__link']}>Ainda não tem conta?</Texto>
                </div>
            </section>
        </Container>
    );
};
