
'use client';

import React, { useState, useEffect } from 'react';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Bell, CalendarClock, AlertTriangle } from 'lucide-react';

const getTdsReturnDueDate = () => {
  const today = new Date();
  const month = today.getMonth(); // 0-11
  const quarter = Math.floor(month / 3) + 1;

  let dueDateMonth = '';
  switch (quarter) {
    case 1: // Jan-Mar quarter, due date is May 31
      dueDateMonth = 'May';
      break;
    case 2: // Apr-Jun quarter, due date is July 31
      dueDateMonth = 'July';
      break;
    case 3: // Jul-Sep quarter, due date is Oct 31
      dueDateMonth = 'October';
      break;
    case 4: // Oct-Dec quarter, due date is Jan 31
      dueDateMonth = 'January';
      break;
    default:
      dueDateMonth = '';
  }
  return `31st ${dueDateMonth}`;
};

const getPreviousQuarterDueDate = () => {
  const today = new Date();
  let prevQuarterMonth = today.getMonth() - 3;
  if (prevQuarterMonth < 0) {
    prevQuarterMonth += 12;
  }
  const prevQuarter = Math.floor(prevQuarterMonth / 3) + 1;
  const year = today.getFullYear();

  let dueDate = '';
  let quarterName = '';

  switch (prevQuarter) {
    case 1: // Jan-Mar
      quarterName = 'Jan-Mar';
      dueDate = `31st May ${year}`;
      break;
    case 2: // Apr-Jun
      quarterName = 'Apr-Jun';
      dueDate = `31st July ${year}`;
      break;
    case 3: // Jul-Sep
      quarterName = 'Jul-Sep';
      dueDate = `31st Oct ${year}`;
      break;
    case 4: // Oct-Dec
      quarterName = 'Oct-Dec';
      dueDate = `31st Jan ${year + 1}`;
      break;
    default:
      dueDate = '';
  }

  return { dueDate, quarterName };
};

const getDepositDueDateMonth = () => {
  const today = new Date();
  const nextMonth = new Date(today.getFullYear(), today.getMonth() + 1, 1);
  return nextMonth.toLocaleString('default', { month: 'long' });
};

export function ComplianceAlerts() {
  const [returnDueDate, setReturnDueDate] = useState('');
  const [depositDueDateMonth, setDepositDueDateMonth] = useState('');
  const [prevQuarterInfo, setPrevQuarterInfo] = useState({
    dueDate: '',
    quarterName: '',
  });

  useEffect(() => {
    setReturnDueDate(getTdsReturnDueDate());
    setDepositDueDateMonth(getDepositDueDateMonth());
    setPrevQuarterInfo(getPreviousQuarterDueDate());
  }, []);

  return (
    <div className="mt-12 md:mt-16">
      <h2 className="text-3xl font-bold font-headline mb-6 text-center">
        Compliance Corner
      </h2>
      <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-lg font-medium">
              TDS Deposit Due Date
            </CardTitle>
            <CalendarClock className="h-6 w-6 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-4xl font-bold text-primary">
              7th {depositDueDateMonth || ''}
            </div>
            <p className="text-xs text-muted-foreground">
              of the month for the preceding month's deductions.
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-lg font-medium">
              Upcoming TDS Return
            </CardTitle>
            <Bell className="h-6 w-6 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-4xl font-bold text-primary">
              {returnDueDate || '31st'}
            </div>
            <p className="text-xs text-muted-foreground">
              of the month following the quarter end. (Varies for March
              quarter)
            </p>
          </CardContent>
        </Card>
        <Card className="border-amber-500/50 bg-amber-50/20">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-lg font-medium text-amber-700">
              Pending Return Reminder
            </CardTitle>
            <AlertTriangle className="h-6 w-6 text-amber-600" />
          </CardHeader>
          <CardContent>
            <div className="text-4xl font-bold text-amber-600">
              {prevQuarterInfo.dueDate || ''}
            </div>
            <p className="text-xs text-muted-foreground">
              Due date for {prevQuarterInfo.quarterName} quarter has passed.
              File now to avoid penalties.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
