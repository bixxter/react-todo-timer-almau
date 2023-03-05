import { PlusIcon } from '@heroicons/react/24/solid'
/* Importing the useState hook from the react package. */
import { useState } from 'react'

const CustomForm = ({ addTask }) => {
    const [task, setTask] = useState('')
    const [deadline, setDeadline] = useState('')

    const handleFormSubmit = (e) => {
        e.preventDefault()
        setTask('')
        addTask({
            name: task,
            checked: false,
            id: Date.now(),
            deadline: deadline,
        })
    }

    return (
        <form className="todo" onSubmit={handleFormSubmit}>
            <div className="wrapper">
                <input
                    type="text"
                    id="task"
                    className="input"
                    value={task}
                    onInput={(e) => setTask(e.target.value)}
                    required
                    maxLength={60}
                    placeholder={'Enter Task'}
                />
                <label htmlFor="task" className="label">
                    Enter Task
                </label>
            </div>

            <div className="wrapper deadline">
                <input
                    type="date"
                    id="deadline"
                    className="input"
                    value={deadline}
                    onInput={(e) => setDeadline(e.target.value)}
                    required
                    maxLength={60}
                    placeholder={'Enter Deadline'}
                />
                <label htmlFor="deadline" className="label">
                    Enter Deadline
                </label>
            </div>
            <button className="btn" aria-label="Add Task" type="submit">
                <PlusIcon />
            </button>
        </form>
    )
}

export default CustomForm
