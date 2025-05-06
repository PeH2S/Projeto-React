import { Link } from "react-router-dom";
import Letreiro from "./Letreiro";
import Relogio from "./Relogio";

export default function Ativ01() {
    return (
        <div className="container mt-5">
            <h2 className="text-center mb-4">Página Inicial</h2>
            <ul className="list-group">
                <li className="list-group-item">
                    <Link to="/letreiro" className="btn btn-primary btn-block">
                        Ir para Letreiro
                    </Link>
                </li>
                <li className="list-group-item">
                    <Link to="/relogio" className="btn btn-success btn-block">
                        Ir para Relógio
                    </Link>
                </li>
            </ul>
        </div>
    );
}
