import * as React from 'react';
import { useEffect } from "react";
import { GetAllMeetings, AddAMeeting, UpdateAMeeting, DeleteAMeeting } from "../../redux/Meeting/MeetingThunk";
import { useDispatch, useSelector } from "react-redux";
import * as ReactDOM from 'react-dom';
import { guid } from '@progress/kendo-react-common';
import { Day, lastMonthOfYear, timezoneNames } from '@progress/kendo-date-math';
import { DropDownList } from '@progress/kendo-react-dropdowns';
import { IntlProvider, load, LocalizationProvider, loadMessages } from '@progress/kendo-react-intl';
import { Scheduler, TimelineView, DayView, WorkWeekView, MonthView, AgendaView, SchedulerItem, SchedulerForm } from '@progress/kendo-react-scheduler';
import weekData from 'cldr-core/supplemental/weekData.json';
import currencyData from 'cldr-core/supplemental/currencyData.json';
import likelySubtags from 'cldr-core/supplemental/likelySubtags.json';
import numbers from 'cldr-numbers-full/main/es/numbers.json';
import dateFields from 'cldr-dates-full/main/es/dateFields.json';
import currencies from 'cldr-numbers-full/main/es/currencies.json';
import caGregorian from 'cldr-dates-full/main/es/ca-gregorian.json';
import timeZoneNames from 'cldr-dates-full/main/es/timeZoneNames.json';
import '@progress/kendo-date-math/tz/Etc/UTC';
import '@progress/kendo-date-math/tz/Europe/Sofia';
import '@progress/kendo-date-math/tz/Europe/Madrid';
import '@progress/kendo-date-math/tz/Asia/Dubai';
import '@progress/kendo-date-math/tz/Asia/Tokyo';
import '@progress/kendo-date-math/tz/America/New_York';
import '@progress/kendo-date-math/tz/America/Los_Angeles';
import esMessages from '../Meetings/es.json';
import { color, style } from '@mui/system';
load(likelySubtags, currencyData, weekData, numbers, currencies, caGregorian, dateFields, timeZoneNames);
loadMessages(esMessages, 'es-ES');

