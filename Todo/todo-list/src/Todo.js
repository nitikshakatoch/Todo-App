import { List, ListItem, ListItemText } from '@mui/material';
import React from 'react';
import './Todo.css'

function Todo(props) {
  return (
  <List className="todo__list">
      <ListItem>
          <ListItemText primary={props.todo} secondary="Do it On Time"/>
      </ListItem>
  </List>
  )
}

export default Todo;