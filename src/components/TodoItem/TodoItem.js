import React, { Fragment } from 'react'
import { Button, FormGroup, UncontrolledTooltip, Label } from 'reactstrap';
import { DueDate } from 'components';
import { confirmAlert } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css';

const TodoItem = (props) => {
    const { message, dueDate, open, _id, onChange, onRemove, isEdit } = props;
    return (
        <tr>
            <td width="30">
                <FormGroup check>
                    <Label check>
                        <input checked={!open} onChange={onChange} type="checkbox" />
                        <span className="form-check-sign">
              <span className="check" />
            </span>
          </Label>
        </FormGroup>
      </td>
      <td>
        <p className="title">{isEdit ? 'editing:': null} {message}</p>
        { dueDate ? (
          <DueDate date={dueDate} />
        ) : null }
      </td>
      <td className="td-actions text-right">
        { typeof onRemove === 'function' ?
          <Fragment>
            <Button
              color="link"
              id={`tooltip_remove_${_id}`}
              title=""
              type="button"
              onClick={()=>confirmAlert({
                  customUI: ({ onClose }) => {
                      return (
                          <div className='custom-ui'>
                              <h1 style={{color:'black'}}>Are you sure?</h1>
                              <p>You want to delete this file?</p>
                              <button onClick={onClose}>No</button>
                              <button
                                  onClick={() => {
                                      onRemove();
                                      onClose();
                                  }}
                              >
                                  Yes, Delete it!
                              </button>
                          </div>
                      );
                  }
              })
              }
                 >
              <i className="tim-icons icon-trash-simple" />
            </Button>
            <UncontrolledTooltip
              delay={0}
              target={`tooltip_remove_${_id}`}
              placement="right"
            >
              Remove Task
            </UncontrolledTooltip>
          </Fragment>
        : null}
      </td>
        </tr>
    )
}
export default TodoItem;