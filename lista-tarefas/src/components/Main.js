import React, {Component} from "react";
import './Main.css';

import {FaEdit, FaWindowClose, FaPlus} from 'react-icons/fa';

/*export default class Main extends Component{
    render(){
        return <h1>Meu componente com estado</h1>
    }
} Antes de criar o estado */

//Após criar o estado do componente
export default class Main extends Component{
    /*constructor(props){
        super(props); //chamando o construpor de Component


        this.state = {
            novaTarefa :'',
        };

        this.inputMudou = this.inputMudou.bind(this);
    } sem usar o class fields*/

    state = {
        novaTarefa :'',
        tarefas : [],
    };

    /*
     inputMudou(e){
        this.setState({
            novaTarefa : e.target.value,
        });
    } sem o class fields
     */
    handleSubmit = (e) => {
       e.preventDefault();//para o formulario nao enviar
       const {tarefas} = this.state;
       let novaTarefa = this.state;
       novaTarefa = novaTarefa.trim();// jogando as tarefas p dentro do array, trim ignora o 
       //que foi escrito antes

       if(tarefas.indexOf(novaTarefa) !== -1) return;
       //se o indice existir return 

       const novasTarefas = [...tarefas];//n se pode modificar o estado diretamente
       this.setState({
            tarefas: [...novasTarefas, novaTarefa],
       });
    } 

    handleChange = (e) => {
        this.setState({
            novaTarefa : e.target.value,
        });
    }
    
    render(){

        const {novaTarefa, tarefas} = this.state;

        return (
                    <div className="main">
                        <h1>Lista de tarefas</h1>
                        <form onSubmi={this.handleSubmit} action="#" className="form">
                            <input 
                                onChange={this.handleChange} 
                                type="text"
                                value= {novaTarefa}
                            />
                            <button type="submit">
                                < FaPlus/>
                            </button>
                        </form>

                        <ul className="tarefas">
                            {tarefas.map((tarefa) => (
                                <li key={tarefa}>
                                     {tarefa}
                                     <span>
                                        <FaEdit className="edit"/>
                                        <FaWindowClose className="delet"/>
                                     </span>
                               </li>
                            ))}
                        </ul>
                    
                    </div>
                );
    }
}