import React from 'react'
import { ViewState, EditingState, IntegratedEditing } from '@devexpress/dx-react-scheduler';
import { Scheduler, WeekView, Appointments, AppointmentForm } from '@devexpress/dx-react-scheduler-material-ui';
function Attendance() {
  const saveAppointment = (data) => {
    console.log('committing changes');
    console.log(data);
}
  return (
    <div id="calendar">
      <Scheduler>
        <ViewState />
        <EditingState onCommitChanges={saveAppointment} />
        <IntegratedEditing />
        <WeekView startDayHour={9} endDayHour={19} />
        <Appointments />
        <AppointmentForm />
      </Scheduler>
    </div>);
  
}

export default Attendance