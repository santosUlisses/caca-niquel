import React, { useEffect, useState } from 'react'
import { BiLogoReact, BiSolidTrophy } from 'react-icons/bi';
import { GiAk47U, GiAnglerFish, GiFullMotorcycleHelmet, GiHemp } from "react-icons/gi";
import { IoMdRemove, IoIosAdd } from "react-icons/io";

export const Game = () => {

    const emogi = [<BiSolidTrophy color='gold' />, <BiLogoReact className='reacticone' color='orange' />, <GiAk47U color='grey' />, <GiFullMotorcycleHelmet color='red' />, <GiAnglerFish color='blue' />, <GiHemp color='green' />];
    let contEmogi = emogi.length;

    const [saldo, setSaldo] = useState(0);
    const [aposta, setAposta] = useState(1);
    const [ganho, setGanho] = useState();


    const [n, setN] = useState(5);
    const [c, setC] = useState(5);
    const [d, setD] = useState(5);
    const [e, setE] = useState(2);
    const [f, setF] = useState(2);
    const [g, setG] = useState(2);
    const [h, setH] = useState(3);
    const [i, setI] = useState(3);
    const [j, setJ] = useState(3);

    const [exibirLinha, setExibirLinha] = useState(false);
    const [exibirLinha2, setExibirLinha2] = useState(false);
    const [exibirLinha3, setExibirLinha3] = useState(false);
    const [exibirLinha4, setExibirLinha4] = useState(false);
    const [exibirLinha5, setExibirLinha5] = useState(false);
    const [exibirLinha6, setExibirLinha6] = useState(false);
    const [mensagem, setMensagem] = useState(false);
    const [erro, setErro] = useState(false);


    const diminuir = () => {
        if (aposta > 0) {
            setAposta(aposta - 5);
        }
    }

    const aumentar = () => {
        if (saldo > aposta) {
            setAposta(aposta + 5);
        }
    }


    const ganhos = [5000, 1000, 500, 250, 100, 50];
    const validarGanhos = (a, b, c) => {
        if (a === b && b === c) {
            let newGanho = ganhos[a] * aposta;
            setSaldo(saldo + newGanho);
            setGanho(newGanho);
        }
        return saldo, ganho
    }

    const gerar = () => {
        if (saldo >= aposta && aposta > 0) {
            setSaldo(saldo - aposta);
            setN(() => Math.floor(Math.random() * contEmogi));
            setC(() => Math.floor(Math.random() * contEmogi));
            setD(() => Math.floor(Math.random() * contEmogi));
            setE(() => Math.floor(Math.random() * contEmogi));
            setF(() => Math.floor(Math.random() * contEmogi));
            setG(() => Math.floor(Math.random() * contEmogi));
            setH(() => Math.floor(Math.random() * contEmogi));
            setI(() => Math.floor(Math.random() * contEmogi));
            setJ(() => Math.floor(Math.random() * contEmogi));
        } else {
            const msg = setTimeout(() => {
                setErro(true);
            }, 1000);
            return () => {
                setErro(false);
                clearTimeout(msg);
            }

        }

    }

    const validarLinhas = (a, b, c, setExibirLinha, setMensagem, validarGanhos) => {
        if (a === b && b === c) {
            setExibirLinha(true);
            setMensagem(true);
            validarGanhos(a, b, c);
            const linha = setTimeout(() => {
                setExibirLinha(false);
                setMensagem(false);
            }, 1000);
            return () => {
                clearTimeout(linha);
            };
        }
    }


    useEffect(() => {
        return validarLinhas(n, c, d, setExibirLinha, setMensagem, validarGanhos);
    }, [n, c, d, e, f, g, h, i, j]);

    useEffect(() => {
        return validarLinhas(e, f, g, setExibirLinha2, setMensagem, validarGanhos);
    }, [n, c, d, e, f, g, h, i, j]);

    useEffect(() => {
        return validarLinhas(h, i, j, setExibirLinha3, setMensagem, validarGanhos);
    }, [n, c, d, e, f, g, h, i, j]);


    useEffect(() => {
        return validarLinhas(n, e, h, setExibirLinha4, setMensagem, validarGanhos);
    }, [n, c, d, e, f, g, h, i, j]);


    useEffect(() => {
        return validarLinhas(c, f, i, setExibirLinha5, setMensagem, validarGanhos);
    }, [n, c, d, e, f, g, h, i, j]);


    useEffect(() => {
        return validarLinhas(d, g, j, setExibirLinha6, setMensagem, validarGanhos);
    }, [n, c, d, e, f, g, h, i, j]);




    return (
        <div className='container'>


            <h2 className='boaSorte' id='p'>BOA SORTE</h2>



            {mensagem && <div className="mensagem"><p>PARABÉNS VOCÊ GANHOU R$ {ganho}</p></div>}
            {erro && <div className='error'><p>SALDO INSUFICIENTE</p></div>}

            <div className="game">

                <div className="game1">
                    <p>{emogi[n]}</p>
                    <p>{emogi[c]}</p>
                    <p>{emogi[d]}</p>
                </div>
                <div className="game2">
                    <p>{emogi[e]}</p>
                    <p>{emogi[f]}</p>
                    <p>{emogi[g]}</p>
                </div>
                <div className="game3">
                    <p>{emogi[h]}</p>
                    <p>{emogi[i]}</p>
                    <p>{emogi[j]}</p>
                </div>
            </div>

            <div className="saldo">Saldo  R$ {saldo}</div>


            <div className="aposta">Valor da aposta <button onClick={diminuir}><IoMdRemove /></button> {aposta}  <button onClick={aumentar}><IoIosAdd /></button></div>

            {exibirLinha && <div className="linha"></div>}
            {exibirLinha2 && <div className="linha2"></div>}
            {exibirLinha3 && <div className="linha3"></div>}
            {exibirLinha4 && <div className="linha4"></div>}
            {exibirLinha5 && <div className="linha5"></div>}
            {exibirLinha6 && <div className="linha6"></div>}


            <button onClick={gerar} className='girar'>GIRAR</button>


            <div className="premios">

                <div className="box">
                    <div className="icones1">
                        <p><BiSolidTrophy color='gold' />  x5000</p>
                        <p><BiLogoReact className='reacticone' color='orange' /> x1000</p>
                        <p><GiAk47U color='grey' />  x500</p>
                        <p><GiFullMotorcycleHelmet color='red' />  x250</p>
                        <p><GiAnglerFish color='blue' /> x100</p>
                        <p><GiHemp color='green' />  x50</p>
                    </div>
                </div>
            </div>
            <h3 className='listaPremios'>Lista de prêmios</h3>
        </div>


    );
}

export default Game