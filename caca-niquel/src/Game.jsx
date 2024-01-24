import React, { useEffect, useState } from 'react'
import { BiLogoReact, BiSolidMedal, BiSolidTrophy } from 'react-icons/bi';
import { GiAk47U, GiAnglerFish, GiFullMotorcycleHelmet, GiHemp } from "react-icons/gi";
import { IoMdRemove, IoIosAdd } from "react-icons/io";

export const Game = () => {

    const emogi = [<BiSolidTrophy color='gold' />, <BiLogoReact className='reacticone' color='orange' />, <GiAk47U color='grey' />, <GiFullMotorcycleHelmet color='red' />, <GiAnglerFish color='blue' />, <GiHemp color='green' />];
    let contEmogi = emogi.length;

    const [saldo, setSaldo] = useState(20000);
    const [aposta, setAposta] = useState(1);
    const [ganho, setGanho] = useState();


    const diminuir = () => {
        if (aposta > 0) {
            setAposta(aposta - 5);
        }
    }

    const aumentar = () => {
        setAposta(aposta + 5);
    }

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


    const exibirGanho = (a, b, c) => {

        if (a === 0 && b === 0 && c === 0) {
            setSaldo((prevSaldo) => {
                const novoGanho = aposta * 5000;
                prevSaldo + aposta * 5000;
                setGanho(ganho + novoGanho);
                return saldo + novoGanho
            });
        }
        else if (a === 1 && b === 1 && c === 1) {
            setSaldo((prevSaldo) => {
                const novoGanho = aposta * 1000;
                prevSaldo + aposta * 1000;
                setGanho(novoGanho);
                return saldo + novoGanho
            });
        }
        else if (a === 2 && b === 2 && c === 2) {
            setSaldo((prevSaldo) => {
                const novoGanho = aposta * 500;
                prevSaldo + aposta * 500;
                setGanho(novoGanho);
                return saldo + novoGanho
            });
        }
        else if (a === 3 && b === 3 && c === 3) {
            setSaldo((prevSaldo) => {
                const novoGanho = aposta * 250;
                prevSaldo + aposta * 250;
                setGanho(novoGanho);
                return saldo + novoGanho
            });
        }
        else if (a === 4 && b === 4 && c === 4) {
            setSaldo((prevSaldo) => {
                const novoGanho = aposta * 100;
                prevSaldo + aposta * 100;
                setGanho(novoGanho);
                return saldo + novoGanho
            });
        }
        else if (a === 5 && b === 5 && c === 5) {
            setSaldo((prevSaldo) => {
                const novoGanho = aposta * 50;
                prevSaldo + aposta * 50;
                setGanho(novoGanho);
                return saldo + novoGanho
            });
        }

    }

    const gerar = () => {
        if (saldo >= aposta) {
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
            const clearMsg = () => {
                setErro(false);
                clearTimeout(msg);
            }
            return clearMsg;
        }

    }


    useEffect(() => {
        if (n === c && c === d) {

            setExibirLinha(true);
            setMensagem(true);

            exibirGanho(n, c, d);

            const linha = setTimeout(() => {
                setExibirLinha(false);
                setMensagem(false);
            }, 1000);


            return () => {
                clearTimeout(linha);
            };
        }
    }, [n, c, d, e, f, g, h, i, j]);


    useEffect(() => {
        if (e === f && f === g) {

            setExibirLinha2(true);
            setMensagem(true);
            
            exibirGanho(e,f,g);

            const linha = setTimeout(() => {
                setExibirLinha2(false);
                setMensagem(false);
            }, 1000);

            return () => {
                clearTimeout(linha);
            };

        }
    }, [n, c, d, e, f, g, h, i, j]);

    useEffect(() => {
        if (h === i && i === j) {

            setExibirLinha3(true);
            setMensagem(true);

            exibirGanho(h,i,j);

            const linha = setTimeout(() => {
                setExibirLinha3(false);
                setMensagem(false);
            }, 1000);

            return () => {
                clearTimeout(linha);
            };
        }
    }, [n, c, d, e, f, g, h, i, j]);


    useEffect(() => {
        if (n === e && e === h) {

            setExibirLinha4(true);
            setMensagem(true);

           exibirGanho(n,e,h);

            const linha = setTimeout(() => {
                setExibirLinha4(false);
                setMensagem(false);
            }, 1000);

            return () => {
                clearTimeout(linha);
            };
        }
    }, [n, c, d, e, f, g, h, i, j]);


    useEffect(() => {
        if (c === f && f === i) {

            setExibirLinha5(true);
            setMensagem(true);

            exibirGanho(c,f,i);

            const linha = setTimeout(() => {
                setExibirLinha5(false);
                setMensagem(false);
            }, 1000);

            return () => {
                clearTimeout(linha);
            };
        }
    }, [n, c, d, e, f, g, h, i, j]);


    useEffect(() => {
        if (d === g && g === j) {

            setExibirLinha6(true);
            setMensagem(true);

            exibirGanho(d,g,j);

            const linha = setTimeout(() => {
                setExibirLinha6(false);
                setMensagem(false);
            }, 1000);

            return () => {
                clearTimeout(linha);
            };
        }
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