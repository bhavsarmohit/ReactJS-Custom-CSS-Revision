import React from 'react'
import PropTypes from 'prop-types';
import './Todo.css'
export const Todo = ({ todo, btnDelete }) => {
    return (


        <div className='card'>
            <b>{todo.id}</b>

            <div className="left-margin-info">
                {todo.name}<br />
                {todo.mobile}
            </div>

            <div className='float-right center-verticle'>
                <div id='btn-delete' onClick={() => { btnDelete(todo) }}>Delete</div>
            </div>
        </div >

    )
}

Todo.defaultProps = {
    // key: 0,
}

Todo.propTypes = {
    // key: PropTypes.number,
}