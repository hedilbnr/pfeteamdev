import { Component, ChangeDetectorRef } from '@angular/core';
import { CalendarOptions, DateSelectArg, EventClickArg, EventApi } from '@fullcalendar/core';
import interactionPlugin from '@fullcalendar/interaction';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import listPlugin from '@fullcalendar/list';
import { createEventId, INITIAL_EVENTS } from '../event-utils';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})
export class CalendarComponent {
  addConge(start: string, end: string, title: string) {
    const calendarApi = this.calendarComponent.getApi();
  
    calendarApi.addEvent({
      id: createEventId(),
      title,
      start,
      end,
      allDay: true,
      color: '#FF0000', // Choose a color for the congé
    });
  
    this.holidays.push({ start, end, title }); // Add the congé to the list of holidays
  }
  calendarVisible = true;
  calendarOptions: CalendarOptions = {

    plugins: [
      interactionPlugin,
      dayGridPlugin,
      timeGridPlugin,
      listPlugin,
    ],
    headerToolbar: {
      left: 'prev,next today',
      center: 'title',
      right: 'dayGridMonth,timeGridWeek,timeGridDay,listWeek'
    },
    initialView: 'dayGridMonth',
    initialEvents: INITIAL_EVENTS, // alternatively, use the `events` setting to fetch from a feed
    weekends: true,
    editable: true,
    selectable: true,
    selectMirror: true,
    dayMaxEvents: true,
    select: this.handleDateSelect.bind(this),
    eventClick: this.handleEventClick.bind(this),
    eventsSet: this.handleEvents.bind(this),
    dayCellContent: this.handleDayCellContent.bind(this),

  };
  
    /* you can update a remote database when these fire:
    eventAdd:
    eventChange:
    eventRemove:
    */
  
  holidays: any[] = [];
  calendarComponent: any;
  addHoliday(start: Date, end: Date, title: string) {
    const calendarApi = this.calendarComponent.getApi();
  
    calendarApi.addEvent({
      id: createEventId(),
      title:'Fête du travail',
      start:new Date('2023-05-01'),
      end:new Date('2023-05-01'),
      allDay: true,
      color: '#FF0000', // choisir une couleur pour le congé
    });
  
    this.holidays.push({ start, end, title }); // ajouter le congé à la liste des congés
  }
  
  isHoliday(date: Date): boolean {
    for (const holiday of this.holidays) {
      if (date >= holiday.start && date <= holiday.end) {
        return true;
      }
    }
  
    return false;
  }
  
  handleDayCellContent(e) {
    if (this.isHoliday(e.date)) {
      return { html: "<span style='color: red;'>Férié</span>" };
    } else {
      return {};
    }
  }
    
// Ajouter une méthode pour ajouter un événement de congé

  currentEvents: EventApi[] = [];

  constructor(private changeDetector: ChangeDetectorRef) {
    this.holidays = []; // initialiser la liste des congés
  }
  

  handleCalendarToggle() {
    this.calendarVisible = !this.calendarVisible;
  }

  handleWeekendsToggle() {
    const { calendarOptions } = this;
    calendarOptions.weekends = !calendarOptions.weekends;
  }

  handleDateSelect(selectInfo: DateSelectArg) {
    const title = prompt('Please enter a new title for your event');
    const calendarApi = selectInfo.view.calendar;

    calendarApi.unselect(); // clear date selection

    if (title) {
      calendarApi.addEvent({
        id: createEventId(),
        title,
        start: selectInfo.startStr,
        end: selectInfo.endStr,
        allDay: selectInfo.allDay
      });
    }
  }

  handleEventClick(clickInfo: EventClickArg) {
    if (confirm(`Are you sure you want to delete the event '${clickInfo.event.title}'`)) {
      clickInfo.event.remove();
    }
  }

  handleEvents(events: EventApi[]) {
    this.currentEvents = events;
    this.changeDetector.detectChanges();
  }
}