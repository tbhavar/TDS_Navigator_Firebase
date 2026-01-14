import React from 'react';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Bell, CalendarClock } from 'lucide-react';

export function ComplianceAlerts() {
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
            <div className="text-4xl font-bold text-primary">31st</div>
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
