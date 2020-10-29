export function getAppointmentsForDay(state, day) {
  const result = [];
  state.days.map(data => {
    if (data.name === day) {
      data.appointments.map(id => {
        if ( state.appointments[id]) {
          result.push(state.appointments[id])
        };
      });
    };
    });
  return result;
};