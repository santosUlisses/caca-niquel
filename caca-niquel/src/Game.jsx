import React, { useEffect, useState } from 'react'
import { BiLogoReact, BiSolidMedal, BiSolidTrophy } from 'react-icons/bi';
import { GiAk47U, GiAnglerFish, GiFullMotorcycleHelmet, GiHemp } from "react-icons/gi";
import { IoMdRemove, IoIosAdd } from "react-icons/io";

export const Game = () => {

    const emogi = [<BiSolidTrophy color='gold' />, <BiLogoReact className='reacticone' color='orange' />, <GiAk47U color='grey' />, <GiAnglerFish color='blue' />, <GiFullMotorcycleHelmet color='red' />, <GiHemp color='green' />];
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

    const [n, setN] = useState(4);
    const [c, setC] = useState(4);
    const [d, setD] = useState(4);
    const [e, setE] = useState(4);
    const [f, setF] = useState(4);
    const [g, setG] = useState(4);
    const [h, setH] = useState(4);
    const [i, setI] = useState(4);
    const [j, setJ] = useState(4);

    const [exibirLinha, setExibirLinha] = useState(false);
    const [exibirLinha2, setExibirLinha2] = useState(false);
    const [exibirLinha3, setExibirLinha3] = useState(false);
    const [exibirLinha4, setExibirLinha4] = useState(false);
    const [exibirLinha5, setExibirLinha5] = useState(false);
    const [exibirLinha6, setExibirLinha6] = useState(false);
    const [mensagem, setMensagem] = useState(false);
    const [erro, setErro] = useState(false);

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


        if (n === 0 && c === 0 && d === 0) {
            setSaldo((prevSaldo) => {
                const novoGanho = aposta * 5000;
                prevSaldo + aposta * 5000;
                setGanho(ganho + novoGanho);
                return saldo + novoGanho
            });
        }
        else if (n === 1 && c === 1 && d === 1) {
            setSaldo((prevSaldo) => {
                const novoGanho = aposta * 1000;
                prevSaldo + aposta * 1000;
                setGanho(novoGanho);
                return saldo + novoGanho
            });
        }
        else if (n === 2 && c === 2 && d === 2) {
            setSaldo((prevSaldo) => {
                const novoGanho = aposta * 500;
                prevSaldo + aposta * 500;
                setGanho(novoGanho);
                return saldo + novoGanho
            });
        }
        else if (n === 3 && c === 3 && d === 3) {
            setSaldo((prevSaldo) => {
                const novoGanho = aposta * 250;
                prevSaldo + aposta * 250;
                setGanho(novoGanho);
                return saldo + novoGanho
            });
        }
        else if (n === 4 && c === 4 && d === 4) {
            setSaldo((prevSaldo) => {
                const novoGanho = aposta * 100;
                prevSaldo + aposta * 100;
                setGanho(novoGanho);
                return saldo + novoGanho
            });
        }
        else if (n === 5 && c === 5 && d === 5) {
            setSaldo((prevSaldo) => {
                const novoGanho = aposta * 50;
                prevSaldo + aposta * 50;
                setGanho(novoGanho);
                return saldo + novoGanho
            });
        }
    }


    useEffect(() => {
        if (n === c && c === d) {
            
            setExibirLinha(true);
            setMensagem(true);

            const linha = setTimeout(() => {
                setExibirLinha(false);
                setMensagem(false);
            }, 1000);


            return () => {
                clearTimeout(linha);
            };
        }
    }, [n, c, d]);


    useEffect(() => {
        if (e === f && f === g) {
            
            setExibirLinha2(true);
            setMensagem(true);


            const linha = setTimeout(() => {
                setExibirLinha2(false);
                setMensagem(false);
            }, 1000);

            return () => {
                clearTimeout(linha);
            };
        }
    }, [e, f, g]);

    useEffect(() => {
        if (h === i && i === j) {
            
            setExibirLinha3(true);
            setMensagem(true);

            const linha = setTimeout(() => {
                setExibirLinha3(false);
                setMensagem(false);
            }, 1000);

            return () => {
                clearTimeout(linha);
            };
        }
    }, [h, i, j]);


    useEffect(() => {
        if (n === e && e === h) {
            
            setExibirLinha4(true);
            setMensagem(true);

            const linha = setTimeout(() => {
                setExibirLinha4(false);
                setMensagem(false);
            }, 1000);

            return () => {
                clearTimeout(linha);
            };
        }
    }, [e, n, h]);


    useEffect(() => {
        if (c === f && f === i) {
            
            setExibirLinha5(true);
            setMensagem(true);

            const linha = setTimeout(() => {
                setExibirLinha5(false);
                setMensagem(false);
            }, 1000);

            return () => {
                clearTimeout(linha);
            };
        }
    }, [c, f, i]);


    useEffect(() => {
        if (d === g && g === j) {
            
            setExibirLinha6(true);
            setMensagem(true);

            const linha = setTimeout(() => {
                setExibirLinha6(false);
                setMensagem(false);
            }, 1000);

            return () => {
                clearTimeout(linha);
            };
        }
    }, [d, g, j]);




    return (
        <div className='container'>

            <p id='p'>DIVIRTA-SE</p>
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
                    </div>


                    <div className="icones1">
                    <p><GiFullMotorcycleHelmet color='red' />  x250</p>
                    <p><GiAnglerFish color='blue'/> x100</p>
                    <p><GiHemp color='green' />  x50</p>
                    </div>
                </div>
            </div>

        </div>


    );
}

export default Game