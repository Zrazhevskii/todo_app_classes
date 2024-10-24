import { Component } from 'react';
import NewTaskForm from './components/NewTaskForm/NewTaskForm';

export default class App extends Component {
    // state = {
    //     item: 'old',
    // };

    state = {
        tasks: [
            { idTask: 1, task: 'Сделать машину', active: true, created: new Date(2023, 7, 1, 10, 28, 15) },
            { idTask: 2, task: 'Купить подарок', active: true, created: new Date(2024, 6, 2, 18, 5, 34) },
         ]
    }

    constructor() {
        super();
    }

    idNumber = () => {
        const randomNumber1 = Math.floor(Math.random() * 1000);
        const randomNumber2 = Math.floor(Math.random() * 10000);
        return randomNumber1 + randomNumber2;
     };

    createTask = (valueForm) => {
        const time = new Date();
        this.setState((prevTasks) => [...prevTasks, { idTask: this.idNumber(), task: valueForm, active: true, created: time }]);
     };

    render() {
        // const { item } = this.state;
        return (
            <section className='todoapp'>
                <NewTaskForm createTask={this.createTask} />
                <section className='main'>
                    {/* <TaskList data={filterTasks} deletTask={deletTask} toggleChecked={toggleChecked} updateTask={updateTask} /> */}
                    {/* <Footer clearTasksCompleted={clearTasksCompleted} updateStatus={updateStatus} activeCount={activeCount} /> */}
                </section>
            </section>
        );
    }
}
