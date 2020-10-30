import React from 'react'
import "components/Appointment/styles.scss";
import Header from "components/Appointment/Header"
import Show from "components/Appointment/Show"
import Empty from "components/Appointment/Empty"
import useVisualMode from "../../hooks/useVisualMode";
import Form from "components/Appointment/Form"
import Status from "components/Appointment/Status"





export default function Appointment (props) {
  const EMPTY = "EMPTY";
  const SHOW = "SHOW";
  const CREATE = "CREATE";
  const SAVING = "SAVING";
  


  function save(name, interviewer) {
    const interview = {
      student: name,
      interviewer
    };
    transition(SAVING);
    props.bookInterview(props.id,interview)
    .then(() => {transition(SHOW)}) 
    ;
  };
  
  const { mode, transition, back } = useVisualMode(
    props.interview ? SHOW : EMPTY
  );
  return (
    <article className='appointment'>
      <Header
      />
      {mode === EMPTY && <Empty onAdd={() => transition(CREATE)} />}
      {mode === SHOW && (
      <Show
        student={props.interview.student}
        interviewer={props.interview.interviewer}
      />
      )}
      {mode === CREATE && (
      <Form 
        interviewers={props.interviewers}
        onSave={save}
        onCancel={back}
        />
        )}
        {mode === SAVING && (
        <Status
          message="Saving"
        />)}
    </article>
  );
}