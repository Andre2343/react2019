import React from 'react'
import moment from 'moment';

const DueDate = ({date,format}) => {
  //const formatted = React =>  moment(date).format(format) ;
    const formatted = (moment(date).format('YYYY-MM-DD') );

    return (
    <p className="text-danger">{formatted}</p>
  );
}

export default DueDate;
