
'use client';

import React, { useState, useEffect } from 'react';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Bell, CalendarClock } from 'lucide-react';

const getTdsReturnDueDate = () => {
  const today = new Date();
  const month = today.getMonth(); // 0-11
  const quarter = Math.floor(month / 3) + 1;

  let dueDateMonth = '';
  switch (quarter) {
    case 1: // Jan-Mar quarter, due date is May 31 for March qtr return
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

export function ComplianceAlerts() {
  const [dueDate, setDueDate] = useState('');

  useEffect(() => {
    setDueDate(getTdsReturnDueDate());
  }, []);

  return (
    <div className="mt-12 md:mt-16">
      <h2 className="text-3xl font-bold font-headline mb-6 text-center">
        Compliance Corner
      </h2>
      <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-lg font-medium">
              TDS Deposit Due Date
            </CardTitle>
            <CalendarClock className="h-6 w-6 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-4xl font-bold text-primary">7th</div>
            <p className="text-xs text-muted-foreground">
              of every month for the preceding month's deductions.
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-lg font-medium">
              TDS Return Filing
            </CardTitle>
            <Bell className="h-6 w-6 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-4xl font-bold text-primary">
              {dueDate || '31st'}
            </div>
            <p className="text-xs text-muted-foreground">
              of the month following the quarter end. (Varies for March
              quarter)
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
