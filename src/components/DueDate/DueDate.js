import React from 'react'
import moment from 'moment';
import "react-datepicker/dist/react-datepicker.css";


const DueDate = ({date,format,open}) => {
    //const formatted = React =>  moment(date).format(format) ;
    let formatted = (moment(date).format('YYYY-MM-DD'));
    let data = (moment().format('YYYY-MM-DD'));

   function  calculateDaysLeft(data,formatted)
     {
         if (!moment.isMoment(data)) data = moment(data);
        if (!moment.isMoment(formatted)) formatted = moment(formatted);
        return formatted.diff(data,"days")
     }

         if((calculateDaysLeft(data,formatted))>2 || !open){
             return(
                 <p className="text-success">{formatted}</p>
             );
         } else if((calculateDaysLeft(data,formatted))>0 && (calculateDaysLeft(data,formatted))<=2) {
             return (
                 <p className="text-warning">{formatted}</p>
             );
         }
     else{
         return(
       <p className="text-danger">{formatted}</p>
         );
     }
};



export default DueDate;
