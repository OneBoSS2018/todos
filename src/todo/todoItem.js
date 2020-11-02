import React from 'react'
import PropTypes from 'prop-types'


 function  TodoItem({todo, index, onChange}) {
    const  classes = []
     if (todo.compleated) {
         classes.push('done')
     }
    return (<li>
                <span className={classes.join(' ')}>
                    <input type='checkbox' checked={todo.compleated}
                           onChange={ () => onChange(todo.id)} />
                    <strong>{index + 1 + ')'}</strong> { ' ' + todo.title}
                </span>
        <button>&times;</button>
        </li>)
}

TodoItem.propTypes = {
    todo: PropTypes.object.isRequired,
    index: PropTypes.number,
    onchange: PropTypes.func.isRequired
}

export  default TodoItem