export const MeetingCalander = (Props) => {
  const timezones = React.useMemo(() => timezoneNames(), []);
  const locales = [{
    language: 'en-US',
    locale: 'en'
  }, {
    language: 'es-ES',
    locale: 'es'
  }];

  const baseData = useSelector((store) => {
    return store.Meeting.AllMeetings
  })

  const customModelFields = {
    id: 'TaskID',
    title: 'Title',
    description: 'Description',
    start: 'Start',
    end: 'End',
    recurrenceRule: 'RecurrenceRule',
    recurrenceId: 'RecurrenceID',
    recurrenceExceptions: 'RecurrenceException'
  };
  const currentYear = new Date().getFullYear();

  const randomInt = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

  const parseAdjust = eventDate => {
    const date = new Date(eventDate);
    date.setFullYear(currentYear);
    return date;
  };

  const displayDate = new Date(Date(currentYear, 5, 24));
  const sampleData = baseData.map(dataItem => ({
    id: dataItem.TaskID,
    start: parseAdjust(dataItem.Start),
    startTimezone: dataItem.startTimezone,
    end: parseAdjust(dataItem.End),
    endTimezone: dataItem.endTimezone,
    isAllDay: dataItem.isAllDay,
    title: dataItem.Title,
    description: dataItem.Description,
    recurrenceRule: dataItem.RecurrenceRule,
    recurrenceId: dataItem.RecurrenceID,
    recurrenceExceptions: dataItem.RecurrenceException,
    roomId: dataItem.RoomID,
    ownerID: dataItem.OwnerID,
    personId: dataItem.OwnerID
  }));
  const sampleDataWithResources = baseData.map(dataItem => ({
    id: dataItem.TaskID,
    start: parseAdjust(dataItem.Start),
    startTimezone: dataItem.startTimezone,
    end: parseAdjust(dataItem.End),
    endTimezone: dataItem.endTimezone,
    isAllDay: dataItem.isAllDay,
    title: dataItem.Title,
    description: dataItem.Description,
    recurrenceRule: dataItem.RecurrenceRule,
    recurrenceId: dataItem.RecurrenceID,
    recurrenceExceptions: dataItem.RecurrenceException,
    roomId: randomInt(1, 2),
    personId: randomInt(1, 2)
  }));
  const sampleDataWithCustomSchema = baseData.map(dataItem => ({
    ...dataItem,
    Start: new Date(dataItem.Start),
    End: new Date(dataItem.End),
    PersonIDs: randomInt(1, 2),
    RoomID: dataItem.OwnerID
  }));

  const [view, setView] = React.useState('day');
  const [date, setDate] = React.useState(displayDate);
  const [locale, setLocale] = React.useState(locales[0]);
  const [timezone, setTimezone] = React.useState();
  const [orientation, setOrientation] = React.useState('horizontal');
  const [data, setData] = React.useState(sampleDataWithCustomSchema);
  const handleViewChange = React.useCallback(event => {
    setView(event.value);
  }, [setView]);
  const handleDateChange = React.useCallback(event => {
    debugger
    setDate(event.value);
  }, [setDate]);
  const handleLocaleChange = React.useCallback(event => {
    setLocale(event.target.value);
  }, [setLocale]);
  const handleTimezoneChange = React.useCallback(event => {
    setTimezone(event.target.value);
  }, [setTimezone]);
  const handleOrientationChange = React.useCallback(event => {
    setOrientation(event.target.getAttribute('data-orientation'));
  }, []);


  // const CustomItem=(props)=>
  //   {
  //   debugger
  //   <SchedulerItem
  //   {...props}
  //   children={{
  //     ...props.children.push(props.children[0])
  //     // ..:props.isAllDay?"red":"blue",
  //   }}
  //   />
  // }
  
  const myresources = [{
    name: 'Rooms',
    data: Props.obj,
    field: 'RoomID',
    valueField: 'value',
    textField: 'text',
    colorField: 'color'
  }
  ]



  // שולח לקובץ הזנק בשביל לשלוח לסרוור בעת טעינת הקומפוננטה
//   const dispatch = useDispatch();
//   useEffect(async () => {
//     console.log(data);
//     console.log(date);
//     debugger;
//     let m = await GetAllMeetings(dispatch, "")
//     // Props.obj.map((item, index)=>{
//     //   debugger
//     //   let newObj={
//     //     text: item,
//     //     value: index+1,
//     //     color: 'purple'
//     //   }
//     //   myresources[0].data.push(newObj)
//     // })
//   }, [])

  const myFunc = (e) => {
    debugger
    return 5;
  }


  return <div>
    <div className="example-config">
      <div className="row">
        <div className="col">
        </div>
      </div>
    </div>
    <LocalizationProvider language={locale.language}>
      <IntlProvider locale={locale.locale}>
        <Scheduler
        // item={CustomItem}
          style={{ width: '75%', position: 'absolute', marginLeft: '15%' }}
          data={sampleDataWithCustomSchema}
          onDataChange={(event) => myFunc(event)}
          view={view}
          onViewChange={handleViewChange}
          timezone={timezone} date={date} onDateChange={handleDateChange}
          editable={{ add: false, remove: true, drag: true, resize: false, edit: false }}
          modelFields={customModelFields}
          group={{
            //אם נוריד את זה יהיה בלי חלוקה רק אם צבעים
            resources: ['Rooms'],
            orientation
          }}
          resources={myresources}>
          <DayView step={15} />
          {/* <WorkWeekView title="Week" workWeekStart={Day.Sunday} workWeekEnd={Day.Friday} />
          <MonthView />
          <AgendaView /> */}
        </Scheduler>
      </IntlProvider>
    </LocalizationProvider>
  </div>;
};

